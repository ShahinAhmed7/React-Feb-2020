import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-logo">
                                    <a href="/Home">Footer Logo</a>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/Home">Home</a></li>
                                        <li><a href="/Home">About</a></li>
                                        <li><a href="/Home">Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;