import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import  img  from '../assets/imgs/footerimage.png'
import { useState } from 'react'


const Footer = () => (
 <>

    // useState to keep track of state for Next button. Button should be disable until a ticket has been chosen.
    const [isInactive, setIsInactive] = useState(true);

    <footer>
        <div className="footerBody">
            <h4 className="footerCopyright text-center">
                @ 2024 Fandango
            </h4>
            <div className="footerLinks text-center">
                <ul>
                    <a href=""><li className="me-1">Ad Choices</li></a>
                    <a href=""><li className="me-1">Privacy Policy</li></a>
                    <a href=""><li className="me-1">Your Privacy Choices</li></a>
                    <a href=""><li className="me-1">CA Notice</li></a>
                    <a href=""><li className="me-1">Terms & Policies</li></a>
                    <a href=""><li className="me-1">Accessibility</li></a>
                </ul>
            </div>
        </div>
        
    </footer>
    
    <div className="footerEnd">
            <div className="button-holder text-center">
                <button type="button" className="nextBtn btn" id="nextBtn" disabled={true}>Next</button>
            </div>
            <div className="img-holder mt-4 d-flex justify-content-center">
                <img src={img} alt="Logos of partnered brands" />
            </div>
    </div>
    </>
);

export default Footer;