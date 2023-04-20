import React, { Component } from 'react'
import axios from 'axios'
import './Product.css'
// import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import data from './API/data.json'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
      }
    render() {
        // console.log('Props:',this.props)
        // const { product } = this.state;
        // console.log(product)
        return (
            <>
                <div className='container'>
                    {/* {this.state.data.map((item)=> {
                        return(
                            <>
                            <div>Hello World</div>

                            </>
                        )
                    })} */}
                    {/* {product?.map(post=><div key={post._id}>{post._id}.{post.title}</div>)} */}
                    {this.state.data.map((item)=>
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
                    )}
                    <section className="book-chapterWise">
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
                                    {this.state.data.map((item)=>
                                            <>
                                                <tr>
                                                    {item.chapters.map((chapters)=>
                                                        <>
                                                            <td>{chapters.sno}</td>
                                                            <td>{chapters.name}</td>
                                                            <td><a href={chapters.url} style={{textDecoration:"underline", color:"red"}}>Link</a></td>
                                                        </>
                                                    )}
                                                    
                                                </tr>
                                            </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>

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
                </div>
            </>
          
        );
    }
    // async componentDidMount() {
    //     const productUrl = "http://localhost:8000/books/type/recommended"
    //     try {
    //         // console.log('Props:',this.props.match.params.title)
    //         // const prodId = this.props.match.params.id;
    //         const response = await axios.get(`${productUrl}`);
    //         // console.log(productUrl)
    //         this.setState({ data: response})
    //         // console.log(response.data[0]);
    //         // console.log(response.data[0].colour[0].colour);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }
    componentDidMount(){
        // const {title} = this.props.match
        const title = "Think and Grow Rich"
        //api call
        fetch(`http://localhost:8000/books/${title}`).then(resp=>resp.json())
        // .then(res=>console.log(res.data))
        .then(resp=>this.setState({data:resp}))
      }
}

// {this.state.data.map((item)=> {
//     <div id={item._id}>
        // <div class="container mt-5" >
        //     <div id="booksCardContainer" class="card mb-3" style={{maxWidth: "120rem"}}>
        //         <div class="row g-0 border-0">
        //             <div class="col-md-4">
        //                 <img src={item.book_image} class="img-fluid rounded-start" alt="..." />
        //             </div>
        //             <div class="col-md-6 ">
        //                 <div class="card-body">
        //                 <h1 class="card-title" style={{color:"#1a1668"}}>Title</h1> 
        //                     <div>
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        //                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        //                     </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        //                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        //                     </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        //                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        //                     </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        //                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        //                     </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        //                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        //                     </svg>
        //                     </div>
        //                     <div class="row mt-3">
        //                         <ul>
        //                         <li class="books-info">
        //                             <div>
        //                                 <img id="author-profile" class="mb-5 me-4" src="" alt="" />
        //                                 <div class="books-info me-5">
        //                                     <p><b> Written By</b></p>
        //                                     <p>Author</p>
        //                                 </div>
        //                             </div>
        //                         </li>
        //                         <li class="books-info me-5">
        //                             <div>
        //                             <p><b>Publisher</b></p>
        //                             <p>PName</p>
        //                             </div>
        //                         </li>
        //                         <li class="books-info me-5">
        //                             <div>
        //                             <p><b>Year</b></p>
        //                             <p>Year</p>
        //                             </div>
        //                         </li>
        //                         </ul>
        //                     </div>
        //                     <h3 style={{color:"#561668;"}}>Description</h3>
        //                     <p class="card-text" style={{color:"grey"}}>Description</p>        
        //                     <div className="container mt-3">
        //                         <div className="row">
        //                             <div className="col-md-4 mx-5">
        //                                 <button type="button" className="btn btn-success download mb-5">Free Download</button>
        //                             </div>
        //                             <div className="col-md-6 mx-auto">
        //                                 <button type="button" className="btn btn-secondary download mb-5">Read Online</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </div>


        // <section className="book-chapterWise">
        //     <div class="container mt-5">
        //         <table class="table table-center table-bordered table-hover table-striped">
        //             <thead class="table-primary">
        //                 <tr>
        //                     <th scope="col">S.No</th>
        //                     <th scope="col">Name of the Chapters</th>
        //                     <th scope="col">Link of the Document</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <th scope="row">1</th>
        //                     <td>Mark</td>
        //                     <td>Otto</td>
        //                 </tr>
        //                 <tr>
        //                     <th scope="row">2</th>
        //                     <td>Jacob</td>
        //                     <td>Thornton</td>
        //                 </tr>
        //                 <tr>
        //                     <th scope="row">3</th>
        //                     <td>Thornton</td>
        //                     <td colspan="2">Larry the Bird</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </section>

        // <div class="container d-flex align-content-center justify-content-center">
        //     <div class="row">
        //         <div class="col-md-6 my-auto mt-auto">
        //             <h1>Leave Your Reply</h1>
        //             <div class="form-floating mb-3">
        //                 <input type="text" class="form-control" id="floatingInput" placeholder="Name" />
        //                 <label for="floatingInput">Name</label>
        //             </div>
        //             <div class="form-floating mb-3">
        //                 <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
        //                 <label for="floatingInput">Email</label>
        //             </div>
        //             <div class="form-floating mb-3">
        //                 <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
        //                 <label for="floatingTextarea2">Comments</label>
        //             </div>
        //             <div class="container text-center mt-auto">
        //                 <button id="btn-submit-form" class="btn btn-primary">Submit</button>
        //             </div>
        //         </div>
        //         <div class="col-md-6 text-center my-auto">
        //             <img class="img-fluid" src="https://i.ibb.co/9NMmFx9/Work-chat.gif" alt="" width="750" />
        //         </div>
        //     </div>
        // </div>
//     </div>
// })}

