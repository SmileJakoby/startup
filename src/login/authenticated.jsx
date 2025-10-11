import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <div className='playerName'>Welcome {props.userName}</div>
      <button variant='primary' onClick={() => navigate('/play')}  className="sideButton" id="PlayButton">
        Play
      </button>
      <button variant='secondary' onClick={() => logout()} className="sideButton" id="LogoutButton">
        Logout
      </button>
    </div>
  );
}
