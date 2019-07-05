fetch("https://isc-teacher-face-bomber.glitch.me/teachers")
  .then(response => response.json())
  .then(json => {
    let img = document.getElementById("imgdiv");
    img.setAttribute("src", json[0].imageURL);
    let i = 0;
    while (i <= 19) {
      let box = document.createElement("div");
      box.id = "box" + json[i].id;
      let teacher = document.createElement("p");
      teacher.innerHTML = json[i].name;
      teacher.id = "teacher" + json[i].id;
      console.log(teacher);
      document.getElementById("wrap").appendChild(box);
      document.getElementById("box" + json[i].id).appendChild(teacher);
      i += 1;
    }

    const target1 = document.getElementById("wrap");
    target1.addEventListener(
      "click",
      () => {
        let clickedId = event.target.id;
        let chuukanId = clickedId.replace("teacher", "");
        outputID = chuukanId.replace("box", "");
        console.log(`${clickedId}がクリックされたよ`);
        img.setAttribute("src", json[outputID].imageURL);
      },
      false
    );
    const target2 = document.getElementById("imgdiv");
    target2.addEventListener(
      "click",
      () => {
        target2.src =
          "https://img.gifmagazine.net/gifmagazine/images/81293/original.gif";
      },
      false
    );
  });
