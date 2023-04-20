import React, { Component } from 'react';
import axios from 'axios';

// const productUrl = "https://fashionwebsiteapi.onrender.com/products/men";
const productUrl = "http://localhost:8000/books";

class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ''
        }
    }
    render() {
        const { product } = this.state;
        return (
            <>
                
            </>
        )
    }
    async componentDidMount() {
        try {
            console.log('Props:',this.props.match.params.title)
            const prodId = this.props.match.params.title;
            const response = await axios.get(`${productUrl}/${prodId}`);
            this.setState({ product: response.data[0]})
            console.log(response.data[0]);
            // console.log(response.data[0].colour[0].colour);
        } catch(err) {
            console.log(err);
        }
    }
}
export default ProductItem;
