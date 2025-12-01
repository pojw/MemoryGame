//Main Page
import {  useEffect , useState } from "react"
import Card from "./card"

export default function CharacterList(){
    const [people, setPeople]=useState([])
    const [type,setType]=useState('Paramecia')
    let[ click,setClick] =useState([])




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
},[type])

function handleClick(index){
    if(!click.includes(index)){
        alert("good")
        let clone=[...click,index]
        
        setClick(clone)
    }
}

return (
   <div>
    <div>{type}</div>
    {people.filter((value)=>value.type===type).slice(4,7).map((filtred)=>
  
    (
     <Card name={filtred.name} url={filtred.filename} onclick={()=>{handleClick(filtred.id)}}></Card>
    ))

    }


   </div>


)
}