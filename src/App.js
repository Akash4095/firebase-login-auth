
import React from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './context/userAuthContextApi';
import { Col, Container, Row } from "react-bootstrap"
import Home from './components/home';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path='/home' element={<ProtectedRoute> <Home /></ProtectedRoute>} />
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>

    </Container>


  );
}

export default App;
