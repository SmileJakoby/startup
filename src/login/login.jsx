import React from 'react';

export function Login() {
  return (
    <main>
            <img src="TheGlobalClickLogo.png" id = "TheLogo">
            <form id="LoginForm" method="get" action="play.html">
                <div>
                    <h1>🐧Join the <del>cult</del> click🐧</h1>
                </div>
                <div>
                    <span className = "Emoji">🐧</span>
                    <input className= "LoginInput" type="text" placeholder="Email" />
                </div>
                <div>
                    <span className = "Emoji">🔒</span>
                    <input className= "LoginInput" type="password" placeholder="Password" />
                </div>
                <button type="submit" className = "FormButton" id = "FormLoginButton">Login</button>
                <button type="submit" className = "FormButton" id = "FormRegisterButton">Register</button>
            </form>
        </main>

  );
}