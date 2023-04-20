import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Book = () => {
    const [data, setData] = useState();
    let { title } = useParams(); 

    useEffect(() => {
        fetch(`http://localhost:8000/books/${title}`).then(resp=>resp.json())
        .then(res=>setData(res))
        // .then(res=>console.log(res.data))
        // .then(resp=>this.setState({data:resp}))
        console.log(`${title}`);
    },[]);
    console.log(data.data.map((e)=> e))
  return (
    <>

        <div className='container'>  
            {/* {bookdata.data.map((item)=>{
                return(
                    <>
                        <h1>{item.title}</h1>
                        <div key={item._id}>
                            <div class="container mt-3" >
                                <div id="booksCardContainer" class="card mb-3" style={{maxWidth: "120rem"}}>
                                    <div class="row g-0 border-0">
                                        <div class="col-md-4">
                                            <img id='book-image-detailspage' src={item.book_image} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })} */}
            {/* {data.map((item)=>{
                return(
                    <>
                        <h1>{item.title}</h1>
                        
                    </>
                )
            })}   */}
             
            {/* {data.map((item)=>
                <div key={item._id}>
                    <div class="container mt-3" >
                        <div id="booksCardContainer" class="card mb-3" style={{maxWidth: "120rem"}}>
                            <div class="row g-0 border-0">
                                <div class="col-md-4">
                                    <img id='book-image-detailspage' src={item.book_image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-6 ">
                                    <div class="card-body">
                                        <h2 class="card-title" style={{color:"#1a1668", marginTop:"-25px", marginLeft:"-10px"}}>{item.bookTitle}</h2> 
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
                                                    <div className="col-md-4 mx-5">
                                                        <button type="button" className="btn btn-success download mb-5">Free Download</button>
                                                    </div>
                                                    <div className="col-md-6 mx-auto">
                                                        <button type="button" className="btn btn-secondary download mb-5">Read Online</button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            
        </div>
    </>
  )
}

export default Book
