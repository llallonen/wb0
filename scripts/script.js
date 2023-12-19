var minus = document.querySelector(".count__minus");
var plus = document.querySelector(".count__plus");
var quantity = document.querySelector(".count__input");

minus.addEventListener("click", function () {
  if (quantity.value <= 0) {
    minus.disabled = true;
  } else {
    quantity.value--;
  }
});

plus.addEventListener("click", function () {
  quantity.value++;
});
