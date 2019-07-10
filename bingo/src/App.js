import React from 'react';
import "./App.css"

function Square(props) {
  return (
    <button className={props.isOpened ? "openedButton" : ""} key={props.j} onClick={() => props.onClick()}>{props.value}</button>
  );
}

class Board extends React.Component {
  renderSquare(i, j) {
    return <Square isOpened={this.props.opened[i][j]} key={i} j={this.j} value={this.props.numArray[i][j]} onClick={() => this.props.onClick(i, j)} />;
  }
  render() {
    return (
      <div id="board">
        {
          [0, 1, 2, 3, 4].map((j) => {
            return (
              <div className="column">
                {
                  [0, 1, 2, 3, 4].map((i) =>
                    this.renderSquare(i, j))
                }
              </div>
            )
          })
        }
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
  handleClick(i, j) {
    const isOpened = this.state.opened.slice();
    console.log(`(${i},${j}) is clicked`);
    isOpened[i][j] = true;
    this.setState({
      opend: isOpened,
    });
    console.log(this.state.opened);
  };
  render() {
    return (
      <div id="wrap" >
        <section id="title"><p>B</p><p>I</p><p>N</p><p>G</p><p>O</p></section>
        <Board opened={this.state.opened} numArray={this.state.numArray} onClick={(i, j) => this.handleClick(i, j)} />
      </div>
    );
  }
}


function makeArray() {
  let bingoArray = [];
  for (let i = 1; i <= 5; i++) {
    let colArray = [];
    const max = 15 * i;
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
export default Bingo;