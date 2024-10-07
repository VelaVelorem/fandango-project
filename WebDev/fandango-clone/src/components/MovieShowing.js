import  MOVIES  from '../movies/MOVIES';
import { Container, Row } from 'react-bootstrap'
import './MovieShowing.css'


const MovieShowing = () => {
    const { image, location, date, title } = MOVIES;
    
    return (
            <div className="d-flex gap-3">
                <div className="movieHolder">
                    <img src={image} className="moviePoster" alt="movie poster" />
                </div>
                <div className="movieData">
                    <h2 className="movieTitle">{title}</h2>
                    <p className="movieDate">{date}</p>
                    <p className="movieLocation">{location}</p>
                </div>
            </div>

    )
}
export default MovieShowing;