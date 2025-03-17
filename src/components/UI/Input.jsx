import React, { forwardRef } from "react";
import '../../styles/Input.css'

const Input = forwardRef(
  (
    { label, nameInput, placeholder, type, defualtvalue = "", register, errorValue },ref
  ) => {
    return (
      <div className='flex flex-col w-[100%] items-start'>
      <label htmlFor={nameInput} className='boder-2 capitalize text-[#fff] '>{label}</label>
      <input {...register} type={type} name={nameInput} placeholder={placeholder} className='input' />
      <span className="text-sm text-[#f00] normal-case font-light min-h-6 max-h-6">
        {errorValue && (errorValue)}
      </span>
    </div>
    );
  }
);

export default Input;
