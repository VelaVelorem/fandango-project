import './Seats.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import fandangoLogo from '../assets/imgs/fandango.svg'
import CheckBoxes from '../components/CheckBoxes';
import businessLogos from '../assets/imgs/footerimage.png'
import MovieShowing from '../components/MovieShowing'

const Seats = () => {
    // const [seatCount, setSeatCount] = useState(0);

    return (
        <>
            <header>
                <div className="container d-flex justify-content-center">  
                <img src={fandangoLogo} alt="Fandango Logo" className="fandangoLogo" />
                </div>


                <div className="ticketSelectionHeader d-flex align-items-center">
                <div className="arrowExit"><Link to="/"><FontAwesomeIcon icon={faArrowLeft} id="leftArrow" className="ms-3" /></Link></div>
                    
                <div className="movieContainer mx-auto"><MovieShowing/>
                </div>
                </div>
            </header>

            <CheckBoxes/>

            <footer id="seatsFooter">
                <h4 className="text-center">0 Selected</h4>
                
                <div className="text-center mt-4">
                    <button type="button" className="seatsBtn" id="seatsBtn">Select up to 20 seats</button>
                </div>
                <div className="text-center mt-5">
                    <img src={businessLogos} alt="business logos" /></div>
            </footer>
        </>
    )
}


export default Seats