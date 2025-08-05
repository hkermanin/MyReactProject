import axios from "axios";
import { useState } from "react";
import "./App.css";

export default function App() {

  const [excuse, setExcuse] = useState("");

  function getExcuse(e){
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${e}`).then((res) =>{
      console.log(res.data[0].excuse);
      setExcuse(res.data[0].excuse);
    })
  }


  return (
   <div className="app">

    <h1>Generate an excuse</h1>
    <button onClick={()=>getExcuse('party')}>Party</button>
    <button onClick={()=>getExcuse('family')}>Family</button>
    <button onClick={()=>getExcuse('office')}>Office</button>
    <h1>{excuse}</h1>
   </div>
  );
}
