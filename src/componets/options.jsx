


export default function Options({setMode,setClickFruit,setCurrentScore}){
    let modes={"Easy":7,"Medium":10,"Hard":15,"Impossible":25}
    function handleClickMode(setting){
        setMode(setting)
            setClickFruit(()=>new Set())
            setCurrentScore(0)
    }

 function startOver(){
                setClickFruit(()=>new Set())
            setCurrentScore(0)

 }
    return(
        <div className="options">
            <div className="mode">
                Set Mode: 
           {Object.keys(modes).map((setting)=>(
                <button className="modeButtons" key={setting} onClick={()=>handleClickMode(modes[setting])} >{setting}
                </button>


           ))}
      <button onClick={()=>startOver()} className="restart">Restart</button>

            </div>

        </div>
    )
}