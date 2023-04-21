import React from "react";
import './Login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
            <div class="container d-flex align-items-center justify-content-center" style={{marginTop:"6rem", marginBottom:"6rem"}}>
                <div class="card mb-3 border-0">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="https://i.ibb.co/xLCzdkg/Mobile-login-1.gif" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-6 my-auto">
                            <div class="card-body">
                            <h5 style={{fontSize:"30px", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'"}} class="card-title mt-3 mb-3">WELCOME BACK</h5>
                            <form class="w-auto m-auto">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary text-center" id="login-btn">Login</button>
                                </div>
                                <div class="text-center mt-2">
                                    <Link style={{color: "black", textDecoration: "none"}} to="/resetPassword">Forgot Password?</Link>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;