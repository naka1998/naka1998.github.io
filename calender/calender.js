//  必要なもの、現在の年・月・Ⅰ日の曜日・月末何日か、その曜日
const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const nowDay = nowDate.getDate();
const nowYoubi = nowDate.getDay();
console.log(`${nowYear}/${nowMonth}/${nowDay}/${nowYoubi}`);
document.getElementById("year").innerHTML = nowYear;
//  1日の曜日求める
const firstDate = new Date(nowYear, nowMonth - 1);
const firstYoubi = firstDate.getDay();
console.log(firstYoubi);
//  月が何日まであるか(うるう年は後で作る)
let lastDay;
switch (nowMonth) {
  case 3:
  case 5:
  case 7:
  case 10:
  case 12:
    lastDay = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    lastDay = 30;
    break;
  case 2:
    lastDay = 28;
    break;
  default:
    console.log("error");
    break;
}
console.log(lastDay);

//  表に追加していく
const target = document.getElementById("calender");
for (let j = 0; j < firstYoubi; j++) {
  let space = document.createElement("dt");
  space.innerHTML = "";
  target.appendChild(space);
}
for (let i = 1; i <= lastDay; i++) {
  let outputDay = document.createElement("dt");
  outputDay.innerHTML = i;
  target.appendChild(outputDay);
}
