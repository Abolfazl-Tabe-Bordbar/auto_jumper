let input_one = document.getElementById("input_one");
let input_two = document.getElementById("input_two");
let input_three = document.getElementById("input_three");
let input_four = document.getElementById("input_four");
let show_close_timer = document.getElementById("show_close_timer");
input_one.focus();

input_one.addEventListener("input", function () {
  let input_value = this.value;
  if (input_value.length == 4) {
    input_two.focus();
  }
});
input_two.addEventListener("input", function () {
  let input_value = this.value;
  if (input_value.length == 4) {
    input_three.focus();
  }
});
input_three.addEventListener("input", function () {
  let input_value = this.value;
  if (input_value.length == 4) {
    input_four.focus();
  }
});
input_four.addEventListener("input", function () {
  let input_value = this.value;
  if (input_value.length == 4) {
    show_close_timer.classList.remove("hidden");
    show_close_timer.classList.add("block");
    input_four.blur();
    let i = 10;
     show_close_timer.innerHTML = "Thanks,Close Browser in : " + i + "s.";
    setInterval(() => {
      if (i > 0) {
        i--;
        show_close_timer.innerHTML = "Thanks,Close Browser in : " + i + "s.";
      } else {
        clearInterval();
        window.close();
      }
    }, 1000);
  }
});