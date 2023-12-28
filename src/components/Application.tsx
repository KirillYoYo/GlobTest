import React, {useEffect, useContext} from 'react';
import { Routes, Route, useNavigate, useLocation, Link, generatePath } from "react-router-dom";
import {Container} from "react-bootstrap";
import LoginPage from "@src/components/LoginPage/LoginPage";
import BrowsePage from "@src/components/BrowsePage/BrowsePage";
import MainPage from "@src/components/MainPage/MainPage";
import NoPage from './NoPage'
import IsLoginContext from "@src/IsLoginContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Application.scss';

const Application: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {isLogin, setIsLogin} = useContext(IsLoginContext)

  useEffect(() => {
    if (location.pathname == '/login') {
      if (isLogin) {
        navigate(generatePath('/'))
      }
    }
    if (location.pathname == '/browse') {
      if (!isLogin) {
        navigate(generatePath('/login'))
      }
    }
  }, [location]);

  return (
    <Container>
      {
        location.pathname !== '/login' && (
          <div className='log'>
            <Link onClick={() => setIsLogin(false)} to='/login'>
              {isLogin ? 'Logout' : 'Log in'}
            </Link>
          </div>
        )
      }
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Container>
  );
};

export default Application;
