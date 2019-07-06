const onkai = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
console.log(onkai);
const target = document.getElementById("button1");
//  文字列中の"C"を一斉に置換→"C#"を一斉に置換→…てのはできなかった
target.addEventListener("click", () => {
  let inputFumen = document.getElementById("fumen").value;
  let inputUpdown = document.getElementById("updown").valueAsNumber;
  let outputFunmen;
  for (i = 0; i <= onkai.length; i++) {
    let targetchar = inputFumen.charAt(i);
    for (j = 0; onkai[j] != targetchar && j <= onkai.length; j++) {
    }
    //  検索して、見つかった OR j=12で抜ける
    if (j = 12) {

    } else {

    }
    outputFunmen.charAt(-1) = ;// 一番後ろに文字追加
  }
  console.log(inputFumen);
  document.getElementById("output").value = inputFumen;
}, false);


