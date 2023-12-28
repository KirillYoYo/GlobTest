import React, {useContext, useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap'
import './loginStyle.scss'
import {loginRequest} from "@src/components/LoginPage/loginRequests";
import IsLoginContext from "@src/IsLoginContext";
import {generatePath, Link, useNavigate} from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [error, setError] = useState(null)
  const {setIsLogin} = useContext(IsLoginContext)

  const loginFn = () => {
    loginRequest(login, password).then((res) => {
      setIsLogin(true)
      navigate(generatePath('/'))
      setError(null)
    }).catch((e) => {
      setError(e)
    })
  }

  return (
    <div style={{height: '100%'}}>
      <br/>
      <h1>Login</h1>
      <Link to={'/'}>На главную</Link>
      <div className="login-wp">
        <div className="login-form">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Login</Form.Label>
              <Form.Control
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                type="text"
                placeholder="Your login"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Your password"
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Button onClick={loginFn} variant="primary">
                Login
              </Button>
              {
                error && (
                  <Alert style={{marginTop: 10}} variant='danger'>
                    {error.message}
                  </Alert>
                )
              }
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;