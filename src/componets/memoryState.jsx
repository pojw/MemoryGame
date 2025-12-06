//this will be the function to add a clickd card to storage

 export default function AddMemory(clickFruit,setClickFruit,newFruit,currentScore,setCurrentScore,highScore,setHighScore,fruits,){
    //check if fruit already click
    if(clickFruit.has(newFruit)){

   
            let newGame=new Set()
            setClickFruit(newGame)
              if (currentScore > highScore) {
            setHighScore(currentScore);
        }
                
                setCurrentScore(0);
        return "Already Clicked"

    }
    else{
    let clone= new Set([...clickFruit,newFruit])
     console.log(fruits)
        let score=currentScore+1
     setClickFruit(clone)
        if(clone.size>=fruits.length){
            if (score > highScore) {
            setHighScore(score);
        }

                setCurrentScore(0);
            return "win"
        }
        setCurrentScore(score)

        return "added"
    }
}