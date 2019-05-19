import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { MdAddCircleOutline, MdEdit, MdDelete } from 'react-icons/md'

import api from '../../services/api'

// import { Container } from './styles';

const Read = () => {
  const [contacts, setContacts] = useState()

  useEffect(() => {
    async function getContacts() {
      const { data } = await api.get('/contatos')
      setContacts([...data])
    }
    getContacts()
  }, [])


  return (
    <>
      <Link to="/create">
        <MdAddCircleOutline size="35px" color="#CCC" />
      </Link>
      <MdEdit size="35px" color="#CCC" />
      <MdDelete size="35px" color="#CCC" />
      <ul>
        {
          contacts && contacts.map(contact => (
            <li key={contact._id}>
              {contact.nome} - {contact.telefone} - {contact.email}
            </li>
          )
          )
        }
      </ul>
    </>
  )
};

export default Read;
