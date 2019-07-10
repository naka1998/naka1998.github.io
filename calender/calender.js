const dateary = getCurrentDate();
const target = document.getElementById("calender");
console.log(dateary);
initForm();
getCalender(dateary[0], dateary[1]);
//  ボタン押されたときに、入力された年月にカレンダーを変更
const reflectButton = document.getElementById("reflect");
reflectButton.addEventListener(
  "click",
  () => {
    console.log("clicked");
    while (target.lastChild.innerHTML != "Sat") target.removeChild(target.lastChild);
    const getYear = document.getElementById("yearForm").valueAsNumber;
    const getMonth = document.getElementById("monthForm").valueAsNumber;
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

function getCalender(kariYear, kariMonth) {
  //  1日の曜日求める
  let firstDate = new Date(kariYear, kariMonth - 1);
  let firstYoubi = firstDate.getDay();
  console.log("曜日" + firstYoubi);
  console.log("月" + kariMonth);
  //  月が何日まであるか(うるう年は後で作る)
  let lastDay;
  switch (kariMonth) {
    case 1:
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
  // 見出しの年・月を変更
  document.getElementById("year_month").innerHTML = `${kariYear} ${kariMonth}月`;
}
