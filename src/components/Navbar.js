import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 35) document.querySelector('.navbar').classList.add('solid-nav');
        else document.querySelector('.navbar').classList.remove('solid-nav');
    })
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div>
                    <Link className="navbar-brand" to="/NewsThela"><strong>NewsThela</strong></Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela" ? 'active' : ''}`} aria-current="page" to="/NewsThela">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela/business" ? 'active' : ''}`} to="/NewsThela/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela/entertainment" ? 'active' : ''}`} to="/NewsThela/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela/health" ? 'active' : ''}`} to="/NewsThela/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela/science" ? 'active' : ''}`} to="/NewsThela/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela/sports" ? 'active' : ''}`} to="/NewsThela/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname==="/NewsThela/technology" ? 'active' : ''}`} to="/NewsThela/technology">Technology</Link>
                        </li>
                    </ul>

                    <form className="d-flex">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

