import axios from "axios";
import "./App.css";
import {useState} from "react";

export default function App() {

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState({});

  function pAge(){
    axios.get(`http://api.agicy.io/?name=${name}`).then((response)=>{
      setPredictedAge(response.data);
      console.log(response.data);
    })
  }

  return (
   <div className="app">

     <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name"/>
     <button onClick={pAge}>Age</button>
     <h3>Your name is: {predictedAge?.name}</h3>
     <h3>Predicted Age: {predictedAge?.age}</h3>
    
     
   </div>
  );
}
