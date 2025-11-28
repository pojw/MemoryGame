//Main Page
import {  useEffect , useState } from "react"


export default function CharacterList(){
    const [people, setPeople]=useState([])


useEffect(()=>{
    async function fetchPeople(){
        try{
            let response= await fetch("https://api.api-onepiece.com/v2/fruits/en")
            let data=await response.json()
            
            console.log("Api results", data)
            setPeople(data)
        }
        catch(error){
            console.log("Error Fetching " ,error)
        }

    }
    fetchPeople();
},[])

return (
   <div>
    {people.filter((value)=>value.id===1).map((filtered)=>(
        <div>  <div>{filtered.name}</div>
        <img src={filtered.filename}></img></div>
      
    ))
    }


   </div>


)
}