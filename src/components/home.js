import React from 'react'
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContextApi'
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logout()
      return <Navigate to="/" />
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <>
      <div className='p-4 box mt-3 text-center'> Hello Welcome <br />
        {user && user.email}
      </div>
      <div className='d-grid gap-2'>
        <Button variant='primary' onClick={() => handleLogout()}>Log out</Button>
      </div>
    </>

  )
}

export default Home