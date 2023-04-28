import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
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

    const submitHandler=(event)=> {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const comments = event.target.comments.value;
        const data = {name,email,comments}
        console.log(data)
        axios.post('http://localhost:8000/feedback', {name,email,comments})
        .then((res)=> {
            console.log("Res",res)
            event.target.reset()
        }).catch((err)=> {
            console.log(err)
        })
        alert("Your feedback has been submitted successfully")
        event.target.reset()
    }
  return (
    <>
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
                <li class="breadcrumb-item">
                    <Link class="link-body-emphasis" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                    </svg>
                    </Link>
                </li>
                <li class="breadcrumb-item active">
                    Books
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {title}
                </li>
                </ol>
            </nav>
        </div>

        
        <div className='container'>  
            {data.map((item)=>
                <div key={item._id}>
                    <div class="container mt-3" >
                        <div id="booksCardContainer" class="card mb-3" style={{maxWidth: "120rem"}}>
                            <div class="row g-0 border-0">
                                <div class="col-md-4 ">
                                    <img id='book-image-detailspage' src={item.book_image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-6 ">
                                    <div class="card-body">
                                        <h2 class="card-title mt-auto" style={{color:"#1a1668", marginTop:"-25px", marginLeft:"-5px"}}>{item.bookTitle}</h2> 
                                            {/* <div>
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
                                            </div> */}
                                            <div class="row mt-3 mb-auto">
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
                                            <h3 className='mt-4' style={{color:"#561668;"}}>Description</h3>
                                            <p class="card-text" style={{color:"grey"}}>{item.description}</p>
                                            </div>
                                                    
                                            <div className="container mt-3">
                                                <div className="row">
                                                    <div className="col-md-6 mx-auto">
                                                        <a href="#chapterWiseRead" style={{textDecoration:"none", color:"white"}} ><button id='btn-read' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="btn btn-secondary download mb-5 ml-auto">Read Online</button></a>
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
            <div class="collapse mx-auto" id="collapseExample">
                <div class="card card-body">
                    {data.map((item)=>
                        <>
                            <iframe src={item.url} width="100%" height="800px" allow="autoplay"></iframe>
                            <div className="container mt-3">
                                <div className="row" style={{align:"center"}}>
                                    <div className="container text-center">
                                        <button id='btn-close' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="btn btn-secondary download mb-5">Close </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* <div class="container mt-5">
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
                                            <td><a href={chapter.url}>Read Now</a></td>
                                            <td><a onClick={clickHandler.bind(chapter)}>Read Now</a></td>
                                            <td>
                                                <!-- Button trigger modal -->
                                                <button onClick={togglePDF} class="btn btn-primary"  data-bs-target="#exampleModal">
                                                Read Now
                                                </button>
                                            </td>


                                            <!-- Modal -->
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-fullscreen">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        {chapter.url}

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <td><a id='btn-collapse' class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" > Read now </a></td>
                                        </tr>
                                        {chapter.url}
                                    </>
                                )}
                            </>
                        )}
                        <button onClick={togglePDF}>Read Now</button>
                    </tbody>
                </table>
            </div> */}
            {/* <div className='container' id="myDiv">
                This is my DIV element.
                    
                {data.map((item)=>
                    <div className='container' key={item._id}>
                    {item.chapters.map((chapter)=>
                        <>
                            <iframe src={chapter.url} width="100%" height="700px" allow="autoplay"></iframe>
                        </>
                    )}
                    </div>
                )}
                <iframe src="https://drive.google.com/file/d/1LCed9JHv9TYkLN3jwdOCXdt5ZTl0AdcM/preview" width="100%" height="700px" allow="autoplay"></iframe>

            </div> */}
            
            {/* <iframe src="https://drive.google.com/file/d/1LCed9JHv9TYkLN3jwdOCXdt5ZTl0AdcM/preview" width="640" height="480" allow="autoplay"></iframe> */}
            {/* <iframe src="https://drive.google.com/file/d/1LCed9JHv9TYkLN3jwdOCXdt5ZTl0AdcM/preview" width="100%" height="700px" allow="autoplay"></iframe> */}
            
        </section>

        
        {/* {data.map((item)=>
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
        )} */}
        <form className="w-auto m-auto" onSubmit={submitHandler} >
            <div class="container d-flex align-content-center justify-content-center">
                <div class="row">
                    <div class="col-md-6 my-auto mt-auto">
                        <h1>Leave Your Reply</h1>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" name='name' placeholder="Name" />
                            <label for="name">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" name='email' placeholder="Email" />
                            <label for="email">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here" name='comments' id="comments" style={{height: "100px"}}></textarea>
                            <label for="comments">Comments</label>
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
        </form>
        
    </>
  )
}

export default Product
