import React from 'react';
import {Link} from 'react-router-dom';

const TvShows = (props) => {

    const truncateOverView = (string, maxLenght) => {
        if (!string) return null;
        if (string.lenght <= maxLenght) return string;
        return `${string.substring(0, maxLenght)} ...`;
    }


    return (
        <div className="row">

            {props.movies.map((movie) => (

                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movies" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverView(movie.overview, 100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger"> Delete </button>
                                <Link
                                type="button"
                                className="btn btn-md btn-outline-primary"
                                to={`edit/${movie.id}`}
                                >
                                    Edit
                                </Link>
                                <h2><span className="badge badge-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

            ))}

        </div>
    )
}
export default TvShows;