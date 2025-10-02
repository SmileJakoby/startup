import React from 'react';
import './leaderboard.css';

export function Leaderboard() {
  return (
    <main>
            <h1>Your rank: #600</h1>
            <table className="table table-info table-striped" id="LeaderBoardTable">
                <thead className="table-dark" id="LeardBoardHead">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Some guy's autoclicker</td>
                    <td>900,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Homer Simpson's Bird</td>
                    <td>20,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SmileJakoby</td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Your Mom</td>
                    <td>5,000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>My evil twin</td>
                    <td>3,000</td>
                </tr>
                <tr>
                    <td>600</td>
                    <td>You</td>
                    <td>123</td>
                </tr>
                </tbody>
            </table>
        </main>

  );
}