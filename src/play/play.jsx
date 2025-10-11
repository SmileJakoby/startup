import React from 'react';
import './play.css';

import { ButtonJavaScript } from './buttonJavaScript';

export function Play(props) {
  return (
    <main>
      <ButtonJavaScript userName={props.userName} />
    </main>
  );
}