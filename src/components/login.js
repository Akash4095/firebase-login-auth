import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/userAuthContextApi'
import GoogleButton from 'react-google-button'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await login(email, password)
      navigate("/home");
    } catch (err) {
      console.log("login-error", err.message)
      setError(err.message)
    }
  }
  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Firebase Auth Login</h2>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant='danger' >{error}</Alert>}
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Control type='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
          </Form.Group>


          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit'>
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div className='p-4 box mt-3 text-center'>
          Don't have an account? <Link to='/signup'> Sign up </Link>
        </div>
      </div>
    </>

  )
}

export default Login