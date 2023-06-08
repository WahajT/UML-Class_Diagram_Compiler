
/* The above code is importing the `Parser` class from the `xml2js` library in JavaScript. This class
can be used to parse XML data into a JavaScript object. */
/* eslint-disable */
import { Parser } from "xml2js";
import { decode } from "./deflate/deflate.js";;


// create a tokenizer object
// const tokenizer = new Tokenizer();
// var natural=require("natural");
// xml2js parser
export const xmlParser = (file) => {
    const parser = new Parser();

    // inflated draw io file path
    const drawioFilePath = "./class 2.drawio.xml";
    // const parser1 = new xml2js.Parser();
    // fs.readFile("class 2.drawio.xml", (err, data) => {
    //   parser1.parseString(data, (err, result) => {
    //     const json = JSON.stringify(result, null, 2);
    //     console.log(json);
    //   });
    // });
    // fs.writeFile('classDiagram.json', json, function(err) {
    //   if(err) {
    //       console.log(err);
    //   } else {
    //       console.log("JSON saved to classDiagram.json");
    //   }
    // });
    // reading file


    //console.log(data);

    // parsing read data as xml to extract inflated XML
    parser.parseString(file, (err, result) => {
        if (err) {
            // handle parsing error here
            return;
        }

        // Extracting inflated XML
        const inflatedXMLNode = result.mxfile.diagram[0]._;
        // console.log("-------------");
        //console.log(inflatedXMLNode);

        // decoding inflated XML into deflated XML
        const deflatedXML = decode(inflatedXMLNode);
        console.log("-------------");
        console.log(deflatedXML);

        // XML is deflated into `deflatedXML` object. Use this object to further process using xml2js's parser.parseString method

        parser.parseString(deflatedXML, (err, result) => {
            // const json = JSON.stringify(result, null, 2);
            // console.log(json);
            if (err) {
                // handle parsing error here
                console.log(err);
                return;
            }
            console.log(result.mxGraphModel.root, 'result.mxGraphModel.root');
            // Check if class diagram has at least one class
            //  for(const count of result.mxGraphModel.root[0].mxCell)
            //{
            //  console.log(count);
            //}
            // for(let count of result.mxGraphModel.root[0].mxCell)
            //  {
            /* This is extracting the mxCell array from the deflated XML. */
            const count = result.mxGraphModel.root;
            // console.log(count[0].mxCell);
            // console.log(count.length);
            let mxCellArray = count[0].mxCell;
            let val = mxCellArray[1].$.id;
            console.log(val);
            const regex = /line.*/;
            const regex1 = /swimlane.*/;
            class_name();
            // check_attribute();
            function class_name() {
                const count = result.mxGraphModel.root;
                // console.log(count[0].mxCell);
                // console.log(count.length);
                let mxCellArray = count[0].mxCell;
                let val = mxCellArray[1].$.id;
                for (let i = 0; i < mxCellArray.length; i++) {

                    console.log("-----------------------------");
                    /* This is checking if the class name is in UpperCamelCase and if it is unique. */
                    var count1 = 0, count2 = 0, count3 = 0;
                    if (mxCellArray[i].$.parent === val && mxCellArray[i].$.style.match(regex1) && (mxCellArray[i].$.value != null)) {
                        count1++;
                        console.log("validation1");
                        console.log(mxCellArray[i].$.value);
                        var attributevalue1 = mxCellArray[i].$.value;
                        if (mxCellArray[i].$.parent === mxCellArray[i + 1]) {
                            console.log("Class must have unique name");
                        }
                        if (!/^[A-Z][a-zA-Z $_]*$/.test(mxCellArray[i].$.value)) {
                            console.log(`Error: Class "${mxCellArray[i].$.value}" name must be in UpperCamelCase and consist of characters only.`)
                        }
                    }
                    else if ((mxCellArray[i].$.parent != val || !mxCellArray[i].$.style.match(regex)) && mxCellArray[i].$.parent === attributevalue1) {
                        // check_attribute();
                    }

                }
            }

            const regex2 = /endArrow=open.*/;
            const regex3 = /endArrow=block.*/;
            const regex4 = /"edgeStyle=orthogonalEdgeStyle;*/;
            const regex5 = /parent=.* source=.* target=.* edge="1"/;
            const count4 = result.mxGraphModel.root;
            let mxCellArray1 = count4[0].mxCell;
            const myarray = [];
            for (let i = 0; i < mxCellArray1.length; i++) {
                // if (mxCellArray1[i].$.parent===val && mxCellArray1[i].$.style.match(regex1)&&(mxCellArray1[i].$.value!=null))
                //     {
                //       var attributevalue1=mxCellArray1[i].$.style;
                //       // myarray.push(attributevalue1);
                //       // console.log(myarray);
                //       console.log("Hello")
                //       console.log(attributevalue1);
                //       // console.log(mxCellArray1[i].$.value);
                //     }
                if (mxCellArray1[i].$ === 1) {
                    let style = mxCellArray1[i].$.style;
                    console.log(style);
                }
                if ((regex2.test(mxCellArray1[i].$.style) || regex3.test(mxCellArray1[i].$.style) || regex4.test(mxCellArray1[i].$.style))) {
                    const source = [];
                    const target = [];
                    console.log("Hello")
                    source.push(mxCellArray1[i].$.source);
                    target.push(mxCellArray1[i].$.target);
                    for (let j = 0; j < myarray.length; j++) {
                        // if(source===myarray[j]&&target===myarray[j+1])
                        // do something with the source and target nodes
                        if (mxCellArray1[i].$.style.match(regex2))
                            console.log(`simple Relation found between source=${source} and target=${target}`);
                        else if (mxCellArray1[i].$.style.match(regex3))
                            console.log(`Association found between source=${source} and target=${target}`);
                        else if (mxCellArray1[i].$.style.match(regex4))
                            console.log(`Association found between source=${source} and target=${target}`);
                    }
                }
            }


            function check_attribute() {
                const count = result.mxGraphModel.root;
                // console.log(count[0].mxCell);
                // console.log(count.length);
                let mxCellArray = count[0].mxCell;
                let val = mxCellArray[1].$.id;
                for (let i = 0; i < mxCellArray.length; i++) {
                    if (mxCellArray[i].$.parent === val && mxCellArray[i].$.style.match(regex1)) {

                    }
                    else if ((mxCellArray[i].$.parent != val || !mxCellArray[i].$.style.match(regex)) && mxCellArray[i].$.parent === attributevalue1) {
                        /* Checking if the class name is in UpperCamelCase and if it is unique. */
                        const attributeRegex = /^(\+|\-|\#)\w:\s(int|float|string|bool|void|class|double|long|short|char|date)$/;
                        const attributeRegex1 = /^(\+|\-|\#)\w+\(\):+\s*(date|float|string|bool|void|class|double|long|int|char)$/;
                        const attributeRegex2 = /^(\+|\-|\#)\s+([a-zA-Z]+ )?[a-zA-Z]+\(\)(:)+(int|float|string|bool|void|class|double|long|short|char|date)$/;
                        const attributeValue1 = '+register(string): void';
                        const matches = attributeRegex2.test(attributeValue1);
                        if (matches) {
                            console.log("Matched");
                        }
                        // var regtokenizer = new natural.RegexpTokenizer({pattern:/\+|-|#/});
                        const attributeValue = mxCellArray[i].$.value;
                        console.log(attributeValue);
                        if (attributeRegex.test(attributeValue)) {
                            console.log(`Attribute "${attributeValue}" is valid.`);
                            count3++;
                        }
                        if (attributeRegex1.test(attributeValue) || attributeRegex2.test(attributeValue)) {
                            console.log(`Method "${attributeValue}" is valid.`);
                            count2++;
                        }
                        if (attributeRegex2.test(attributeValue)) {
                            console.log(`Method 1"${attributeValue}" is valid.`);
                            count2++;
                        }
                        if (attributeRegex2.test(attributeValue)) {
                            console.log(`Method 1"${attributeValue}" is valid.`);
                        }
                        else if (count1 > 0 || count2 > 0 || count3 > 0) {
                            console.log("This Class has atleast one attribute and atleast one method")
                        }
                        // else if(attributeRegex1.test(attributeValue))
                        // {
                        //   console.log(`Method "${attributeValue}" is valid.`)

                        // }
                        else {
                            console.log(`Attribute "${attributeValue}" is invalid.`);
                        }
                        //while(mxCellArray[i].$.value===""&&mxCellArray[i].$.style.match(regex))
                        //  if(!/^(+|-|protected)\\s+(\\w+)\\s+(\\w+)\\s*\\(([^)]*)\\\\s*$.test(mxCellArray[i].$.value)) ;
                        //  {
                        //   console.log("validation2");
                        //    console.log(`Error: Attribute "${mxCellArray[i].$.value}" name must be in char`);
                        //  }
                    }
                    else if (mxCellArray[i].$.id === 1) {

                    }
                }
            }
            for (let i = 0; i < mxCellArray.length; i++) {

                console.log("-----------------------------");
                // console.log(mxCellArray[i].$.parent);
                //console.log(mxCellArray[4]);
                //console.log(mxCellArray[4].$.id);
                // console.log(mxCellArray[4].$.value);
                /* This is checking if the class name is in UpperCamelCase and if it is unique. */
                var count1 = 0, count2 = 0, count3 = 0;
                if (mxCellArray[i].$.parent === val && mxCellArray[i].$.style.match(regex1)) {
                    if (mxCellArray[i].$.val != null) {
                        count1++;
                        console.log("validation1");
                        console.log(mxCellArray[i].$.value);
                        var attributevalue1 = mxCellArray[i].$.value;
                        if (mxCellArray[i].$.parent === mxCellArray[i + 1]) {
                            console.log("Class must have unique name");
                        }
                        if (!/^[A-Z][a-zA-Z $_]*$/.test(mxCellArray[i].$.value)) {
                            console.log(`Error: Class "${mxCellArray[i].$.value}" name must be in UpperCamelCase and consist of characters only.`)
                        }
                    }
                    if (count1 > 0) {
                        console.log("This diagram has atleast one class");

                    }
                }
                else if (mxCellArray[i].$.parent != val || !mxCellArray[i].$.style.match(regex) && (mxCellArray[i].$.parent === attributevalue1)) {
                    if (mxCellArray[i].$.value != null) {
                        const attributeRegex = /^(\+|\-|\#)([a-zA-Z$_][a-zA-Z0-9$_]*)(:)+\s*(int|float|string|bool|void|class|double|long|short|char|date)$/;
                        const attributeRegex1 = /^(\+|\-|\#)([a-zA-Z$_][a-zA-Z0-9$_]*)+\(\)(:)+\s*(date|float|string|bool|void|class|double|long|int|char)$/;
                        const attributeRegex2 = /^(\+|\-|\#)([a-zA-Z$_][a-zA-Z0-9$_]*)+\( (date|float|string|bool|void|class|double|long|int|char)([a-zA-Z$_]*[a-zA-Z0-9$_ ])*\)(:)+\s*(int|float|string|bool|void|class|double|long|short|char|date)$/;
                        const attributeRegex3 = /^(\+)([a-zA-Z$_][a-zA-Z0-9$_]*)+\((string)\)(:)+\s*(void)$/;

                        const attributeValue = mxCellArray[i].$.value;
                        const str = attributeValue;
                        console.log(str);
                        const regexAccess = /(\+|\-|\#)/g;
                        const regexVarName = /[a-zA-Z$_][a-zA-Z0-9$_]*/g;
                        const regexDataType = /(date|float|string|bool|void|class|double|long|int|char)/g;
                        const regexOperator = /(\+|\-|\#)/g;
                        let tokens = [];
                        let matchAccess = null;
                        let matchVarName = null;
                        let matchDataType = null;
                        let matchOperator = null;

                        while ((matchAccess = regexAccess.exec(str)) !== null || (matchVarName = regexVarName.exec(str)) !== null || (matchDataType = regexDataType.exec(str)) !== null) {
                            if (matchAccess !== null) {
                                tokens.push(matchAccess[0]);
                            } else if (matchVarName !== null) {
                                tokens.push(matchVarName[0]);
                            } else if (matchDataType !== null) {
                                tokens.push(matchDataType[0]);
                            } else if (matchOperator !== null) {
                                tokens.push(matchOperator[0]);
                            }
                        }
                        console.log(tokens);

                        console.log(attributeValue);
                        if (attributeRegex.test(attributeValue)) {
                            console.log(`Attribute4 "${attributeValue}" is valid.`);
                            count3++;
                        }
                        else if (attributeRegex1.test(attributeValue)) {
                            console.log(`Method4 "${attributeValue}" is valid.`);
                            count2++;
                        }
                        else if (attributeRegex3.test(attributeValue)) {
                            console.log(`Method444 "${attributeValue}" is valid.`);
                        }
                        else if (attributeRegex2.test(attributeValue)) {
                            console.log(`Method 44"${attributeValue}" is valid.`);
                            count2++;
                        }
                        else if (count1 > 0 || count2 > 0 || count3 > 0) {
                            console.log("This Class has atleast one attribute and atleast one method")
                        }
                        // else if(attributeRegex1.test(attributeValue))
                        // {
                        //   console.log(`Method "${attributeValue}" is valid.`)

                        // }
                        else {
                            console.log(`Attribute "${attributeValue}" is invalid.`);
                        }
                        //while(mxCellArray[i].$.value===""&&mxCellArray[i].$.style.match(regex))
                        //  if(!/^(+|-|protected)\\s+(\\w+)\\s+(\\w+)\\s*\\(([^)]*)\\\\s*$.test(mxCellArray[i].$.value)) ;
                        //  {
                        //   console.log("validation2");
                        //    console.log(`Error: Attribute "${mxCellArray[i].$.value}" name must be in char`);
                        //  }
                    }
                    else if (mxCellArray[i].$.id === 1) {

                    }
                }
            }


        });
    });
}