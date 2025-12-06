//radnomizer
import shuffleArray from "./ArrayShuffel"
export default function randomizer(fruits,clickFruit,mode){

    //take in fruits and enxure one has not been clicked on 

    let amount={7:3,10:4,15:5,25:7}
    let shown=new Set()
    let j=0
    if(clickFruit.size>=fruits.length){
        return []
    }
    while(shown.size<amount[mode]){
        //ensure first option is valid 

        if(shown.size==0)
        {
            let i=0
        while(clickFruit.has(fruits[i])){
            i++
            continue
        }
        shown.add(fruits[i])
        }
    if(!shown.has(fruits[j])&&j<fruits.length){shown.add(fruits[j])}
            j = (j + 1) % fruits.length;
    }
    let shuffled=shuffleArray(Array.from(shown))
    return shuffled
}