import React, { useEffect, useState } from 'react';
import './userListStyle.scss'
import axios from "axios";
import phone from '@assets/images/phone.png';
import email from '@assets/images/email.png';
import UserPopUp from "@src/components/UsersList/UserPopUp";
import {userType} from "@src/components/UsersList/types";



const UsersList = () => {
  const [users, setUsers] = useState<Array<userType>>([])
  const [search, setSearch] = useState('')
  const [reqError, setReqError] = useState('')
  const [currentUser, setCurrentUser] = useState<userType | null>(null)

  const searchHandler = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `http://localhost:3000/?term=${search}`,
      })
      setUsers(res.data);
      setReqError(null)
    } catch (error) {
      console.log(error);
      setReqError(error.message)
      setUsers([])
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `http://localhost:3000/`,
        })
        setUsers(res.data);
        setReqError(null)
      } catch (error) {
        console.log('error', error)
        setReqError(error.message)
        setUsers([])
      }
    })()
  }, []);

  return (
    <div className='user-list-page'>
      <div className="input-search-wp">
        <input
          id='search-user'
          type="search"
          className="input-search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div onClick={searchHandler} className="lupa" />
      </div>
      <div className="users-list">
        {reqError}
        {
          users.map((user: userType) => (
            <div
              key={user.name}
              className="user-item"
              onClick={() => setCurrentUser(user)}
            >
              <div className="name"><h2>{user.name}</h2></div>
              <div className="phone cs-text">
                <img src={phone} alt=""/>
                {user.phone}
              </div>
              <div className="email cs-text">
                <img src={email} alt=""/>
                {user.email}
              </div>
            </div>
          ))
        }
      </div>
      {
        currentUser && <UserPopUp onCLose={() => setCurrentUser(null)} user={currentUser} />
      }
    </div>
  );
};

export default UsersList;