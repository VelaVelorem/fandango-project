import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Add your custom styles for the footer
import  img  from '../assets/imgs/footerimage.png'

const Footer = () => (
    <footer>
        <div className="footerBody">
            <h4 className="footerCopyright text-center">
                @ 2024 Fandango
            </h4>
            <div className="footerLinks text-center">
                <ul>
                    <a href="#"><li>Ad Choices</li></a>
                    <a href="#"><li>Privacy Policy</li></a>
                    <a href="#"><li>Your Privacy Choices</li></a>
                    <a href="#"><li>CA Notice</li></a>
                    <a href="#"><li>Terms & Policies</li></a>
                    <a href="#"><li>Accessibility</li></a>
                </ul>
            </div>
        </div>
        <div className="footerEnd">
            <div className="button-holder text-center">
                <button type="button" className="nextBtn btn" id="nextBtn">Next</button>
            </div>
            <div className="img-holder mt-4 d-flex justify-content-center">
                <img src={img} alt="Logos of partnered brands" />
            </div>
        </div>
    </footer>
);

export default Footer;