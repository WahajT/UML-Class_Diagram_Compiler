// import React, { useRef, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDropzone } from 'react-dropzone';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'reactflow/dist/style.css';
import xml2js from "xml2js";
import { savefile } from '../../api/api';
import GraphTest from '../GraphTest';
import {
    CheckErrors
} from '../Validation';

// import { xmlParser } from '../../parser/xmlParser';

export default function Main(props) {
    let navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [seeErrors, SetseeErrors] = useState(false);
    const [seeErrorsCode, SetseeErrorsCode] = useState(false);
    const [Classes, setClasses] = useState([]);
    const [ClassesNew, setClassesNew] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseErrors = () => SetseeErrors(false);
    const handleCloseErrorsCode = () => SetseeErrorsCode(false);
    const handleShowErrors = () => SetseeErrors(true);
    const handleShowErrorsCode = () => SetseeErrorsCode(true);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            navigate('/login');
        }
    }, [])
    useEffect(() => {
        // console.log(sessionStorage.getItem('user'), 'sessionStorage.get');
        setRefresh(!refresh)
    }, [Classes])
    const groupBy = (arr, property) => {
        return arr.reduce(function (memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = []; }
            memo[x[property]].push(x);
            return memo;
        }, {});
    };
    const [diagramData, setDiagramData] = useState(null);
    const [xmlFile, setXmlFile] = useState('')

    const logoutUser = () => {
        sessionStorage.removeItem('user');
        navigate('/login');
    }

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            'file/xml': ['.xml'],
        }
    });


    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes

        </li>
    ));
    // console.log(acceptedFiles);


    const uploadFile = async () => {
        // console.log(acceptedFiles[0]);
        let formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        // upload(formData).then((response) => {
        //     console.log(formData);

        // })
        fileHandler(acceptedFiles[0])
        // console.log(formData);
        // console.log(response);


    }



    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));
    const fileHandler = async (file) => {
        // console.log(file, 'formData');
        var reader = new FileReader();
        let NewErrors = []
        var onload = async function (event) {
            var text = reader.result;
            // console.log(text, 'text');
            let Newparser = new xml2js.Parser();
            Newparser.parseString(
                text,
                async function (err, result) {
                    // console.log(result?.mxfile?.diagram[0]?.mxGraphModel[0]?.root[0]?.mxCell);
                    var data = result?.mxfile?.diagram[0]?.mxGraphModel[0]?.root[0]?.mxCell
                    var results = result?.mxfile?.diagram[0]?.mxGraphModel[0]?.root[0]?.mxCell.reduce(function (results, org) {
                        (results[org.$?.parent] = results[org.$?.parent] || []).push(org);
                        return results;
                    }, {})
                    // console.log(results, 'results');
                    let newData = data?.map((item => item?.$?.parent)).filter((item => item))
                    var parents = newData.filter(function (item, pos) {
                        return newData.indexOf(item) == pos;
                    })
                    var parentsData = []
                    for (let index = 0; index < data.length; index++) {
                        const element = data[index];
                        for (let index = 0; index < parents.length; index++) {
                            const element2 = parents[index];
                            if (element?.$?.id === element2) {
                                parentsData = [...parentsData, { className: element?.$?.value, id: element?.$?.id }]
                            }


                        }

                    }
                    parentsData = await parentsData?.filter((item => item?.className !== undefined))
                    // console.log(parentsData, 'results');
                    var GroupByParent = Object.entries(results)
                    var finalGroup = []
                    for (let index = 0; index < GroupByParent.length; index++) {
                        const childData = GroupByParent[index];
                        // console.log(childData?.[0]);
                        for (let index = 0; index < parentsData.length; index++) {
                            const parentsDataNew = parentsData[index];
                            if (parentsDataNew?.id === childData?.[0]) {
                                finalGroup = await [...finalGroup,
                                {
                                    ClassName: parentsDataNew?.className,
                                    Childs: childData?.[1]?.map((item => item?.$))?.filter((item => item?.value !== '')),
                                    Methods: childData?.[1]?.filter((item => item?.$?.value?.includes('(') && item?.$?.value))?.map((item => item?.$?.value)),
                                    Attrbiutes: childData?.[1]?.filter((item => !item?.$?.value?.includes('(') && item?.$?.value))?.map((item => item?.$?.value))
                                }
                                ]
                            }

                        }
                    }
                    let Errors = CheckErrors(finalGroup, true)
                    NewErrors = await Errors
                    console.log(Errors, 'Errors');
                    setClasses(Errors)
                    setClassesNew(finalGroup)

                }
            );
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, 'text/xml');
            let Data = await Classes
            let response = await savefile(`${text}`, sessionStorage.getItem('user'), Data);
            console.log("response");

            if (response != 404) {
                alert("File Uploaded Successfully");
            }
            else {
                alert("File Upload Failed");
            }

            setXmlFile(text)
            // xmlParser(text)
            // console.log(xml, 'xml');
            var nodes = xml.querySelectorAll("*");

            for (var i = 0; i < nodes.length; i++) {
                var text = null;
                if (nodes[i].childNodes.length == 1 && nodes[i].childNodes[0].nodeType == 3) //if nodeType == text node
                    text = nodes[i].textContent; //get text of the node

                // console.log("TageName : ", nodes[i].tagName, ", Text : ", text);
                // console.log(nodes[i].getAttributeNames(), 'nodes[i]nodes[i]');
                // console.log(nodes[i].val, 'nodes]');
            }







        };

        reader.onload = onload;
        reader.readAsText(file);


        // Do your querying here.
        // xml will can now be queried like DOM
        // e.g. xml.querySelector('ST_TIMERANGE').getAttribute('Weeks') // returns 2.



        // xmlParser(formData)
    }
    return (
        <>
            <div >
                <Helmet>
                    <script src="https://kit.fontawesome.com/05ec620be8.js" crossorigin="anonymous"></script>
                </Helmet>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a href="#" class="navbar-brand">Class Diagram Compiler</a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav">
                                {/* <a href="#" class="nav-item nav-link active">Home</a>
                    <a href="#" class="nav-item nav-link">Profile</a> */}

                            </div>

                            <div class="navbar-nav">
                                <a href="#" class="nav-item nav-link" onClick={logoutUser}>log Out</a>
                                <a href="#" class="nav-item nav-link" onClick={() => window.location.href = '/history'}>History</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className=" mt-5">
                    <h1 className="text-center">Welcome to Class Diagram Compiler</h1>
                </div>

                <h3 className="text-center mt-5">Upload your XML file here</h3>


                <section className="container d-flex align-items-center flex-column mt-3">
                    <i class="fa-solid fa-share fa-rotate-90 fa-2xl mb-3"></i>


                    <div className="text-center classborder ">

                        <div
                            {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                            <em>(Only XML format is entertained.)</em>
                        </div>

                    </div>
                    <div className='mt-5' >

                        <aside >
                            <h4>Accepted files</h4>
                            <ul>{acceptedFileItems}</ul>
                            <h4>Rejected files</h4>
                            <ul>{fileRejectionItems}</ul>
                        </aside>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        <button type="button" onClick={uploadFile} class="btn btn-primary m-3">Convert into XML</button>
                        <button type="button" onClick={() => { handleShowErrors(true) }} class="btn btn-primary m-3">Check semantic Error</button>

                        <button class="btn btn-primary m-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">See XML File</button>
                        <button class="btn btn-primary m-3" onClick={() => handleShow(true)}>See Diagram</button>
                        <button class="btn btn-primary m-3" onClick={() => handleShowErrorsCode(true)}>See Skeleton Code</button>
                        {/* <code>{xmlFile}</code> */}
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">XML Format of your file.</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div style={{ width: '600px' }} class="offcanvas-body d-flex w-[500px] flex-column align-items-xl-center  ">
                                <div style={{ width: '500px', padding: 10 }}>
                                    <CodeEditor
                                        value={xmlFile}
                                        language={'xml'}
                                        placeholder="Please enter XML code."
                                        onChange={(evn) => setXmlFile(evn.target.value)}
                                        padding={15}
                                        data-color-mode="dark"
                                        style={{
                                            fontSize: 12,
                                            backgroundColor: "#000",
                                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                        }}
                                    />
                                </div>
                                <button type="button" class="btn btn-primary">Edit File</button>
                            </div>
                        </div>
                    </div>


                </section >

            </div >

            <Modal centered size={'xl'} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>XML Diagram</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {xmlFile !== '' &&
                        <GraphTest xmlFile={xmlFile} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered size={'xl'} show={seeErrors} onHide={handleCloseErrors}>
                <Modal.Header closeButton>
                    <Modal.Title>Errors</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Object.entries(groupBy(Classes, 'ClassName')).map((item =>
                        <div>
                            <h1>{item?.[0]}</h1><br />
                            {item?.[1]?.map((item, index) => <div> {index + 1})<code>{item?.error}</code><br /></div>)}
                        </div>
                    ))}
                    {/* {Classes.map((item =>
                        <div>
                            <h1>{item?.ClassName}</h1><br />
                            <p>{item?.error}</p>
                        </div>))} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseErrors}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered size={'xl'} show={seeErrorsCode} onHide={handleCloseErrorsCode}>
                <Modal.Header closeButton>
                    <Modal.Title>Errors</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {ClassesNew.map((item =>
                        <div>
                            <h1>{item?.ClassName} {""}</h1><br />
                            <p>

                                class {item?.ClassName}{"{"} <br />

                                {item?.Attrbiutes?.map((item =>
                                    <p>
                                        {item?.includes("+") ? "Public : " : "Private : "}
                                        var  {item.substring(item.indexOf(":") + 1)} {item?.replace("+", '')?.replace("-", '')?.replace(`:${item.substring(item.indexOf(":") + 1)}`, '')}</p>))}<br />

                                {item?.Methods?.map((item =>
                                    <p>
                                        {item?.includes("+") ? "Public : " : "Private :  "}
                                        {item.substring(item.indexOf(":") + 1)} {item?.replace("+", '')?.replace("-", '')?.replace(`:${item.substring(item.indexOf(":") + 1)}`, '')}</p>))} <br />


                    }
                            </p>

                        </div>))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseErrorsCode}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}   