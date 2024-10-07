import  MOVIES  from '../movies/MOVIES';
import { Container, Row } from 'react-bootstrap'
import './MovieShowing.css'


const MovieShowing = () => {
    const { image, location, date, title } = MOVIES;
    
    return (
        
        <Container>
            <Row>
                <div className="col-6 movieHolder">
                    <img src={image} className="moviePoster" alt="movie poster" />
                </div>
                <div className="col-6 movieData">
                    <h2 className="movieTitle">{title}</h2>
                    <p>{date}</p>
                    <p>{location}</p>
                </div>
            </Row>
        </Container>
    )
}
export default MovieShowing;