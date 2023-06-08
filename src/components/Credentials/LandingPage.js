// import React from 'react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
import { Helmet } from 'react-helmet';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
export default function LandingPage() {


    let navigate = useNavigate()
    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            navigate('/main')
        }
    }, [])

    const [teamMembers, setTeamMembers] = useState([
        {
            name: "Ahmad Yasir",
            position: "Web Developer",
            image: team1,
            delay: "0.1s",
        },
        {
            name: "Wahaj Tahir",
            position: "Web Developer",
            image: team2,
            delay: "0.3s",
        },
        {
            name: "Mehroz Ahmad",
            position: "Web Developer",
            image: team3,
            delay: "0.6s",
        },
    ]);

    return (
        <div>
            <Helmet>
                <script src="https://kit.fontawesome.com/05ec620be8.js" crossorigin="anonymous"></script>
                

                {/* Google Web Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

                {/* Icon Font Stylesheet */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* Libraries Stylesheet */}
                <link href="animate.css/animate.min.css" rel="stylesheet" />
                <link href="owl.carousel/dist/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="lightbox2/dist/css/lightbox.min.css" rel="stylesheet" />
            </Helmet>
            <div className="container-xxl bg-white p-0">

                <div className="position-relative p-0">
                    <Navbar bg="light" expand="lg" className="px-4 px-lg-5 py-3 py-lg-0">
                        <Navbar.Brand href="#">
                            <h1 className="m-0">Class-Diagram<span className="fs-5">Compiler</span></h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarCollapse" />
                        <Navbar.Collapse id="navbarCollapse">
                            <Nav className="ms-auto"></Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <div className="py-5 bg-primary hero-header mb-5">
                        <Container className="my-5 py-5 px-lg-5">
                            <div className="row g-5 py-5">
                                <div className="col-lg-6 text-center text-lg-start">
                                    <h1 className="text-white mb-4 animated zoomIn">A Compiler To Validate Your Class Diagram.</h1>
                                    <p className="text-white pb-3 animated zoomIn">UML-Class Diagram compiler is a framework for automatic transformation of UML diagram into a string and then compilation of that string for syntactic correctness and verification, which is kind of semantic verification. The compiler will also produce the skeleton code of the given class diagram.</p>

                                    <a href="./login" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Get Started</a>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">Our Service</h6>
                            <h2 className="mt-2">What We Provide</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <div className="service-icon flex-shrink-0">
                                    <i class="fa-solid fa-gear fa-2xl"></i>

                                    </div>
                                    <h5 className="mb-3">XML to string converter</h5>
                                    <p>This module will convert the XML form of UML diagram into a string that will follow the context free grammar.</p>
                                </div>
                            </div>



                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <div className="service-icon flex-shrink-0">
                                    
                                    <i class="fa-solid fa-bug fa-2xl"></i>
                                    
                                    </div>
                                    <h5 className="mb-3">UML compiler</h5>
                                    <p>This module will check the syntactic correctness of the diagram and verification of consistency among the diagrams.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <div className="service-icon flex-shrink-0">
                                    <i class="fa-solid fa-code fa-2xl"></i>
                                        
                                    </div>
                                    <h5 className="mb-3">Code generator</h5>
                                    <p>This module will allow user to generate the skeleton code of the given class diagram after validating its syntax and semantic correctness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <Container className="px-lg-5">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">Our Team</h6>
                            <h2 className="mt-2">Meet Our Team Members</h2>
                        </div>
                        <Row className="g-4">
                            {teamMembers.map((member, index) => (
                                <Col key={index} lg={4} md={6} className="wow fadeInUp" data-wow-delay={member.delay}>
                                    <div className="team-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{ width: "75px" }}></div>
                                            <img className="img-fluid rounded w-100" src={member.image} alt="" />
                                        </div>
                                        <div className="px-4 py-3">
                                            <h5 className="fw-bold m-0">{member.name}</h5>
                                            <small>{member.position}</small>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>



                </div>
            </div>
        </div>
    )
}   