import TicketSelection from '../components/TicketSelection';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Tickets = () => {
    return (
        <>
            <Header />
            <TicketSelection />
            <Link to="/seats">Go to Seats</Link>
        </>
    );
}

export default Tickets;
