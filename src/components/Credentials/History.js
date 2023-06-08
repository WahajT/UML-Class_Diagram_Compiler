// import React, { useRef, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useDropzone } from 'react-dropzone';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { getFiles } from '../../api/api';
import GraphTest from '../GraphTest';
import { CheckErrors } from '../Validation';
import { decode } from '../../parser/deflate/deflate';
import { Parser } from 'xml2js';

// import { xmlParser } from '../../parser/xmlParser';

export default function History(props) {
    let navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [showFile, setShowFile] = useState(false);
    const [Files, setFiles] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [seeErrors, SetseeErrors] = useState(false);
    const handleCloseErrors = () => SetseeErrors(false);
    const [seeErrorsCode, SetseeErrorsCode] = useState(false);
    const [ClassesNew, setClassesNew] = useState([]);
    const handleCloseErrorsCode = () => SetseeErrorsCode(false);
    const handleShowErrorsCode = () => SetseeErrorsCode(true);
    const [Classes, setClasses] = useState([]);

    const handleShowErrors = () => SetseeErrors(true);
    const [index, setIndex] = useState(null);
    const myRefname = useRef(null);
    const handleClickBtn = () => {
        myRefname.current.click();
    }
    const handleClose = () => setShow(false);
    const handleCloseFile = () => setShowFile(false);
    const handleShow = () => setShow(true);
    const handleShowFile = () => setShowFile(true);
    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            navigate('/login');
        } else {
            const email = sessionStorage.getItem('user')
            getFilesData(email)
        }
    }, [])
    const groupBy = (arr, property) => {
        return arr.reduce(function (memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = []; }
            memo[x[property]].push(x);
            return memo;
        }, {});
    };
    const getFilesData = async (email) => {
        const files = await getFiles(email)
        console.log(files, 'files');
        if (files !== 404) {

            var newData = []
            for (let index = 0; index < files?.data.length; index++) {
                const element = files?.data[index];
                element.file = element.file.replace(/\\n/g, '')
                var we = element.file.replace(/\\n/g, '')
                var wo = we.replace(/\\n/g, '')
                var hehe = wo.replace(/\\/g, '')
                element.file = hehe
                newData = [...newData, element]
                console.log(hehe, 'hehe');

            }
            setFiles(newData)


            var we = files?.data[2]?.file.replace(/\\n/g, '')
            var wo = we.replace(/\\n/g, '')
            var hehe = wo.replace(/\\/g, '')

        } else {
            alert("Something Went Wrong")
        }
    }
    useEffect(() => {
        setRefresh(!refresh)
        console.log(Files, 'Files');
    }, [Files])

    useEffect(() => {
        console.log(sessionStorage.getItem('user'), 'sessionStorage.get');

    }, [])

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
    const fileHandler = async (textData, currentIndex, isDiagram, errors) => {
        if (isDiagram) {
            handleShow(true)
        }
        setIndex(currentIndex)
        var text = textData;
        console.log(text, 'text');
        // let Newparser = new xml2js.Parser();
        // Newparser.parseString(
        //     text,
        //     function (err, result) {
        //         console.log(result);
        //     }
        // );
        const parser = new DOMParser();

        // console.log("-------------");
        //console.log(inflatedXMLNode);

        // decoding inflated XML into deflated XML


        const xml = parser.parseFromString(text, 'text/xml');
        // let Errors = CheckErrors(errors, true)
        // console.log(Errors, 'Errors');
        // console.log(Errors, 'Errors');
        setClasses(errors)
        setClassesNew(errors)
        setXmlFile(text)
        // xmlParser(text)
        console.log(xml, 'xml');
        var nodes = xml.querySelectorAll("*");

        for (var i = 0; i < nodes.length; i++) {
            var text = null;
            if (nodes[i].childNodes.length == 1 && nodes[i].childNodes[0].nodeType == 3) //if nodeType == text node
                text = nodes[i].textContent; //get text of the node

            // console.log("TageName : ", nodes[i].tagName, ", Text : ", text);
            // console.log(nodes[i].getAttributeNames(), 'nodes[i]nodes[i]');
            // console.log(nodes[i].val, 'nodes]');
        }


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
                            </div>
                        </div>
                    </div>
                </nav>
                <div className=" mt-5">
                    <h1 className="text-center">File History</h1>
                </div>
                <div style={{ padding: 20 }}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Files.map((item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item?.email}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary m-3" onClick={() => { fileHandler(item?.file, index, false, JSON.parse(item?.errors)); handleShowErrors(true) }}>See Errors</button>
                                        <button onClick={() => { fileHandler(item?.file, index, false, JSON.parse(item?.errors)); handleShowFile(true) }} class="btn btn-primary m-3" data-bs-toggle={`offcanvas`} data-bs-target={`#offcanvasRight${index}`} aria-controls={`#offcanvasRight${index}`}>See XML File</button>
                                        <button class="btn btn-primary m-3" onClick={() => fileHandler(item?.file, index, true, JSON.parse(item?.errors))}>See Diagram</button>
                                        {/* <button class="btn btn-primary m-3" onClick={() => { fileHandler(item?.file, index, false, JSON.parse(item?.errors)); handleShowErrorsCode(true) }}>See Skeleton Code</button> */}
                                    </td>

                                </tr>
                            )}


                        </tbody>
                    </Table>
                </div>
            </div>

            <>
                <Modal centered size={'lg'} show={showFile} onHide={handleCloseFile}>
                    <Modal.Header closeButton>
                        <Modal.Title>XML Format of your file.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ width: '500px' }}>
                        {/* <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">XML Format of your file.</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div> */}
                        <div class="offcanvas-body d-flex overflow-visible flex-column align-items-xl-center  ">
                            <div style={{ padding: 10 }}>
                                <CodeEditor
                                    value={xmlFile}
                                    language={'xml'}
                                    placeholder="Please enter XML code."

                                    onChange={(evn) => setXmlFile(evn.target.value)}
                                    padding={15}
                                    data-color-mode="dark"
                                    style={{
                                        fontSize: 12,
                                        width: '450px',
                                        overflow: 'visible',
                                        backgroundColor: "#000",
                                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                    }}
                                />
                            </div>
                            <button type="button" class="btn btn-primary">Edit File</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseFile}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* <div class={`offcanvas offcanvas-end`} tabindex="-1" id={`offcanvasRight${index}`} aria-labelledby="offcanvasRightLabel">
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
                    </div> */}
            </>



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
                    {/* {console.log(groupBy(Classes, 'ClassName'), 'ClassNameClassNameClassName')} */}
                    {Classes.length === 0 ? 'NO ERRORS' : null}
                    {Object.entries(groupBy(Classes, 'ClassName')).map((item =>
                        <div>
                            <h1>{item?.[0]}</h1><br />
                            {item?.[1]?.map((item, index) => <div> {index + 1})<code>{item?.error}</code><br /></div>)}
                        </div>
                    ))}
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
                                        {item?.includes("+") ? "Public  " : "Private  "}
                                        var  {item.substring(item.indexOf(":") + 1)} {item?.replace("+", '')?.replace("-", '')?.replace(`:${item.substring(item.indexOf(":") + 1)}`, '')}</p>))}<br />

                                {item?.Methods?.map((item =>
                                    <p>
                                        {item?.includes("+") ? "Public  " : "Private   "}
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