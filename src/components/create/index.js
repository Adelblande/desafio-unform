import React from 'react'
import { Form, Input } from "@rocketseat/unform"

// import { Container } from './styles';

const Create = () => {
    function handleSubmit(data) {
        console.log(data)
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
