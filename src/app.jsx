import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <body>
<header className="Navigation">
            <form method="get" action="index.html">
                <button type="submit" className = "SideButton" id="LogoutButton">Logout</button>
            </form>
            <form method="get" action="index.html">
                <button type="submit" className = "SideButton" id="LoginButton">Login</button>
            </form>
            <form method="get" action="play.html">
                <button type="submit" className = "SideButton" id="PlayButton">Play</button>
            </form>
            <form method="get" action="leaderboard.html">
                <button type="submit" className = "SideButton" id="LeaderboardsButton">Leaderboards</button>
            </form>
            <form method="get" action="about.html">
                <button type="submit" className = "SideButton" id="AboutButton">About</button>
            </form>
        </header>

<main>App components go here</main>

<footer>
<a id="NameText">Jacob Skarda</a>
<br id="RandomBR"/>
<a id="GitLink" href="https://github.com/SmileJakoby/startup">Where the sun doesn't shine (My Github Repo)</a>
</footer>
</body>
}
