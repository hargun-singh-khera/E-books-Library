import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section id="contact">
            <div class="container text-center mt-5">
                <div class="row text-center">
                    <div class="col-md-6">
                        <img src="https://i.ibb.co/c21YjGF/Contact-us.gif" alt="" width="550" />
                    </div>
                    <div class="col-md-6">
                        <h1 class="display-6 fw-bold lh-1 mb-5">We'd love to hear from you!</h1>
                        <div class="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" placeholder="Enter your Name" required />
                            <label for="floatingInput">Enter your Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="email@example.com" required />
                            <label for="floatingInput">Enter your Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control" id="floatingInput" placeholder="Enter your Phone Number" required />
                            <label for="floatingInput">Enter your Phone Number</label>
                        </div>
                        <div class="form-floating">
                        <textarea class="form-control" placeholder="Elaborate your Concern here" id="floatingTextarea2" style={{height: "100px"}} required></textarea>
                        <label for="floatingTextarea2">Elaborate your Concern</label>
                        </div>
                        <div class="row-md-3 mt-5">
                            <button class="btn btn-primary" id="submitContactForm">Submit</button>
                        </div>
                    </div>
                </div>
            </div>


            </section>
        </>
    )
}

export default Contact;