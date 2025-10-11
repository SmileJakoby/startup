import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
        <img src="TheGlobalClickLogo.png" id = "TheLogo" />
        {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
            <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            />
        )}
    </main>
  );
}