import React from 'react';
import './play.css'

export function ButtonJavaScript() {
const [buttonPushed, setButtonPushed] = React.useState("PenguinButton.png");
const [globalCountInt, setGlobalCountInt] = React.useState(Number(localStorage.getItem("globalCountStorage")));
const [userCountInt, setUserCountInt] = React.useState(Number(localStorage.getItem("UserCount" + localStorage.getItem("userName"))));
React.useEffect(() => {
    const myInterval = setInterval(() => {passiveIncreaseToGlobal()}, 200);
    return () => clearInterval(myInterval);
}, []);

function pushButton(){
    setButtonPushed("PenguinButtonPushed.png");
    setGlobalCountInt(Number(localStorage.getItem("globalCountStorage")));
    setUserCountInt(userCountInt+1);
    localStorage.setItem("globalCountStorage",Number(localStorage.getItem("globalCountStorage")) + 1);
    localStorage.setItem("UserCount" + localStorage.getItem("userName"), userCountInt + 1)
    saveScore();
}
function releaseButton(){
    setButtonPushed("PenguinButton.png");
}
function mouseLeftButton()
{
    setButtonPushed("PenguinButton.png");
}
function passiveIncreaseToGlobal()
{
    setGlobalCountInt(Number(localStorage.getItem("globalCountStorage")));
    localStorage.setItem("globalCountStorage",Number(localStorage.getItem("globalCountStorage")) + 1);
}
async function saveScore() {
    const date = new Date().toLocaleDateString();
    const newScore = { name: localStorage.getItem("userName"), score: localStorage.getItem("UserCount" + localStorage.getItem("userName")), date: date };

    // Let other players know the game has concluded
    //GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);

    updateScoresLocal(newScore);
  }

function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
        if (newScore.name == prevScore.name)
        {
           scores.splice(i,1);
        }
    //   if (newScore.score > prevScore.score) {
    //     scores.splice(i, 0, newScore);
    //     found = true;
    //     break;
    //   }
    }
    scores.push(newScore);

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  return (

    <main>
            <input type="image" src={buttonPushed} id="TheButton" onMouseDown={() => pushButton()} onMouseUp={() => releaseButton()} onMouseLeave={()=> mouseLeftButton()}/>
            <span id="ClickTracker">
                <div id="GlobalClicksDiv">
                    <a id="GlobalClicksText">(simulated) Global clicks:</a>
                    <br />
                    <input type="text" id="GlobalCount" value={globalCountInt} disabled />
                </div>
                <div id="YourClicksDiv">
                    <a id="YourClicksText">Your clicks:</a>
                    <br />
                    <input type="text" id="YourCount" value={userCountInt} disabled />
                </div>
            </span>
            <hr />
        </main>

  );
}