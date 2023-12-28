import React from 'react';
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Нет такой страницы</h3>
      <Link to={'/'}>На главную</Link>
    </div>
  );
};

export default NoPage;