//Main Page
import {  useEffect , useState } from "react"
import Card from "./card"
import Details from "./details"
import Options from "./options"
import randomizer from "./randomizer"
import AddMemory from "./memoryState"
import shuffleArray from "./ArrayShuffel"

export default function CharacterList(){
  
    let [mode, setMode] = useState(7)
    let [fruits,setFruits]= useState([])
    let [currentScore, setCurrentScore]=useState(0)
    let [highScore,setHighScore]=useState(0)
    let [clickFruit,setClickFruit]=useState(()=>new Set())
    let[status,setStatus]=useState("")
const [cardDisplayed, setCardsDisplayed] = useState([])


function handleClickCard(fruit) {
    const result = AddMemory(
        clickFruit, setClickFruit,
        fruit,
        currentScore, setCurrentScore,
        highScore, setHighScore,fruits,setStatus
    );
        if (result==="Already Clicked"){
            setStatus("You Lost")
        }
     
        else{

        const updatedClickFruit = new Set([...clickFruit, fruit]);
            let newBatch=randomizer(fruits,updatedClickFruit,mode)
            if(newBatch.length==0){
setStatus("You WONNN")            }
            else{
                        setCardsDisplayed(newBatch);
                                        setStatus("")

            }

        }


    }

useEffect(()=>{
    async function fetchPeople(){
        try{
            let response= await fetch("https://api.api-onepiece.com/v2/fruits/en")
            let data=await response.json()
            let index=0
            let newFruits=[]
            const list = Array.from({ length: data.length }, (_, i) => i);
            list.shift()
            const shuffledList=shuffleArray(list)
            let position=0
            while(newFruits.length<mode && position<shuffledList.length){
                    if(data[index]&&data[index].filename!=="https://images.api-onepiece.com/fruits/"                    ){
                  let card={
                        name:data[index].name.split(",")[0],
                        id:data[index].id,
                        filename:data[index].filename,
                        type:data[index].type
                    }
                                        newFruits.push(card)

                  
                    }
                   

                position+=1
                    index=shuffledList[position]
                }
            
            console.log("Api results", data)
            console.log(",", newFruits)
  
            setFruits(newFruits)
       let newBatch=randomizer(newFruits,clickFruit,mode)
        setCardsDisplayed(newBatch);
            
        }
        catch(error){
            console.log("Error Fetching " ,error)
        }

    }
    fetchPeople();
},[mode])





return (
<div  className="container">
    <Details currentScore={currentScore} highScore={highScore}></Details>
<div className="cardSection">
<div className="info">
    {status.length ? status:"Currently " +currentScore+"/"+mode}
</div>
<div className="cards">

{cardDisplayed.map((fruit)=>(
    <Card 
    key={fruit.id}
    name={fruit.name}  
    filename={fruit.filename}
    currentScore={currentScore}
    highScore={highScore}
      clickFruit={clickFruit}
        setClickFruit={setClickFruit}
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
        fruits={fruit}
        mode={mode}
        onClick={()=>handleClickCard(fruit)}
    ></Card>
  
        )

)}
</div>
</div>
<Options mode={mode}
setMode={setMode}
setClickFruit={setClickFruit}
setCurrentScore={setCurrentScore}
></Options>

</div>
)
}