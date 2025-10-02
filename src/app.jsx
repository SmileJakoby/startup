import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Leaderboard } from './leaderboard/leaderboard';
import { About } from './about/about';

export default function App() {
  return (<BrowserRouter>
<body>
<header className="Navigation">
            <NavLink to="">
                <button type="submit" className="SideButton" id="LogoutButton">Logout</button>
            </NavLink>
            <NavLink to="">
                <button type="submit" className="SideButton" id="LoginButton">Login</button>
            </NavLink>
            <NavLink to="play">
                <button type="submit" className="SideButton" id="PlayButton">Play</button>
            </NavLink>
            <NavLink to="leaderboard">
                <button type="submit" className="SideButton" id="LeaderboardsButton">Leaderboards</button>
            </NavLink>
            <NavLink to="about">
                <button type="submit" className="SideButton" id="AboutButton">About</button>
            </NavLink>
        </header>

<Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/play' element={<Play />} />
  <Route path='/leaderboard' element={<Leaderboard />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>

<footer>
<a id="NameText">Jacob Skarda</a>
<br id="RandomBR"/>
<a id="GitLink" href="https://github.com/SmileJakoby/startup">Where the sun doesn't shine (My Github Repo)</a>
</footer>
</body>
</BrowserRouter>);
}
