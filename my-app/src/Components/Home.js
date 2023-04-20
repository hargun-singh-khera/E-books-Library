import './Home.css';
import Carousel from "./Carousel";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import Contact from "./Contact";
import FavBooks from "./FavBooks";
import RecommendedBooks from "./RecommendedBooks";
import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <>
        <div >
            <Carousel />  
            <div className="container">
                <div className="row text-center mt-3">
                    <h2 className="my-auto" style={{color:"#091a4c;"}}>Pick Your Favorite Books</h2>
                    <div className='row'>
                        <FavBooks />
                    </div>
                    <h2 className="mt-3" style={{color:"#091a4c;"}}>Recommended For You</h2>
                    <div className='row'>
                        <RecommendedBooks />
                    </div> 
                </div>
            </div>
        </div>
        <hr/>
        <FAQs />
        <hr />
        <AboutUs />
        <hr />
        <Contact />
        <hr /> 
      </>
    )
  }
}


{/* <div className="row text-center mt-3">
                            <h2 style={{color:"#091a4c;"}}>Recommended For You</h2>
                            <div className="row mt-2 p-2">
                            <div className="col-md-3 mt-3">
                                <div className="card h-100">
                                    <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Book Name</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary btn-read-now">Read Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card h-100">
                                    <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Book Name</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary btn-read-now">Read Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card h-100">
                                    <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Book Name</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary btn-read-now">Read Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card h-100">
                                    <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">Book Name</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary btn-read-now">Read Now</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div> */}