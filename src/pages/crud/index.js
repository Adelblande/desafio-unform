import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Crud = () => (
  <>

    <h1>CRUD</h1>  
    <Link to="/create">Create</Link> 
    <Link to="/read">Read</Link> 
    <Link to="/update">Update</Link>  
    <Link to="/delete">Delete</Link>  
  </>
);

export default Crud;
