import React from 'react';
import './play.css'
import { GameEvent, GameNotifier } from './gameNotifier';

export function ButtonJavaScript() {
const [buttonPushed, setButtonPushed] = React.useState("PenguinButton.png");
const [globalCountInt, setGlobalCountInt] = React.useState(Number(localStorage.getItem("globalCountStorage")));
const [userCountInt, setUserCountInt] = React.useState(Number(localStorage.getItem("UserCount" + localStorage.getItem("userName"))));
const [displayError, setDisplayError] = React.useState(null);



const [events, setEvent] = React.useState([]);

React.useEffect(() => {
  GameNotifier.addHandler(handleGameEvent);

  return () => {
    GameNotifier.removeHandler(handleGameEvent);
  };
});

function handleGameEvent(event) {
  if (event.type === GameEvent.ReceiveGlobalScore) {
      setGlobalCountInt(Number(event.value));
      localStorage.setItem("globalCountStorage",globalCountInt);
  }
}

function displayGlobalCount() {
  const messageArray = [];
  for (const [i, event] of events.entries()) {
    let message = 'unknown';
    if (event.type === GameEvent.End) {
      message = `scored ${event.value.score}`;
    } else if (event.type === GameEvent.Start) {
      message = `started a new game`;
    } else if (event.type === GameEvent.System) {
      message = event.value.msg;
    }

    messageArray.push(
      <div key={i} className='event'>
        <span className={'player-event'}>{event.from.split('@')[0]}</span>
        {message}
      </div>
    );
  }
  return messageArray;
}

React.useEffect(() => {

    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        for (const [i, score] of scores.entries()) {
            if (score.username == localStorage.getItem("userName"))
            {
                setUserCountInt(score.score)
            }
        }
      });

    //const myInterval = setInterval(() => {passiveIncreaseToGlobal()}, 200);
    //return () => clearInterval(myInterval);
}, []);

function pushButton(){
    setButtonPushed("PenguinButtonPushed.png");
    //setGlobalCountInt(Number(localStorage.getItem("globalCountStorage")));
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
    const newScore = { username: localStorage.getItem("userName"), score: localStorage.getItem("UserCount" + localStorage.getItem("userName")), date: date };

    // Let other players know the game has concluded
    //GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
    if (response?.status === 200) {
        updateScoresLocal(newScore);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }

  }

function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
        if (newScore.username == prevScore.username)
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

    //if (scores.length > 10) {
    //  scores.length = 10;
    //}

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
        <h1>
        {displayError}
        </h1>
    </main>

  );
}