import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';

import api from '../../services/api';


const Read = () => {
  const [contacts, setContacts] = useState()
  const [contactsFiltered, setContactsFiltered] = useState()

  useEffect(() => {
    async function getContacts() {
      const { data } = await api.get('/contatos')
      setContacts([...data])
      setContactsFiltered([...data])
    }
    getContacts()
  }, [])
  
  
  function searchContact(nome) {
    const filtered = contacts.filter(contact => contact.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1)
    setContactsFiltered([...filtered])
  }
  
  // async function excluiContato(data) {
  //   await api.delete(`/contato/${data}`)
  // }

  return (
    <>
      <Form>
        <Row>
          <Col sm={4}>  
            <Form.Group>
              <Form.Control name="searchContact" placeholder="Pesquisar Contato" onKeyUp={e => searchContact(e.target.value)}/>
            </Form.Group>
          </Col>  
          <Col>  
            <Link to="/create">
              <MdAdd size="40px" color="#CCC" title="Add Contato" />
            </Link> 
          </Col>  
        </Row>
      </Form>
      
      {
        contactsFiltered && contactsFiltered.map(contact => (
          <Row key={contact._id} className="justify-content-xs-center">
            <Col sm={12}>{ contact.nome }</Col>
          </Row>
        ))
      }
    </>
  )
};

export default Read;
