import React from "react"
import './Carousel.css'

const Carousel = () => {
    return(
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://i.ibb.co/8BD5WbN/slider01.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color: "#091a4c"}}>Discover Your Genre</h1>
                        <p style={{color:"#091a4c"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa dicta provident unde consequuntur laudantium!</p>
                        <a href="#booksDiv" style={{textDecoration:"none", color:"white"}} ><button type="button" className="btn btn-primary btn-carousel">Explore More</button></a>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ibb.co/fnSBP9s/slider02.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color: "#091a4c"}}>Educational Books</h1>
                        <p style={{color:"#091a4c"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quo? Expedita quo commodi, deserunt harum culpa fugit laborum!</p>
                        <a href="#booksDiv" style={{textDecoration:"none", color:"white"}} ><button type="button" className="btn btn-primary btn-carousel">Explore More</button></a>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ibb.co/8NHHsLv/slider03.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color: "#091a4c"}}>Fantasy Collections</h1>
                        <p style={{color:"#091a4c"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit obcaecati voluptatibus quisquam accusantium sint maxime minus dignissimos eveniet esse blanditiis?</p>
                        <a href="#booksDiv" style={{textDecoration:"none", color:"white"}} ><button type="button" className="btn btn-primary btn-carousel">Explore More</button></a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Carousel;