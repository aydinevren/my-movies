import React from 'react';
import './Banner.css';

class Banner extends React.Component {

    render() {
        return (
            <div>
                <ul className="nav">
                    <li>
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/movies">Movies</a>
                        
                    </li>
                    <li>
                        <a className="nav-link" href="/tvshows">TV Shows</a>
                    </li>

                    <li>
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>

                    <li>
                        <a className="nav-link-signin-link" href="/signin">Sign in</a> <span className="nav-link-signin-link-or"> or</span>
                        <a className="nav-link-signin-link-register" href="/register">Register</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Banner;