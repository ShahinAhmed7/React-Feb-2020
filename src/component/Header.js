import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../node_modules/jquery/dist/jquery.min'


class Header extends Component {
    render() {
        return (
            <div> 
                <div className="header_area">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg" id="mainNav">
                
                            <div className="logo">
                                <a href="index.html">Bootsreap 4 Menu</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                x
                            </span>
                            </button>
                            <div className="collapse navbar-collapse mainmenu" id="navbarsExampleDefault">
                                <ul className="navbar-nav ml-auto">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index.html">About</a></li>
                                <li><a href="index.html">Service</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;