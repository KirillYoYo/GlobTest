import React, {useEffect, useState} from 'react';
import IsLoginContext from "@src/IsLoginContext";

const IsLoginProvider = ({children}: {children: string | JSX.Element}) => {

  const storageLogin = window.localStorage.getItem('login')
  const [isLogin, setIsLogin] = useState(storageLogin && JSON.parse(storageLogin));

  useEffect(() => {
    if (isLogin) {
      window.localStorage.setItem('login', 'true')
    } else {
      window.localStorage.removeItem('login')
    }
  }, [isLogin])

  return (
    <IsLoginContext.Provider value = {{isLogin, setIsLogin}}>
      {children}
    </IsLoginContext.Provider>
  );
};

export default IsLoginProvider;