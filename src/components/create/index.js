import React from 'react'
import { Form, Input } from "@rocketseat/unform"

// import { Container } from './styles';
import api from '../../services/api'

const Create = () => {
    async function handleSubmit(data) {
        await api.post('/contato', data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input name="nome" />
            <Input name="telefone" />
            <Input name="email" />
            <button type="submit">Enviar</button>
        </Form>
    )
}
export default Create;
