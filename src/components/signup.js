import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useUserAuth } from '../context/userAuthContextApi'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { signup } = useUserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signup(email, password)
      navigate("/");
    } catch (err) {
      console.log("signup-error", err.message)
      setError(err.message)
    }
  }
  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Firebase Auth SignUp</h2>
        {error && <Alert variant='danger' >{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Control type='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
          </Form.Group>


          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit'>
              Sign Up
            </Button>
          </div>
        </Form>
        <hr />
        <div className='p-4 box mt-3 text-center'>
          Alredy have an account? <Link to='/'>Log In</Link>
        </div>
      </div>
    </>
  )
}

export default Signup