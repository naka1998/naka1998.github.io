import React from 'react';
import "./App.css"

function makeArray() {
  let bingoArray = [];
  for (let i = 1; i <= 5; i++) {
    let colArray = [];
    const max = 15 * i + 1;
    const min = 15 * (i - 1) + 1;
    for (let j = 1; j <= 5; j++) {
      while (true) {
        let tmp = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!colArray.includes(tmp)) {
          colArray.push(tmp);
          break;
        }
      }
    }
    bingoArray.push(colArray);
  }
  bingoArray[2][2] = null;
  return bingoArray;
}

function Square(props) {
  return (
    <button onClick={() => props.onClick}>{props.value}</button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} value={this.state.numArray[i]} />;
  }
  render() {
    console.log(this.state.numArray);
    return (
      <div id="board">
      </div>
    );
  }

}
class Bingo extends React.Component {
  constructor() {
    super();
    this.state = {
      opened: [
        Array(5).fill(false),
        Array(5).fill(false),
        [false, false, true, false, false],
        Array(5).fill(false),
        Array(5).fill(false),
      ],
      numArray: makeArray(),
    };
  }
  render() {
    console.log(this.state.numArray);
    console.log(this.state.opened[0][0]);
    return (
      <div id="wrap" >
        <Board />
      </div>
    );
  }
}
export default Bingo;