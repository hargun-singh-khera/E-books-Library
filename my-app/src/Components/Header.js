import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Carousel from './Carousel'
import Home from './Home'

const Header = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://booken.onrender.com/books`)
        .then((res)=> {
            setProducts(res.data)
            // console.log(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[]);
    
      const [filteredList, setFilteredList] = new useState(products);
      
      
      const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...products];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            // console.log(query)
            return item.bookTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
        // if(filteredList) {
        //     result=filteredList
        // }
        console.log(filteredList)
    };
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/f4zKzRx/logo-2.png" alt="" width="150" className="d-inline-block align-text-top mx-5" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CATEGORIES
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="#faqs">FAQs</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="#about-us">ABOUT</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href='#contact'>CONTACT</a>
                            </li>
                        </ul>
                        <form className="d-flex d-flex-form me-auto w-50" role="search">
                            <input type="search"  onChange={filterBySearch} className="form-control" placeholder="Search..." aria-label="Search" id='search-box' />
                        </form>
                        <div className="text-alignment-auto p-2 mt-auto">
                            <Link className='nav-item active'  to="/login">
                                <button type="button" className="btn btn-primary me-2" id="login-btn-navbar">Login</button>
                            </Link>
                            <Link className='nav-item active' to="/register">
                                <button type="button" className="btn btn-primary" id="signup-btn-navbar">Sign-up</button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </nav>
        </div> 
    </>
  )
}

export default Header;