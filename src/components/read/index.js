import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import api from '../../services/api';
import './styles.css';

const Read = ({props}) => {
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
  
  async function editContact(data) {
    props.history.push(`/edit/${data._id}`)
  }
  
  return (
    <div id="divContainer">
      <h2>Contatos</h2>
      <form>
        <input name="searchContact" placeholder="Pesquisar Contato" onKeyUp={e => searchContact(e.target.value)}/>
        <Link to="/create">
          <MdAdd size="40px" color="#CCC" title="Add Contato" />
        </Link> 
      </form>
      <ul>
      {
        contactsFiltered && contactsFiltered.map(contact => (
          <li key={contact._id} className="justify-content-xs-center " onClick={() => editContact(contact)}>
            { contact.nome }
          </li>
        ))
      }
      </ul>
    </div>
  )
};

export default Read;
