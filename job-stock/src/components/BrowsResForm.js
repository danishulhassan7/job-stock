import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const BrowsResForm = (props) => (
<div>
<Form>
  <Form.Row className="align-items-center">
    <Col md={3}>
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Keyword
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Keyword: Name, Tag"
      />
    </Col>
    <Col md={3}>
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Location
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Location: City, State, Zip"
      />
    </Col>
    <Col md={4}></Col>

    <Col md={2}>
      <Button type="submit" className="mb-2" variant="success" style={{backgroundColor:'#03a504', display:'inline-block', padding:"6px 60px", fontSize:"20px"}}>
        Filter
      </Button>
    </Col>
  </Form.Row>
</Form>
</div>
);