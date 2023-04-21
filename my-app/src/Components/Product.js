import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import './Product.css';

const Product = () => {
    const [data, setData] = useState([]);
    let { title } = useParams(); 

     useEffect(() => {
        axios.get(`https://booken.onrender.com/books/${title}`)
        .then((res)=> {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[]);

    const togglePDF=()=> {
        var div = document.getElementById("newpost");
        if (div.style.display !== "none") {
            div.style.display = "none";
        }
        else {
            div.style.display = "block";
        }
    }
  return (
    <>
        <div className='container'>  
            {data.map((item)=>
                <div key={item._id}>
                    <div class="container mt-3" >
                        <div id="booksCardContainer" class="card mb-3" style={{maxWidth: "120rem"}}>
                            <div class="row g-0 border-0">
                                <div class="col-md-4">
                                    <img id='book-image-detailspage' src={item.book_image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-6 ">
                                    <div class="card-body">
                                        <h2 class="card-title" style={{color:"#1a1668", marginTop:"-25px", marginLeft:"-5px"}}>{item.bookTitle}</h2> 
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            </div>
                                            <div class="row mt-3">
                                                <ul>
                                                <li class="books-info">
                                                    <div>
                                                        <img id="author-profile" class="mb-5 me-4" src={item.author_image} alt="" />
                                                        <div class="books-info me-5">
                                                            <p><b> Written By</b></p>
                                                            <p>{item.author}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="books-info me-5">
                                                    <div>
                                                    <p><b>Publisher</b></p>
                                                    <p>{item.publisher}</p>
                                                    </div>
                                                </li>
                                                <li class="books-info me-5">
                                                    <div>
                                                    <p><b>Year</b></p>
                                                    <p>{item.year}</p>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            <div id='book-description' className='container'>
                                            <h3 style={{color:"#561668;"}}>Description</h3>
                                            <p class="card-text" style={{color:"grey"}}>{item.description}</p>
                                            </div>
                                                    
                                            <div className="container mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 mx-auto">
                                                        <button id='btn-read' type="button" className="btn btn-secondary download mb-5"><a href="#chapterWiseRead" style={{textDecoration:"none", color:"white"}} >Read Online</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <section className="book-chapterWise" id='chapterWiseRead'>
            <div class="container mt-5">
                <table class="table table-center table-bordered table-hover table-striped">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name of the Chapters</th>
                            <th scope="col">Link of the Document</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=>
                            <>
                                {item.chapters.map((chapter)=>
                                    <>
                                        <tr>
                                            <td key={chapter.sno}>{chapter.sno}</td>
                                            <td>{chapter.name}</td>
                                            {/* <td><a href={chapter.url}>Read Now</a></td> */}
                                            <td><button type='button' onClick={togglePDF} style={{backgroundColor:"red", border:"none", color:"white"}} >Read Now</button></td>

                                            
                                            {/* <td><a id='btn-collapse' class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" > Read now </a></td> */}
                                        </tr>
                                    </>
                                )}
                            </>
                        )}
                        {/* <button onClick={togglePDF}>Read Now</button> */}
                    </tbody>
                </table>
            </div>
            <div className='container' id="newpost">
                {/* <p> JavaScript is the programming language of HTML and the Web. <br />
                    Programming makes computers do what you want them to do. <br />
                    JavaScript is easy to learn.  </p> */}
                    {/* <iframe src="https://drive.google.com/file/d/1LCed9JHv9TYkLN3jwdOCXdt5ZTl0AdcM/preview" width="640" height="480" allow="autoplay"></iframe> */}
                <iframe src="https://drive.google.com/file/d/1LCed9JHv9TYkLN3jwdOCXdt5ZTl0AdcM/preview" width="100%" height="700px" allow="autoplay"></iframe>
            </div>
        </section>

        
        {data.map((item)=>
            <>
                {item.chapters.map((chapter)=>
                    <>
                        <div class="collapse" id='collapseExample' key={chapter.sno}>
                            <div class="container">
                                <iframe id="iframe" src={chapter.url}  frameborder="0" height="700px" width="100%"></iframe>
                            </div>
                        </div>
                    </>
                )}
            </>
        )}

        <div class="container d-flex align-content-center justify-content-center">
            <div class="row">
                <div class="col-md-6 my-auto mt-auto">
                    <h1>Leave Your Reply</h1>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Name" />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                    <div class="container text-center mt-auto">
                        <button id="btn-submit-form" class="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div class="col-md-6 text-center my-auto">
                    <img class="img-fluid" src="https://i.ibb.co/9NMmFx9/Work-chat.gif" alt="" width="750" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Product
