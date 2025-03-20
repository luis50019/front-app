import React,{ useEffect } from 'react';
import { useContextApp } from '../context/ContextApp';
import { useNavigate } from 'react-router';

const useUser = (nameOption = 'login')=>{
  const {error,userRegister,loginUser} = useContextApp();
  const navigate = useNavigate();

  const handlerOnSubmit = async(data)=>{
    try {
      const res = nameOption == 'login'?await loginUser(data):await userRegister(data);
      if(res){
        navigate('/home')
      }
    } catch (error) {
      
    }
  }

  return [handlerOnSubmit,error]
}

export default useUser;