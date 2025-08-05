import {useState} from "react";

import "./App.css";
import List from "./list";

export default function App() {

  const [courselist, setCourseList] = useState([]);
  const [courseInput, setCourseInput] = useState({});

  function addCourse(){
    setCourseList([...courselist,courseInput]);
  } 

  function delList(i){
    setCourseList(courselist.filter((course, index) => index !== i));
  }

  function completed(i){
    const newList = courselist.map((course, index) => {
      if(index === i){
        return {...course,completed:!course.completed};
      }else{
        return course;
      }
    })

    setCourseList(newList);
  }

  return (
   <div className="app">
     
     <div className="add">
       <input onChange={(e)=>setCourseInput({course: e.target.value, completed:false})} type="text"/>
        <button onClick={addCourse}>Add</button>
     </div>

     {courselist.map((course,i) =>{
      return(
        <List key={i} completed={completed} delList={delList} course={course} i={i} />
      )
     })}

     
     
   </div>
  );
}
