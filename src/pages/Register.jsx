import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router'; // Asegúrate de importar desde 'react-router-dom'
import { FaReact } from "react-icons/fa";
import Input from '../components/UI/Input.jsx';
import useUser from '../hooks/useUser.js';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [handlerOnsubmit,error] = useUser("register");
  

  return (
    <div className='w-full flex flex-col gap-5 justify-start items-center h-[90vh]'>
      <FaReact className='text-[#fff] text-8xl' />
      <span className='text-[#fff] text-2xl'>Sign in to AsyncTask</span>
      <form onSubmit={handleSubmit(handlerOnsubmit)} className='bg-[#201E24] flex justify-start border-2 items-start py-5 px-5 flex-col gap-5 rounded-lg border-[#bfdbff2f] w-[18rem] min-h-[22rem]'>
        <Input
          nameInput="name"
          placeholder="user123"
          label="UserName"
          type="text"
          register={{...register("name", {
            minLength: {
              value: 4,
              message: "The username must have at least 4 characters."
            },
            maxLength: {
              value: 15,
              message: "The username can only have up to 15 characters."
            },
            pattern: {
              value: /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑüÜ]+$/,
              message: "Only numbers and letters are allowed."
            }
          })
          }}
          errorValue={errors.name?.message}
        />
        <Input
          nameInput="email"
          placeholder="example@gmail.com"
          label="Email address"
          type="email"
          register={{...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "The email is not valid"
            }
          })}}
          errorValue={errors.email?.message}
        />
        <Input
          nameInput="password"
          placeholder="********"
          label="Password"
          type="password"
          register={{...register('password', {
            minLength: {
              value: 8,
              message: "The password must have at least 8 characters."
            }
          })}}
          errorValue={errors.password?.message}
        />
        <button type='submit' className='w-full text-center bg-[#00A524] text-[#fff] py-1 rounded-md'>Create account</button>
        <span className='h-5 text-[#f00] w-full text-center font-light'>
          {error}
        </span>
      </form>


      <div className='flex justify-center border-2 items-center py-5 px-5 flex-col gap-5 rounded-lg border-[#bfdbff2f] w-[18rem] min-h-[5rem]'>
        <span className='flex gap-2'>
          <span className='text-[#fff] text-sm'>Already have accounr?</span>
          <Link className='text-[#0033FF] text-sm' to={'/login'}>Sign in</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
