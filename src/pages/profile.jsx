import { useNavigate, useParams } from "react-router-dom";

function Profile(){
  const navigate = useNavigate();
  const {name} = useParams();
  return(
    <div>
      <h1>Profile of {name}</h1>
      <button onClick={()=>{navigate('/contact')}}>Click</button>
    </div>)
}

export  default Profile ;