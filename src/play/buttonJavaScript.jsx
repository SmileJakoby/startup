import React from 'react';
import './play.css'

export function ButtonJavaScript() {
const [buttonPushed, setButtonPushed] = React.useState("PenguinButton.png");
const [globalCountInt, setGlobalCountInt] = React.useState(Number(localStorage.getItem("globalCountStorage")));
const [userCountInt, setUserCountInt] = React.useState(Number(localStorage.getItem("UserCount" + localStorage.getItem("userName"))));
function pushButton(){
    setButtonPushed("PenguinButtonPushed.png");
    setGlobalCountInt(globalCountInt + 1);
    setUserCountInt(userCountInt+1);
    localStorage.setItem("globalCountStorage",globalCountInt + 1);
    localStorage.setItem("UserCount" + localStorage.getItem("userName"), userCountInt + 1)
}
function releaseButton(){
    setButtonPushed("PenguinButton.png");
}
function mouseLeftButton()
{
    setButtonPushed("PenguinButton.png");
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