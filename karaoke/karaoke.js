class KaraokeMachine {
  constructor(fumen, updown) {

    this.onkai = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    this.outputFunmen = "";
    this.fumen = fumen;
    this.updown = updown;
  }
  search() {  //  検索して、見つかった OR j=12で抜ける
    let targetChar = this.fumen.charAt(i);
    let j = 0;
    while (this.onkai[j] != targetChar && j <= this.onkai.length) {
      j += 1;
    }
    return j;
  }
  trans(k) {
    let insChar;
    if (k >= 12) {
      //  j=12 <=> targetChar = "　" →変換しない
      insChar = " ";
    } else {
      //  置き換え先を指定(配列の範囲を超えたとき)
      let l = this.updown + k;
      if (l > 11) {
        l = l - 12;
      } else if (l < 0) {
        l = 12 + l;
      }
      insChar = this.onkai[l];
    }
    console.log(insChar);
    //  置き換え先の文字を返す
    return insChar;
  }
}
//  こっから
const target = document.getElementById("button1");
const target2 = document.getElementById("output");
target.addEventListener("click", clickEvent, false);

function clickEvent() {
  console.log("clicked");
  const inputFumen = document.getElementById("fumen").value;
  const inputUpdown = document.getElementById("updown").valueAsNumber;
  karaoke = new KaraokeMachine(inputFumen, inputUpdown);
  for (i = 0; i <= karaoke.fumen.length; i++) {
    let result = karaoke.search(karaoke.fumen);
    console.log(result);
    karaoke.outputFunmen += karaoke.trans(result);
  }
  target2.textContent = karaoke.outputFunmen;
}
