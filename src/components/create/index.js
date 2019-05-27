import React from 'react'
import { Form, Input } from "@rocketseat/unform"
// import { Row, Col, Button } from 'react-bootstrap'

import './styles.css';
import api from '../../services/api'

const Create = (props) => {
  async function handleSubmit(data) {
    await api.post('/contato', data)
    props.history.push('/')
  }
  return (
    <div id="divUnform">
      <h2>Contato Novo</h2>
      <Form onSubmit={handleSubmit} >
        <Input name="nome" placeholder="Nome" />
        <Input name="telefone" placeholder="Telefone"  />
        <Input name="email" placeholder="E-mail"  />
        <button type="submit">Enviar</button>
      </Form>    
    </div>    
  )
}
export default Create;
