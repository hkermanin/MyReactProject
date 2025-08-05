function List(props){
  return (
    <div className="list" style={{backgroundColor:props.course.completed===true? 'green':'white'}}>
      <h2>{props.course.course}</h2>
       <button onClick={()=>props.delList(props.i)}>X</button>
      <button onClick={()=>props.completed(props.i)}>Complited</button>
     </div>
  )
}

export default List