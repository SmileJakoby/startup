import React from 'react';
import './play.css';

import { ButtonJavaScript } from './buttonJavaScript';

export function Play(props) {
  const [authCheckGood, setAuthCheckGood] = React.useState(['Checking Authorization...']);

  React.useEffect(() => {
    const response = fetch('/api/checkauth', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });
    if (response?.status === 401) {
      setAuthCheckGood('You are not authorized!!! You score will not be saved.');
    } else {
      setAuthCheckGood(response?.status);
    }
  }, []);

  return (
    <main>
      <ButtonJavaScript userName={props.userName} />
    </main>
  );
}