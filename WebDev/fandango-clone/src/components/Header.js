import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import fandangoLogo from '../assets/imgs/fandango.svg'
import './Header.css'; // Add your custom styles for the header

const Header = () => (
    <header>
        <div className="container">
            <div className="row justify-content-center">
                <img src={fandangoLogo} alt="Fandango Logo" className="fandangoLogo" />
            </div>
        </div>
        <div className="ticketSelectionHeader d-flex align-items-center justify-content-start">
            <FontAwesomeIcon icon={faArrowLeft} className="leftArrow ms-3" />
            <span className="ticketSelection-P mx-auto pe-5">Ticket Selection</span>
        </div>
    </header>
);

export default Header;