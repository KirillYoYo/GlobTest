import React from 'react';
import './Application.scss';
import UsersList from "@src/components/UsersList/UsersList";

const Application: React.FC = () => {
  return (
    <div className='content'>
      <UsersList />
    </div>
  );
};

export default Application;
