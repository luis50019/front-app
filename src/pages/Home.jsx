import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { login, registerUser, profile, logout } from '../api/user.js';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [option, setOption] = useState();

  useEffect(()=>{
    const token = Cookies.get('access_token');
    if(token){
      setToken(token);
      navigate('/profile');
    }
  },[])

  const handlerOnsubmit = async (data) => {
    try {
      let res;
      setIsAuth(false);
      console.log(data)
      if (data.name === '' || data.email == '' || data.password == '') {
        setToken("los datos estan vacios")
        return;
      }


      if (option == "login") {
        res = await login(data);
        if (res) {

          setData(res.data);
          setIsAuth(true);
        }
      }

      if (option == "register") {
        res = await registerUser(data);
        if (res) {
          setData(res.data);
          setIsAuth(true);
        }
      }

      if (option == "logout") {
        res = await logout();
        if (res) {
          setData(res.data);
          setIsAuth(true);
        }
      }

    } catch (e) {
      console.log(e)
      console.log("ocurrio un problema")
    } finally {
      const token = Cookies.get('access_token');
      if (token) {
        setToken(token)
        navigate('/profile')
      }
    }
  }


  return (
    <>
      <div className='w-full flex flex-col justify-center items-center h-[90vh]'>
        <form onSubmit={handleSubmit(handlerOnsubmit)} className='flex justify-center items-center flex-col gap-5 rounded-lg w-[60%] h-[50%]'>
          <div className='flex flex-col items-start'>
            <label htmlFor="name" className='boder-2 capitalize'>usuario</label>
            <input {...register('name', { required: true })} type="text" name='name' className='border-2 rounded-lg' />
          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor="email" className='boder-2 capitalize'>email</label>
            <input {...register('email', { required: true })} type="email" name='email' className='border-2 rounded-lg' />
          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor="password" className='boder-2 capitalize'>password</label>
            <input {...register('password', { required: true })} type="password" name='password' className='border-2 rounded-lg' />
          </div>
          <div className="flex gap-5">
            <button type="submit" onClick={() => setOption("login")} className="bg-[#3f961c] text-lg px-5 py-5">Login</button>
            <button type="submit" onClick={() => setOption("register")} className="bg-[#0788c4] text-lg px-5 py-5">Register</button>
            <button type="submit" onClick={() => setOption("logout")} className="bg-[#da0202] text-lg px-5 py-5">Logout</button>
          </div>
        </form>

        <div className="border-2 flex flex-col gap-10">
          {
            isAuth ? (<span>inicio de session correcto</span>) : (<span>no has iniciado session</span>)
          }
          {
            token && (<span>toke: {token}</span>)
          }
        </div>

      </div>
    </>
  )
}

export default Home
