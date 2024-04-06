let random = function (min, max) {
  let randomInt = Math.floor(Math.random() * (max - min) + min);
  let string = String.fromCharCode(randomInt);

  return string;
};
setInterval(rename, 1000);
document.querySelector(".hover").addEventListener("mousemove", (e) => {
  name1();
});
document.querySelector(".hover").addEventListener("mouseout", (e) => {
  rename();
});

function rename() {
  for (let i = 1; i <= 7; i++) {
    let res = random(65, 97);

    document.getElementById(`hoverid${i}`).innerText = `${res}`;

    console.log(res);
  }
}
function name1() {
  for (let i = 1; i <= 7; i++) {
    if (i == 1) {
      document.getElementById(`hoverid${i}`).innerText = `D`;
    } else if (i == 2) {
      document.getElementById(`hoverid${i}`).innerText = `A`;
    } else if (i == 3) {
      document.getElementById(`hoverid${i}`).innerText = `R`;
    } else if (i == 4) {
      document.getElementById(`hoverid${i}`).innerText = `S`;
    } else if (i == 5) {
      document.getElementById(`hoverid${i}`).innerText = `H`;
    } else if (i == 6) {
      document.getElementById(`hoverid${i}`).innerText = `A`;
    } else if (i == 7) {
      document.getElementById(`hoverid${i}`).innerText = `N`;
    }
  }
}
