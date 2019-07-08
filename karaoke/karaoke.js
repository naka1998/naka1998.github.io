const onkai = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
console.log(onkai);
const target = document.getElementById("button1");
const target2 = document.getElementById("output");
//  文字列中の"C"を一斉に置換→"C#"を一斉に置換→…てのはできなかった
target.addEventListener("click", () => {
  let outputFunmen = "";
  let inputFumen = document.getElementById("fumen").value;
  let inputUpdown = document.getElementById("updown").valueAsNumber;
  for (i = 0; i <= inputFumen.length; i++) {
    let targetChar = inputFumen.charAt(i);
    let j = 0;
    while (onkai[j] != targetChar && j <= onkai.length) {
      j += 1;
    }
    console.log(j);
    //  検索して、見つかった OR j=12で抜ける
    let insChar;
    if (j >= 12) {
      //  j=12 <=> targetChar = "　" →変換しない
      insChar = " ";
    } else {
      //  置き換え先を指定
      let k = inputUpdown + j;
      if (k > 11) {
        k = k - 12;
      } else if (k < 0) {
        k = 12 + k;
      }
      insChar = onkai[k];
    }
    console.log(insChar);
    //  一番後ろに文字追加
    outputFunmen += insChar;
  }
  console.log(outputFunmen);
  target2.textContent = outputFunmen;
}, false);
