import React, { useState, useEffect } from 'react';
import { Form, Input } from "@rocketseat/unform"

// import { Container } from './styles';
import api from '../../services/api';


const Edit = (props) => {
  const [contact, setContact] = useState()
  useEffect(() => {
    async function getContact(){
      const { data } = await api.get(`/contatos/${props.match.params.id}`)
      setContact(data)
    }
    getContact()
  }, [props.match.params.id])
  
  console.log(contact)
  const initialData = { ...contact }

  async function handleSubmit(data) {
    await api.post(`/contato/${props.match.params.id}`, data)
    props.history.push('/')
  }

  return (
    <div id="divUnform">
      <h2>Editar Contato</h2>
      <Form onSubmit={handleSubmit} initialData={initialData}>
        <Input name="nome" placeholder="Nome" />
        <Input name="telefone" placeholder="Telefone"  />
        <Input name="email" placeholder="E-mail"  />
        <button type="submit">Enviar</button>
      </Form>    
    </div>
  )
}

export default Edit;
