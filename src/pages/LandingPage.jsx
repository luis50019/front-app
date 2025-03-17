import React,{useEffect} from "react";
import { useNavigate } from "react-router";
import { useContextApp } from "../context/ContextApp";
function LandingPage() {
  const { userAuth } = useContextApp();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userAuth)
    if (userAuth) {
      navigate('/home')
    }
  }, [userAuth])

  return (<>
    <h1 className="text-[#fff]">PAgina de promocion del aplicacion</h1>
  </>);
}

export default LandingPage;