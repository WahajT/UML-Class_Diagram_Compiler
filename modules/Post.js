const fs = require("fs");
const md5 = require("md5");
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const db = require("../config/config").getConnection();
const multer = require("multer");
const path = require("path");
const os = require("os");
const checkAuth = require("../middleware/check-auth");
const ampq = require("amqplib/callback_api");

function generateOTP() {
  // Generate a random 4-digit number
  const otp = Math.floor(Math.random() * 10000);

  // If the number is less than 1000, add leading zeros
  if (otp < 1000) {
    return ('0' + otp).slice(-4);
  } else {
    return otp.toString();
  }
}


const sendConfirmation = (receiver, subject, text) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ahmadyasir4439@gmail.com',
      pass: 'gqknolwxpkgfiuly',
    },
  });

  var mailOptions = {
    from: 'ahmadyasir4439@gmail.com',
    to: receiver,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// app.get("login", (req, res)=> {
//   req.session.isAuth = true;
//   console.log(req.session);
// })
router.post("/main", (req, res) => {
  let email = db.escape(req.body.Email)
  let File = db.escape(req.body.File)
  let Errors = req.body.Errors
  // console.log(email, File)
  let promiseOne = new Promise((resolve, reject) => {
    let sql1 = `SELECT * FROM users WHERE email = ${email}`;
    let query1 = db.query(sql1, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Some Error Occured in Checking Email",
        });
      }
      if (result.length > 0) {
        resolve(result);
      }
      reject("Email Not Found");
    });
  });
  promiseOne.then(
    (data) => {
      // Email Found
      let sql2 = `INSERT INTO files (email,file,errors) VALUES (${email}, ${File},${Errors})`;
      let query2 = db.query('insert into files(email,file,errors) values(?,?,?)', [email?.replaceAll("'", ''), File, JSON.stringify(Errors)], function (err1, result) {
        if (err1) {
          console.log(err1);
          return res.status(500).json({
            message: "Some Error Occured in Uplaoding the File",
          });
        }
        return res.status(200).json({
          result: Errors,
          message: "Success",
        });
      })
      // let query2 = db.query(sql2, (err1, result) => {
      //   if (err1) {
      //     console.log(err1);
      //     return res.status(500).json({
      //       message: "Some Error Occured in Uplaoding the File",
      //     });
      //   }
      //   return res.status(200).json({
      //     message: "Success",
      //   });
      // });

    })
})



router.post("/save", (req, res) => {
  let email = db.escape(req.body.Email)
  let email_send = req.body.Email
  let pass = db.escape(req.body.Password)
  console.log('email', 'pass')
  console.log(email, pass)
  // Got the attributes from front end
  // Check if a user exists with same email
  let promiseOne = new Promise((resolve, reject) => {
    let sql1 = `SELECT * FROM users WHERE email = ${email}`;
    let query1 = db.query(sql1, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Some Error Occured in Checking Email",
        });
      }
      if (result.length > 0) {
        reject("Email Already exists.");
        process.on('unhandledRejection', (reason, p) => {
          console.error(reason);
        });
      }
      resolve(result);
    });
  });
  promiseOne.then(
    (data) => {
      // No Email Found With this Email
      let otpcode = generateOTP();
      let sql2 = `INSERT INTO users (email, password, otp_code) VALUES (${email}, ${pass}, ${otpcode})`;
      let query2 = db.query(sql2, (err1, result) => {
        if (err1) {
          console.log(err1);
          return res.status(500).json({
            message: "Some Error Occured in Checking Email",
          });
        }
        sendConfirmation(
          email_send,
          'Confirmation From UML Compiler',
          'Your Otp Code is: ' + otpcode
        );
        return res.status(200).json({
          message: "Success",
        });
      });
    },
     (error) => {
        // Email Found with given Email
        return res.status(500).json({
        message: error,
        });
      }
      );
});

router.post("/login", (req, res) => {

  let email = db.escape(req.body.Email)
  let pass = db.escape(req.body.Password)



  let sql1 = `SELECT * FROM users WHERE email = ${email} and password = ${pass}`;
  let query1 = db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Some Error Occured in Checking Email",
      });
    }

    if (result.length > 0) {
      return res.status(200).json({
        valid: true
      })
    }
    else {
      return res.status(200).json({
        valid: false
      })
    }
  })

})

module.exports = router;
