import axios from "axios";
import { useQuery } from "react-query";

function Cat(){

const {data : catData, isLoading, isError, error, refetch} = useQuery('cat', ()=>{
return axios.get('https://catfact.ninja/fact').then((res)=>res.data)
  })
  
  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <h1>Error: {error.message}</h1>
  
  return(
    <div>
      <h1>Cat Fact</h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>New fact</button>
    </div>)
}

export default Cat;