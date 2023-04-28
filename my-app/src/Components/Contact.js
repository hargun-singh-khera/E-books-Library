import React from "react";
import axios from "axios";
import './Contact.css';

const Contact = () => {
    const submitHandler=(event)=> {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pnumber = event.target.pnumber.value;
        const concern = event.target.concern.value;
        const data = {name,email,pnumber,concern}
        console.log(data)
        axios.post('http://localhost:8000/contact', {name,email,pnumber,concern})
        .then((res)=> {
            console.log("Res",res)
            // event.target.reset()
        }).catch((err)=> {
            console.log(err)
        })
        alert("Your query has been submitted successfully")
        event.target.reset()
    }
    return (
        <>
            <section id="contact">
            <div class="container text-center mt-5">
                <div class="row text-center">
                    <div class="col-md-6">
                        <img class="img-fluid" src="https://i.ibb.co/c21YjGF/Contact-us.gif" alt="" width="550" />
                    </div>
                    <div class="col-md-6">
                        <h1 class="display-6 fw-bold lh-1 mb-5">We'd love to hear from you!</h1>
                        <form className="w-auto m-auto" onSubmit={submitHandler} >
                            <div class="form-floating mb-3">
                                <input type="name" class="form-control" id="floatingInput" name="name" placeholder="Enter your Name" required />
                                <label for="floatingInput">Enter your Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" name="email" placeholder="email@example.com" required />
                                <label for="floatingInput">Enter your Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="tel" class="form-control" id="floatingInput" name="pnumber" placeholder="Enter your Phone Number" required />
                                <label for="floatingInput">Enter your Phone Number</label>
                            </div>
                            <div class="form-floating">
                            <textarea class="form-control" placeholder="Elaborate your Concern here" name="concern" id="floatingTextarea2" style={{height: "100px"}} required></textarea>
                            <label for="floatingTextarea2">Elaborate your Concern</label>
                            </div>
                            <div class="row-md-3 mt-5">
                                <button class="btn btn-primary" id="submitContactForm">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            </section>
        </>
    )
}

export default Contact;