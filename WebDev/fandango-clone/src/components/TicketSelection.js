import React, { useState, useEffect } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Modal, Form, Container, Col, Row, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TicketSelection.css';
import img from '../assets/imgs/footerimage.png';
import fandangoLogo from '../assets/imgs/fandango.svg';
import { loginFormValidation } from '../utils/loginFormValidation';


const TicketSelection = () => {

    // MODAL LOGIC PORTION
    // Notes: 1st state sets the default of the model to be false so it will be close, the closeModal and openModal will be attached to nextBtn to toggle the modal.
    // next two useStates will handle the state for the user/password log in information, both set to empty string values.
    const [appear, setAppear] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    
    const closeModal = () => {
        setAppear(false);
    }

    const openModal = () => {
        setAppear(true);
    } 

    // Notes: handleSubmit will be chained to the login form, 
    // using the preventDefault method it will refrain the page from refreshing once the form has been submitted.
    // validationErrors grabs the object properties/keys from the loginFormValidation objects and checks if there are any errors, if there aren't, the login modal will close.
    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = loginFormValidation(username, password);
        if (Object.keys(validationErrors).length === 0) {
            closeModal();
        } else {
            setErrors(validationErrors);
        }
    };
    // TICKET SELECTION VARIABLES PORTION
    const adultTicketBase = 14.84;
    const seniorTicketBase = 13.19;
    const childTicketBase = 11.54;

    const [adultTickets, setAdultTickets] = useState(0);
    const [seniorTickets, setSeniorTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);

    const [activeKey, setActiveKey] = useState('null');
    const [isDisabled, setIsDisabled] = useState(true);

    // INCREMENT/DECREMENT TICKET COUNT PORTION
    // Notes: Meaning of ternary operator will be if current ticket count is less than 25, next step is to add a ticket then return the current ticket count.
    const addTicket = (ticketType) => {
        switch (ticketType) {
            case 'adult':
            setAdultTickets(currentTickets => (currentTickets < 25 ? currentTickets + 1 : currentTickets));
            break;
            case 'senior':
            setSeniorTickets(currentTickets => (currentTickets < 25 ? currentTickets + 1 : currentTickets));
            break;
            case 'child':
            setChildTickets(currentTickets => (currentTickets < 25 ? currentTickets + 1 : currentTickets));
            break;
            default:
            break;
        }
    };

    const removeTicket = (ticketType) => {
        switch (ticketType) {
            case 'adult':
            setAdultTickets(currentTickets => (currentTickets > 0 ? currentTickets - 1 : currentTickets));
            break;
            case 'senior':
            setSeniorTickets(currentTickets => (currentTickets > 0 ? currentTickets - 1 : currentTickets));
            break;
            case 'child':
            setChildTickets(currentTickets => (currentTickets > 0 ? currentTickets - 1 : currentTickets));
            break;
            default:
            break;
        }
    };
    // USEEFFECT TO DEFINE THE CONSEQUENCE(AFTER EFFERS) OF USESTATE
    // Notes: totalTickets is the accumulation of all the ticket types, 
    // setIsDisabled is connected to the useState variables to have the nextBtn disabled until the current ticket count is more than 0.
    useEffect(() => {
        const totalTickets = adultTickets + seniorTickets + childTickets;
        setIsDisabled(totalTickets === 0);
    }, [adultTickets, seniorTickets, childTickets]);
    

    return (
        <section className="ticketSection">
            <div className="ticketBody">
                <div className="container">
                    <h2>Select Up To 25 Tickets</h2>

                    <div className="demographicBox row align-items-center">
                        <div className="ticketType col-6">
                            <h3>Adult</h3>
                            <span className="ticketPrice">${adultTicketBase}</span>
                        </div>
                        <div className="ticketAmount col-6">
                            <div className="d-flex justify-content-end">
                                <ul>
                                    <button className="minusIcon" onClick={() => removeTicket('adult')}><FontAwesomeIcon icon={faCircleMinus} /></button>
                                    <li className="mx-4">{adultTickets}</li>
                                    <button className="plusIcon" onClick={() => addTicket('adult')}><FontAwesomeIcon icon={faCirclePlus} /></button>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="demographicBox row align-items-center">
                        <div className="ticketType col-6">
                            <h3>Senior</h3>
                            <span className="ticketPrice">${seniorTicketBase}</span>
                        </div>
                        <div className="ticketAmount col-6">
                            <div className="d-flex justify-content-end">
                                <ul>
                                    <button className="minusIcon" onClick={() => removeTicket('senior')}><FontAwesomeIcon icon={faCircleMinus} /></button>
                                    <li className="mx-4">{seniorTickets}</li>
                                    <button className="plusIcon" onClick={() => addTicket('senior')}><FontAwesomeIcon icon={faCirclePlus} /></button>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="demographicBox row align-items-center">
                        <div className="ticketType col-6">
                            <h3>Child</h3>
                            <span className="ticketPrice">${childTicketBase}</span>
                        </div>
                        <div className="ticketAmount col-6">
                            <div className="d-flex justify-content-end">
                                <ul>
                                    <button className="minusIcon" onClick={() => removeTicket('child')}><FontAwesomeIcon icon={faCircleMinus} /></button>
                                    <li className="mx-4">{childTickets}</li>
                                    <button className="plusIcon" onClick={() => addTicket('child')}><FontAwesomeIcon icon={faCirclePlus} /></button>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="disclaimer">Prices and fees include estimated tax per ticket.</p>

                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)} defaultActiveKey="0">
                    <AccordionItem eventKey="0" className="policyAccordion">
                            <AccordionHeader><span className="accordionHeader">AMC Policies</span></AccordionHeader>
                            <AccordionBody className="policyAccordion">
                                <h2>Age Policy</h2>
                                <span className="policy-text">
                                    Senior tickets are valid for adults 60+.
                                    <br />
                                    Child tickets for 2 - 12 years.
                                    <br />
                                    Student: Age 13+ with valid student ID.
                                    Not all ticket types are available for all performances.
                                    <br />
                                    Rated-R Films: Under 17 requires accompanying parent or adult guardian (age 21 or older).
                                    <br />
                                    25 years and under must show ID for rated R movies.
                                    <p></p>
                                    Distraction-Free Entertainment
                                    In an effort to provide the most enjoyable experience for adults attending R-rated features in the evenings, no children younger than 6 will be admitted to these features after 6 p.m
                                </span>

                                <h2 className="mt-3">Theater Policy</h2>
                                <span className="policy-text">
                                    AMC reserves the right to exercise special pricing options for unique in-theatre experiences.
                                    <p></p>
                                    Feature Presentations Start 10-15 Minutes Following Published Showtimes.
                                    <p></p>
                                    To find a film presented in 3D, look for the "Digital 3D" description. Some locations do not have Digital 3D available. All 3D, IMAX, alternative content, and premium services are subject to additional surcharges.
                                    <p></p>
                                    <b className="accordionBold">R-Rated Age Policy:</b> For R-rated movies only, guests under 17 must be accompanied by a guardian who is 21 or older. Please be prepared to show ID at the theatre.
                                </span>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <footer>
                <div className="footerBody">
                    <h4 className="footerCopyright text-center">
                        @ 2024 Fandango
                    </h4>
                    <nav className="footerLinks text-center">
                        <ul>
                            <a href=""><li className="me-1">Ad Choices</li></a>
                            <a href=""><li className="me-1">Privacy Policy</li></a>
                            <a href=""><li className="me-1">Your Privacy Choices</li></a>
                            <a href=""><li className="me-1">CA Notice</li></a>
                            <a href=""><li className="me-1">Terms & Policies</li></a>
                            <a href=""><li className="me-1">Accessibility</li></a>
                        </ul>
                    </nav>
                </div>
            </footer>

            <div className="footerEnd">
                <div className="button-holder text-center">
                    <button type="button" className="nextBtn btn" id="nextBtn" disabled={isDisabled} onClick={openModal}>Next</button>
                </div>
                <div className="img-holder mt-4 d-flex justify-content-center">
                    <img src={img} alt="Logos of partnered brands" />
                </div>

                <Modal show={appear} onHide={closeModal}>
                    <Modal.Body className="bg-dark">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={fandangoLogo} className="w-50 mb-4" />
                        </div>
                        
                        <Form onSubmit={handleSubmit}>
                            <Container>
                                <Row>

                                    <Col className="col-12">
                                        <FormGroup className="mb-3">
                                            <label htmlfor="username" className="form-label">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}/>
                                                 {errors.username && <div className="text-danger">{errors.username}</div>}
                                        </FormGroup>
                                    </Col>

                                    <Col className="col-12">
                                        <FormGroup className="mb-2">
                                            <label htmlfor="password" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                             {errors.password && <div className="text-danger">{errors.password}</div>}
                                        </FormGroup>
                                    </Col>

                                    <span className="forgotPW ">Forgot your password?</span>

                                    <Col className="col-12">
                                        <button type="submit" className="w-100 btn signInBtn mt-3 mb-3">Sign in</button>
                                    </Col>

                                    <span className="termsText text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>

                                </Row>
                            </Container>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </section>
    );
};

export default TicketSelection;
