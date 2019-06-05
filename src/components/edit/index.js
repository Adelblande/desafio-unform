import React, { useState, useEffect } from 'react';
import { Form, Input } from "@rocketseat/unform";

import { MdStar, MdDeleteForever, MdError} from 'react-icons/md';

import api from '../../services/api';

import './styles.css';

const Edit = (props) => {
  const [contact, setContact] = useState()
  useEffect(() => {
    async function getContact(){
      const { data } = await api.get(`/contatos/${props.match.params.id}`)
      setContact(data)
    }
    getContact()
  }, [props.match.params.id])
  
  const initialData = { ...contact }

  async function handleSubmit(data) {
    await api.post(`/contato/${props.match.params.id}`, data)
    props.history.push('/')
  }

  function handleSwitchIcon(){
    document.getElementById('mdDeleteForever').classList.add('hide')
    document.getElementById('mdError').classList.remove('hide')
  }

  async function handleDelete() {
    await api.delete(`/contato/${contact._id}`)
    props.history.push('/')
  }

  return (
    <div id="divUnformEdit">
      <header>
        <MdStar className="img-link" size="40px" color="#FFF" title="Favoritar Contato"/>
        <MdDeleteForever  id="mdDeleteForever" className="img-link" size="40px" color="#FFF" title="Excluir Contato" onClick={ handleSwitchIcon } />
        <MdError id="mdError" className="img-link hide" size="40px" color="#eb1a4d" title="Confirmar" onClick={ handleDelete } />
      </header>
      <Form onSubmit={handleSubmit} initialData={initialData}>
        <Input name="nome" placeholder="Nome" />
        <Input name="telefone" placeholder="Telefone"  />
        <Input name="email" placeholder="E-mail"  />
        <button className="alterar" type="submit">Salvar</button>
      </Form>    
    </div>
  )
}

export default Edit;
