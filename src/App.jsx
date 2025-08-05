import {useEffect, useState} from "react";

import "./App.css";

import  axios from "axios";

export default function App() {

  const [catFact, setCatFact] = useState("");

  useEffect(()=>{
    fetchData();
  },[])

  function fetchData(){
    axios.get('https://catfact.ninja/fact').then((res)=>{
      console.log(res.data)
      setCatFact(res.data.fact);
    })
  }


  return (
   <div className="app">
     
     <button onClick={fetchData}>Cat</button>

     <h1>{catFact}</h1>

     
   </div>
  );
}
