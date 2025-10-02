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
<div className="body">
<header className="Navigation">
            <NavLink to="">
<form>
                <button type="submit" className="sideButton" id="LogoutButton">Logout</button>
</form>
            </NavLink>
            <NavLink to="">
		<form>
                <button type="submit" className="sideButton" id="LoginButton">Login</button>
		</form>
            </NavLink>
            <NavLink to="play">
<form>
                <button type="submit" className="sideButton" id="PlayButton">Play</button>
</form>
            </NavLink>
            <NavLink to="leaderboard">
<form>
                <button type="submit" className="sideButton" id="LeaderboardsButton">Leaderboards</button>
</form>
            </NavLink>
            <NavLink to="about">
<form>
                <button type="submit" className="sideButton" id="AboutButton">About</button>
</form>
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
</div>
</BrowserRouter>);
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}