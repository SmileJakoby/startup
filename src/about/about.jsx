import React from 'react';
import './about.css';

export function About() {
  return (
    <main>
            <hr />
            <div id="picture" className="picture-box"><img width="400px" src="https://picsum.photos/300/200" name="Obligatory3rdPartyCall" alt="random Image" /></div>
            <p>
            This project was done for my Web Development class at Brigham Young University.
            </p>
            <p>
            But, while you're here, how about you check out my game! (Link broken I guess) It is still a work in progress, and this trailer is outdated in many ways now, but it's estimated release date is Q3 2026.    
            </p>
            <div id="quote">
                <div>"General, you know I've always got a card to play."</div>
                <div>- James Raynor</div>
            </div>
        </main>
  );
}