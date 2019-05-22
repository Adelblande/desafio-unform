import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import Read from '../../components/read';

// import { Container } from './styles';

const Crud = () => (
  <>
    <h1>CRUD</h1>  
    <Link to="/create"><MdAddCircle size="50px" color="#a939fd"/></Link> 
    <Read />
  </>
);

export default Crud;
