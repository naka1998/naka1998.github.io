const onkai = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
console.log(onkai);
const target = document.getElementById("button1");
//  文字列中の"C"を一斉に置換→"C#"を一斉に置換→…てのはできなかった
target.addEventListener("click", () => {
  let inputFumen = document.getElementById("fumen").value;
  let inputUpdown = document.getElementById("updown").valueAsNumber;
  for (i = 0; i <= 11; i++) {
    let diff = i + inputUpdown;
    if (diff >= 12) {
      diff -= 12;
    } else if (diff <= -1) {
      diff += 12;
    }
    outputFumen = inputFumen.replace(new RegExp(`${onkai[i]}`, "g"), onkai[diff]);
  }
  console.log(inputFumen);
  document.getElementById("output").value = inputFumen;
}, false);


