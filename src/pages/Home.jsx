import React from "react"
import { RiBookReadFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

import CreateItemModal from "../components/modals/CreateItemModal";

// crear el modal para crear clases o crear notas

function Home() {
  
  return (
    <>
      <CreateItemModal/>
      <div className=" max-w-[100%] min-w-[100%] max-h-[100vh] min-h-[100vh] flex flex-col justify-start gap-20">
        <div className=" w-[100%] h-auto flex flex-col pl-[2rem] pt-[1rem]">
          <div className="flex min-w-[15rem] max-w-[20rem] justify-between items-end">
            <RiBookReadFill className="text-[#fff] text-lg"/>
            <FaPlus className="text-[#fff] text-lg"/>
          </div>
          <div className="min-w-[15rem] max-w-[20rem] justify-between items-end">

          </div>
        </div>
        <div className=" w-[100%] h-[auto] flex flex-col pl-[2rem] pt-[1rem]">
          <div className="flex min-w-[15rem] max-w-[20rem] justify-between items-end">
            <CgNotes className="text-[#fff] text-lg"/>
            <FaPlus className="text-[#fff] text-lg"/>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
