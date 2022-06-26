import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import { useSignupMutation } from "../services/appApi";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, { error, isLoading, isError }] = useSignupMutation();

function handleSignup(e){
  e.preventDefault();
  signup({ name, email, password });

}

  return (
    <Container>
      <Row>
        <Col md={6} className='signup__form--container'>
          <Form style={{ width: "100%" }} onSubmit={handleSignup}>
            <h1>Create an account</h1>
            {isError && <Alert variant="danger"> {error.data}</Alert> }
            <Form.Group className="mb-3">
              <Form.Control
                type='text'
                placeholder='Your name'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
    
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" disabled={isLoading}>
                Create Account
                </Button>
            </Form.Group>
            <p className='pt-3 text-center'>
              Already have an account? <Link to='/login'> Log In</Link>{" "}
            </p>
          </Form>
        </Col>
        <Col md={6} className='signup__image--container'></Col>
      </Row>
    </Container>
  )
}

export default Signup
