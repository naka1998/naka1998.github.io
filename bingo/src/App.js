import React from 'react';
import './App.css';

class Square extends React.Component {
  render(props) {
    return (
      <div className="square">
        {props.value}
      </div>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      <div className="col" >
        <Square /><Square /><Square /><Square /><Square />
      </div>
    );
  }
}

function makeArray() {
  let bingoArray = [];
  for (i = 0; i <= 4; i++) {
    let colArray = [];
    for (j = min; j <= max; j++) {
      while (true) {
        let tmp = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randoms.includes(tmp)) {
          randoms.push(tmp);
          break;
        }
      }
    }
    bingoArray += colArray;
  }

}


class Bingo extends React.Component {
  constructor() {
    super();
    this.state = {
      opened: Array(25).fill(false),
    };
  }
  render() {
    return (
      <div id="wrap">
        <p className="titleStyle">B</p><p className="titleStyle">I</p><p className="titleStyle">N</p><p className="titleStyle">G</p><p className="titleStyle">O</p>
        <Column /><Column /><Column /><Column /><Column />
      </div>
    );
  }
}
export default Bingo;
