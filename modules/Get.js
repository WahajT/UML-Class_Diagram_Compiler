const fs = require("fs");
const path = require("path");
const db = require("./../config/config").getConnection();
var md5 = require("md5");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const { resolve } = require("path");
const { rejects } = require("assert");
const { error } = require("console");

router.get("/", (req, res) => {
  res.send("get Routes are working...");
  return;
});
router.post("/get_files", (req, res) => {
  let email = db.escape(req.body.email)
  let sql1 = `SELECT * FROM files WHERE email Like ${email} `;
  let query1 = db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({
        message: "Some Error Occured While Getting the Files",
      });
    } else {
      return res.status(200).send({
        data: result
      })
    }
  })


});

router.get("/test", (req, res) => {

  let sql1 = `INSERT INTO users (email, password) VALUES ('ahmed', '1234')`;
  let query1 = db.query(sql1, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Some Error Occured in Checking Email",
      });
    }
  })

  return res.json({
    message: "yes saved"
  })

})

module.exports = router;
