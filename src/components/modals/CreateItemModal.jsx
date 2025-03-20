import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

function CreateItemModal({ option = "class" }) {
  const {handleSubmit,register,formState: {errors}} = useForm();
  return (
    <div className="bg-[#00000065] flex items-center justify-center h-full absolute w-full">
      <form className="w-[20rem] bg-[#2E2C2C] h-[18rem] rounded-xl flex flex-col gap-5">
        <IoClose className="text-5xl text-[#f00]"/>
        <label className="text-3xl lg:text-4xl px-[1rem] text-[#fff]" htmlFor="nameItem">New {option}</label>
        <input type="text" name="nameItem" className="border-b-2 outline-none w-[85%] placeholder:text-[#d3d1d1] text-[#fff] border-[#fff] ml-[1rem] mt-[1rem]" 
          placeholder={option == "class"?"Name class":"name note"} {...register('item',{
            minLength:{
              value:4,
              message:"The name must have 4 letters"
            }
          })} />
        <span className="h-2 pl-[1rem] text-[#ff0000] font-normal">{errors.name?.message}</span>
        <div className="w-full pl-[1rem]">
        <button className="bg-[#00A524] w-[90%] h-8 rounded-xl text-[#fff] font-bold"> Create </button>
        </div>
      </form>
    </div>
  );
}

export default CreateItemModal;