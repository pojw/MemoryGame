//Main Page
import {  useEffect , useState } from "react"
import Card from "./card"
import Details from "./details"
export default function CharacterList(){
    const [people, setPeople]=useState([])
    const [type,setType]=useState('Paramecia')
    let[ click,setClick] =useState([])
    let [mode, setMode] = useState(8)
    let [fruits,setFruits]= useState([])
    let [currentScore, setCurrentScore]=useState(0)
    let [highScore,setHighScore]=useState(0)




useEffect(()=>{
    async function fetchPeople(){
        try{
            let response= await fetch("https://api.api-onepiece.com/v2/fruits/en")
            let data=await response.json()
            let index=0
            let newFruits=[]
            while(newFruits.length<mode){
                if(data[index].type==type){
                    let card={
                        name:data[index].name,
                        id:data[index].id,
                        filename:data[index].filename,
                        type:data[index].type
                    }
                                        newFruits.push(card)

                }
                              index+=1
                }
            
            console.log("Api results", data)
            console.log(",", newFruits)
            setFruits(newFruits)
        }
        catch(error){
            console.log("Error Fetching " ,error)
        }

    }
    fetchPeople();
},[type,mode])


return (
<div className="container">
    <Details currentScore={currentScore} highScore={highScore}></Details>
    <div  className="cardSection"></div>
    <div className="options"></div>

</div>
)
}