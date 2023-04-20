import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

export default function Something() {
    let { id } = useParams(); 

    useEffect(() => {
        fetch(`http://localhost:8000/books/${id}`).then(resp=>resp.json())
        // .then(res=>console.log(res.data))
        // .then(resp=>this.setState({data:resp}))
        console.log(`/http://localhost:8000/books/${id}`);
    },[]);
  return (
    <></>
  )
}
