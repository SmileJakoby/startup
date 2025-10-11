import React from 'react';
import './play.css';

import { ButtonJavaScript } from './buttonJavaScript';
import { CountJavaScript } from './countJavaScript';

export function Play(props) {
  return (
    <main>
      <ButtonJavaScript userName={props.userName} />
      <CountJavaScript userName={props.userName} />
    </main>
  );
}