import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'jquery/dist/jquery.min'

export default class Photos extends Component {
    render() {
        return (
            <div>
                <div className="photos-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-">
                                    <a href="/Single">
                                        <img src="http://placehold.it/400/400" alt=""/>
                                        <h4>Image Title</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-">
                                    <a href="/Single">
                                        <img src="http://placehold.it/400/400" alt=""/>
                                        <h4>Image Title</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-">
                                    <a href="/Single">
                                        <img src="http://placehold.it/400/400" alt=""/>
                                        <h4>Image Title</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
