


export default function Details({currentScore,highScore}){


    return(
        <div className="details"> 

        <div className="score">
            <div className="scoreDetail">
            <div>Current Score</div>
<div> {currentScore}</div>

            </div>
            <div className="scoreDetail">
            <div>Highest Score </div>
<div>{highScore}</div>

            </div>
        </div>

        </div>
    )


}