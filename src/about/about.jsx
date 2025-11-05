import React from 'react';
import './about.css';

export function About() {
  const [globalCount, setGlobalCount] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
    

    React.useEffect(() => {
      fetch('/api/globalcount')
        .then((response) => response.json())
        .then((globalCount) => {
          setGlobalCount(globalCount);
        });

    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}`;
        setImageUrl(apiUrl);
      })
      .catch();
    }, []);
  
  return (
    <main>
            <hr />
            <div id="picture" className="picture-box"><img width="400px" src={imageUrl} name="Obligatory3rdPartyCall" alt="random Image" /></div>
            <h1>
            The current global count is: {globalCount}
            </h1>
            <p>
            This project was done for my Web Development class at Brigham Young University.
            </p>
            <p>
            But, while you're here, how about you check out <a href="https://youtu.be/LPHquvNShAo">my game!</a> It is still a work in progress, and this trailer is outdated in many ways now, but it's estimated release date is Q3 2026.    
            </p>
        </main>
  );
}