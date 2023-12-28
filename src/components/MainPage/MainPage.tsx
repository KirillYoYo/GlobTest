import React from 'react';
import {Link} from "react-router-dom";

import './mainPageStyle.scss'

const MainPage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <br/>
      <Link to={'login'}>Страница login</Link>
      <br/>
      <Link to={'browse'}>Страница browse</Link>
      <br/>
      <br/>
      <br/>
      Логин - пароль: admin/admin
    </div>
  );
};

export default MainPage;