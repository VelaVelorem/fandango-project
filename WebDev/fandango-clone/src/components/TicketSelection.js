import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './TicketSelection.css';

const TicketSelection = () => {
    const [activeKey, setActiveKey] = useState('null');

    return (
        <section className="ticketSection">
            <div className="ticketBody">
                <div className="container">
                    <h2>Select Up To 25 Tickets</h2>

                    <div className="demographicBox row align-items-center">
                        <div className="ticketType col-6">
                            <h3>Adult</h3>
                            <span className="ticketPrice">$17.69</span>
                        </div>
                        <div className="ticketAmount col-6">
                            <div className="d-flex justify-content-end">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCircleMinus} className="minusIcon" /></li>
                                    <li className="mx-4">0</li>
                                    <li><FontAwesomeIcon icon={faCirclePlus} className="plusIcon" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="demographicBox row align-items-center">
                        <div className="ticketType col-6">
                            <h3>Senior</h3>
                            <span className="ticketPrice">$16.48</span>
                        </div>
                        <div className="ticketAmount col-6">
                            <div className="d-flex justify-content-end">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCircleMinus} className="minusIcon" /></li>
                                    <li className="mx-4">0</li>
                                    <li><FontAwesomeIcon icon={faCirclePlus} className="plusIcon" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="demographicBox row align-items-center">
                        <div className="ticketType col-6">
                            <h3>Child</h3>
                            <span className="ticketPrice">$13.08</span>
                        </div>
                        <div className="ticketAmount col-6">
                            <div className="d-flex justify-content-end">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCircleMinus} className="minusIcon" /></li>
                                    <li className="mx-4">0</li>
                                    <li><FontAwesomeIcon icon={faCirclePlus} className="plusIcon" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="disclaimer">Prices and fees include estimated tax per ticket.</p>

                    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)} defaultActiveKey="0" className="policyAccordion">
                        <AccordionItem eventKey="0" className="policyAccordion">
                            <AccordionHeader className="policyAccordionHeader">AMC Policies</AccordionHeader>
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
        </section>
    );
};

export default TicketSelection;
