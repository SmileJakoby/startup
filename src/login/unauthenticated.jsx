import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    //<form id="LoginForm" method="get" action="play">
    <form id="LoginForm">
                <div>
                    <h1>🐧Join the <del>cult</del> click🐧</h1>
                    <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
                </div>
                <div>
                    <span className = "Emoji">🐧</span>
                    <input className= "LoginInput" type="text" onChange={(e) => setUserName(e.target.value)}placeholder="Email" />
                </div>
                <div>
                    <span className = "Emoji">🔒</span>
                    <input className= "LoginInput" type="password" onChange={(e) => setPassword(e.target.value)}placeholder="Password" />
                </div>
                <button className = "FormButton" id = "FormLoginButton" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                <button className = "FormButton" id = "FormRegisterButton" onClick={() => createUser()} disabled={!userName || !password}>Register</button>
            </form>
          
  )
}

