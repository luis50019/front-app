import React from "react";
import { FaReact } from "react-icons/fa";
import { useContextApp } from "../../context/ContextApp";
import { useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";

function NavBar() {
  const { userAuth, logOutUser } = useContextApp();
  const navigate = useNavigate();

  const handlerLogOut = async () => {
    try {
      const res = await logOutUser();
      if(res.statusCode == 200){
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex w-full h-[3rem] bg-transparent px-[2rem] py-[#2rem] items-center justify-between">
        {
          userAuth ? (<>

            <h1 onClick={() => navigate('/')} className="text-[#fff] font-extralight text-3xl">AsyncTasks</h1>
            <di className="w-50% flex justify-end items-center gap-4">
              <CiLogout onClick={handlerLogOut} className="text-[#ff0505] text-3xl" />
              <FaReact className="text-[#fff] text-3xl" />
            </di>
          </>) : (<>
            <h1 onClick={() => navigate('/')} className="text-[#fff] font-extralight text-3xl">AsyncTasks</h1>
            <div className="flex gap-5">
              <button onClick={() => navigate('/login')} className="text-[#00A524] font-bold">Login</button>
              <button onClick={() => navigate('/register')} className="text-[#fff]">Register</button>
            </div>
          </>)
        }

      </div>
    </>


  );
}

export default NavBar;