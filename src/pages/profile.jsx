import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../context/profilecontext";

function Profile(){
  const {namechange, setName}=useContext(ProfileContext);
  const [inputName, setInputName] = useState();
  const navigate = useNavigate();
  const {name} = useParams();
  return(
    <div>
      <h1>Profile of {name}</h1>
      <button onClick={()=>{navigate('/contact')}}>Click</button>
      <br/><br/>
      <input onChange={(e)=>setInputName(e.target.value)}/>
      <button onClick={()=>setName(inputName)}>Change</button>
    </div>)
}

export  default Profile ;