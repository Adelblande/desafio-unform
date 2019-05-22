import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import { Container } from './styles';

import api from '../../services/api';

const Read = () => {
  const [contacts, setContacts] = useState()

  useEffect(() => {
    async function getContacts() {
      const { data } = await api.get('/contatos')
      setContacts([...data])
    }
    getContacts()
  }, [contacts])

  return (
    <Container>
      {
        contacts && contacts.map(contact => (
          <Row key={contact._id} className="justify-content-xs-center">
            <Col sm={3}>{ contact.nome }</Col>
            <Col sm={3}>{ contact.telefone }</Col>
            <Col sm={3}>{ contact.email }</Col>
          </Row>
        ))
      }
    </Container>
  
  )
};

export default Read;
