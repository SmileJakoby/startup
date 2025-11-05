
import React from 'react';

import './leaderboard.css';

export function Leaderboard() {
  const [scores, setScores] = React.useState([]);
  const [myRank, setMyRank] = React.useState(0);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
    var rankCalculateArray = JSON.parse(scoresText)
    if (rankCalculateArray) 
    {
        rankCalculateArray.sort((a,b) => b.score - a.score)
        for (const [i, score] of rankCalculateArray.entries()) {
        if (score.username == localStorage.getItem("userName"))
        {
            setMyRank(i+1);
        }
        }
    } 
    else 
    {
    setMyRank(10);
    }
  }, []);
//   React.useEffect(() => {
//     if (scores.length) 
//     {
//         for (const [i, score] of scores.entries()) {
//         if (score.name == localStorage.getItem("userName"))
//         {
//             setMyRank(i+1);
//         }
//         }
//     } 
//     else 
//     {
//     setMyRank(10);
//     }
//   }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  scores.sort((a,b) => b.score - a.score)
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{score.username}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
   
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main>
        <h1>Your rank: #{myRank}</h1>
        <table className="table table-info table-striped" id="LeaderBoardTable">
            <thead className="table-dark" id="LeardBoardHead">
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody id='scores'>{scoreRows}</tbody>
        </table>
    </main>
  );
}
