const dateary = getCurrentDate();
console.log(dateary);
// 年・月を出力
document.getElementById("year_month").innerHTML = `${dateary[0]} ${
  dateary[1]
}月`;
initForm();
getCalender();
//  ボタン押されたときに入力された年月にカレンダーを変更
const button = document.getElementById("reflect");
button.addEventListener(
  "click",
  () => {
    const getYear = document.getElementById("yearForm").value;
    const getMonth = document.getElementById("monthForm").value;
    getCalender(getYear, getMonth);
  },
  false
);
//  dateary=[年,月,日,曜日]
function getCurrentDate() {
  const nowDate = new Date();
  let ary = [
    nowDate.getFullYear(),
    nowDate.getMonth() + 1,
    nowDate.getDate(),
    nowDate.getDay()
  ];
  return ary;
}
//フォームにデフォルトの値を表示させる
function initForm() {
  const defaultYear = dateary[0];
  const defaultMonth = dateary[1];
  document.getElementById("yearForm").setAttribute("value", defaultYear);
  document.getElementById("monthForm").setAttribute("value", defaultMonth);
}

function getCalender() {
  //  1日の曜日求める
  const firstDate = new Date(dateary[0], dateary[1] - 1);
  const firstYoubi = firstDate.getDay();
  console.log(firstYoubi);
  //  月が何日まであるか(うるう年は後で作る)
  let lastDay;
  switch (dateary[1]) {
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
}
