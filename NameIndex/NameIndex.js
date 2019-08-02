/*
保留した(2019/08/01)
*/

const button1 = document.getElementById("addButton");
const button2 = document.getElementById("sortButton");
const form = document.getElementById("nameindex");
const display = document.getElementById("displayArea");
const result = document.getElementById("result");
let nameAry = [];
let indexAry = [["ア"], ["カ"], ["サ"], ["タ"], ["ナ"], ["ハ"], ["マ"], ["ヤ"], ["ラ"], ["ワ"]];

const addFunc = () => {
  console.log(nameAry);
  nameAry.push(form.value);
  display.innerHTML = nameAry;
  form.value = "";
}
const sortFunc = () => {
  console.log("sort");
  let ary = nameAry.slice();
  ary.sort();
  result.innerHTML = ary;
}

button1.addEventListener("click", addFunc, false);
button2.addEventListener("click", sortFunc, false);

