import React, { useState } from "react";
import './Register.css';
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const submitHandler=(event)=> {
        // alert('Registration Successfull')
        event.preventDefault();
        const name = event.target.name.value;
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const data = {name,username,email,password}
        console.log(data)
        axios.post('http://localhost:8000/api/auth/register', {name,username,email,password})
        .then((res)=> {
            console.log("Res",res)
        }).catch((err)=> {
            console.log(err)
        })
        alert("Your account has been registered successfully")
        event.target.reset()
    }
      
    return(
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{marginTop:"6rem"}}>
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/0MFqXGY/Placeholder.gif" className="img-fluid rounded-start" alt="..." />
                        </div> 
                        <div className="col-md-6">
                            <div className="card-body mt-2">
                                {/* <img className="text-center" src="https://i.ibb.co/f4zKzRx/logo-2.png" alt="..." /> */}
                                <h5 style={{fontSize: "30px",fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} className="card-title mt-3 mb-3">Create your account for Booken</h5>
                                <form className="w-auto m-auto" onSubmit={submitHandler} >
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Full Name"  required/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="username" name="username" placeholder="User Name"  required/>
                                    </div>
                                    
                                    <div className="mb-3">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email address" required/>
                                    </div>
                                    <div className="mb-3">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary text-center" id="signup-btn" >Create Account</button>
                                    </div>
                                    <div className="text-center mt-2">
                                        Already an existing user?<Link style={{color: "black", textDecoration: "none"}} to="/login"> Signin</Link>
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

export default Register;