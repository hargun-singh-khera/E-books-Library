import React from 'react';
import './ResetPassword.css';

const ResetPassword= () => {
    return(
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{marginTop:"7rem", marginBottom:"6rem"}}>
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/GQyc5XQ/Forgot-password-1.gif" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body mt-4">
                                {/* <img src="https://i.ibb.co/f4zKzRx/logo-2.png" alt="..." /> */}
                                <h5 style={{fontSize: "30px", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'"}} className="card-title mt-3 mb-3">Forgot Password?</h5>
                                <form className="w-auto m-auto">
                                    <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                                    </div>
                                    <div className="mb-3 mt-4">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="New Password" />
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary text-center" id="reset-btn">Reset Password</button>
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

export default ResetPassword;