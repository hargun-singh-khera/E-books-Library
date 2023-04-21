import React, { Component } from 'react'
import './Books.css'
import { Link } from 'react-router-dom';

export default class FavBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
      }
  render() {
    return (
      <>
        {this.state.data.map((item)=>
            <div className="col-md-3 mt-4" key={item._id} id='books-container-div'>
              <Link to={`/books/${item.title}`} style={{textDecoration:"none"}} onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                    <div className="card h-100">
                        <img src={item.book_image} className="card-img-top" alt="..." id='book-image' />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <Link to={`/books/${item.title}`} onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="btn btn-primary btn-read-now">Read Now</Link>
                        </div>
                    </div>
              </Link>
            </div>
        )}
      </>
    )
  }
  componentDidMount(){
    //api call
    fetch('https://booken.onrender.com/books/type/favorite')
    .then(resp=>resp.json())
    .then(resp=>this.setState({data:resp}))
  }
}
