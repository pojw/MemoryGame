//card layout


export default function Card({name,url,onclick}){

    return(
        <div  onClick={onclick}>
            <img src ={url}></img>
            <div> {name} </div>


        </div>
    )

}