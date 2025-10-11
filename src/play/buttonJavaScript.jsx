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

  return (

    <main>
            <input type="image" src={buttonPushed} id="TheButton" onMouseDown={() => pushButton()} onMouseUp={() => releaseButton()} onMouseLeave={()=> mouseLeftButton()}/>
            <span id="ClickTracker">
                <div id="GlobalClicksDiv">
                    <a id="GlobalClicksText">Global clicks:</a>
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