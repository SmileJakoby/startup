import React from 'react';
import './play.css';

export function Play() {
  return (
    <main>
            <input type="image" src="PenguinButton.png" id="TheButton"/>
            <span id="ClickTracker">
                <div id="GlobalClicksDiv">
                    <a id="GlobalClicksText">Global clicks:</a>
                    <br />
                    <input type="text" id="GlobalCount" value="999,999" disabled />
                </div>
                <div id="YourClicksDiv">
                    <a id="YourClicksText">Your clicks:</a>
                    <br />
                    <input type="text" id="YourCount" value="123" disabled />
                </div>
                <div>
                    <p>I am aware that clicking this button in certain aspect ratios makes the rest of the body jump around. This is due to the current implementation being done in CSS, which simply resizes the image and adjusts the margins. When I do the Javascript for this page, I will reimplement the button by changing the image.</p>
                </div>
            </span>
            <hr />
        </main>

  );
}