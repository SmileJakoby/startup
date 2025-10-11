import React from 'react';

import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <form id="LoginForm" method="get" action="play">
                <div>
                    <h1>🐧Join the <del>cult</del> click🐧</h1>
                </div>
                <div>
                    <span className = "Emoji">🐧</span>
                    <input className= "LoginInput" type="text" onChange={(e) => setUserName(e.target.value)}placeholder="Email" />
                </div>
                <div>
                    <span className = "Emoji">🔒</span>
                    <input className= "LoginInput" type="password" onChange={(e) => setPassword(e.target.value)}placeholder="Password" />
                </div>
                <button type="submit" className = "FormButton" id = "FormLoginButton" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                <button type="submit" className = "FormButton" id = "FormRegisterButton" onClick={() => createUser()} disabled={!userName || !password}>Register</button>
            </form>
  )
}

