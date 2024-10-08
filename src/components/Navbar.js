import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/general">NewsFlash</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <Link className="nav-link with-gap" aria-current="page" to="/">Home</Link>
                                </li> */}
                                <li className="nav-item"><Link className="nav-link  with-gap" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link  with-gap" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link  with-gap" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link  with-gap" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link  with-gap" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link  with-gap" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                            </ul>

                        </div>
                    </div>
                    <style>
          {`
            .nav-link.with-gap {
              margin-right: 15px; /* Adjust the value as needed for the desired gap */
            }
          `}
        </style>
                </nav>
            </div>
        )
    }
}

export default Navbar
