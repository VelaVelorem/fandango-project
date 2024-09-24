import './Seats.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import fandangoLogo from '../assets/imgs/fandango (1).svg'
import CheckBoxes from '../components/CheckBoxes';

const Seats = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row justify-content-center">
                        <img src={fandangoLogo} alt="Fandango Logo" className="fandangoLogo" />
                    </div>
                </div>
                <div className="ticketSelectionHeader d-flex align-items-center justify-content-center">
                    <Link to="/"><FontAwesomeIcon icon={faArrowLeft} id="leftArrow" className="ms-3" /></Link>
                </div>
            </header>

            <CheckBoxes></CheckBoxes>
        </>
    )
}


export default Seats