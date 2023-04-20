import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class RecommendedBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
      }
  render() {
    return (
      <>
        {this.state.data.map((item)=>
            <div className="col-md-3 mt-4" key={item._id} >
              <Link to={`/books/${item.title}`} style={{textDecoration:"none"}} onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                    <div className="card h-100">
                        <img src={item.book_image} className="card-img-top" alt="..." id='book-image' />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
                            <a href="#" className="btn btn-primary btn-read-now">Read Now</a>
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
    fetch('http://localhost:8000/books/type/recommended')
    .then(resp=>resp.json())
    .then(resp=>this.setState({data:resp}))
  }
}

export default RecommendedBooks
