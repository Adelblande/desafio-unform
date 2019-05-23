import React from 'react'
import { Form, Input } from "@rocketseat/unform"
import { Row, Col, Button } from 'react-bootstrap'

// import { Container } from './styles';
import api from '../../services/api'

const Create = () => {
    async function handleSubmit(data) {
        await api.post('/contato', data)
    }
    return (
        <Row className="justify-content-sm-center">
            <Col sm>
                <Form onSubmit={handleSubmit} >
                    <Input name="nome" placeholder="Nome" />
                    <Input name="telefone" placeholder="Telefone"  />
                    <Input name="email" placeholder="E-mail"  />
                    <Button variant="outline-primary" type="submit" block>Enviar</Button>
                </Form>
            </Col>
        </Row>
    )
}
export default Create;
