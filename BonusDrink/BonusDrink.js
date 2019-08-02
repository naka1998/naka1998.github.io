/*
ある駄菓子屋で飲み物を買うと、空き瓶3本で新しい飲み物を1本プレゼントしてくれる。
最初に購入した飲み物の本数から、トータルで飲める本数を算出するプログラムを作成せよ。
また、最初に100本購入した場合、トータルで何本飲めるか。
*/
const button = document.getElementById("calcButton");
const inputForm = document.getElementById("drinknum");

const calculation = () => {
  let num = inputForm.valueAsNumber;
  console.log(num);
  let numOfDrinks = 0; //  飲める本数
  while (num > 2) {
    numOfDrinks = numOfDrinks + num;  //  飲める本数＝飲める本数 + 残りの本数
    num = Math.floor(num / 3);  // 残りの本数=空瓶でもらえる本数
    console.log("残り" + num);
  }
  numOfDrinks += num;
  alert(`${numOfDrinks}本飲めます`);
}

button.addEventListener("click", calculation, false);

