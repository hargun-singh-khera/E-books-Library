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

