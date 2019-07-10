// test file
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

class App extends React.Component {
  render() {
    const ary = makeArray();
    console.log(ary);
    const buttons0 = ary[0].map((value) => <button className="buttonCol">{value}</button>);
    const buttons1 = ary[1].map((value) => <button className="buttonCol">{value}</button>);
    const buttons2 = ary[2].map((value) => <button className="buttonCol">{value}</button>);
    const buttons3 = ary[3].map((value) => <button className="buttonCol">{value}</button>);
    const buttons4 = ary[4].map((value) => <button className="buttonCol">{value}</button>);

    return (
      <div id="wrap">
        <div>{buttons0}</div>
        <div>{buttons1}</div>
        <div>{buttons2}</div>
        <div>{buttons3}</div>
        <div>{buttons4}</div>
      </div>
    );
  }
}
export default App;