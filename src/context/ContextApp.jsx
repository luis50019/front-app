import React, { createContext, useContext, useEffect, useState } from "react";
import { login, logout, registerUser, profile,validateSession } from '../api/user.js';
import { useNavigate } from "react-router";

const contextApp = createContext();
export const useContextApp = () => {
  const context = useContext(contextApp);
  if (!context) return null;
  return context;
}
export default function ContextApp({ children }) {

  const [userAuth, setUserAuth] = useState(false);
  const [error, setError] = useState(null);
  const [infoUser, setInfoUser] = useState(null);
  const loginUser = async (dataUser) => {
    try {
      const res = await login(dataUser);
      if (res) {
        setInfoUser(res.data);
        setUserAuth(true);
        return res.data;
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  const userRegister = async (dataUser) => {
    try {
      console.log(dataUser)
      const res = await registerUser(dataUser);
      if (res) {
        setInfoUser(res.data);
        setUserAuth(true);
        return res.data;
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  const logOutUser = async () => {
    try {
      const res = await logout();
      if (res.status == 200) {
        setInfoUser(null);
        setUserAuth(false);
        return true;
      }
    } catch (error) {
      console.log(error)

    }
  }

  const getInfoUser = async () => {
    try {
      const res = await profile();
    } catch (e) {
      setError(e)
    }
  }

  const validateToken = async ()=>{
    try {
      const res = await validateSession();
      if(res.status == 200){
        setUserAuth(true);
      }else{
        setUserAuth(false)
      }
    } catch (error) {
      setUserAuth(false);
      console.log(error)
    }
  }

  useEffect(()=>{
    async function checkLogin(){
      try{
        const res = await validateSession();
        if(res.status !== 200){
          setUserAuth(false);
          return;
        }
        setUserAuth(true)
      }catch(e){
        setUserAuth(false);
        setInfoUser(null);
      }
      return ;
    }
    checkLogin()
  },[])


  return (
    <contextApp.Provider value={{ userAuth,userRegister,logOutUser, error, infoUser, loginUser, getInfoUser,validateToken }}>
      {children}
    </contextApp.Provider>
  )

}


