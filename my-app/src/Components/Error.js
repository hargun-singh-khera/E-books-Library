import React from "react";
import './Error.css';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div class="container">
                <div class="row-md-6 text-center">
                    <img src="https://i.ibb.co/ftvRTrR/Oops-404-Error-with-a-broken-robot.gif" alt="" width="550" />
                </div>
                <div class="row-md-6 text-center">
                    <p>Sorry! We couldn't find the page you are looking for.</p>
                    <Link className="nav-link active" to="/">
                        <button class="btn btn-primary" id="backHome">Back to Home</button>   
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Error;