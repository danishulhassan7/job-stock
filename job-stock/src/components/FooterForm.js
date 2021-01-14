import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,  Button } from 'react-bootstrap';


function FooterForm() {
    return(
        <Form>
    <Form.Group controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Your Name" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
        <Form.Control type="email" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Message" />
    </Form.Group>
    <Button variant="success">Login</Button>
</Form>
    );
}

export default FooterForm;