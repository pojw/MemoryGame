//card layout

import AddMemory from "./memoryState"
export default function Card({name,filename,onClick
    }){


    return(
        <div className="card" onClick={onClick}>
            <img src ={filename}></img>
            <div> {name} </div>


        </div>
    )

}