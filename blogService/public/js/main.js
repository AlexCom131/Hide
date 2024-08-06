document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mittel");

  burger.addEventListener("click", function() {
    this.classList.toggle('active');
    menu.classList.toggle("show");
  });
});

  document.addEventListener("DOMContentLoaded", function() {
    var toggleCheckbox = document.getElementById("toggleButton");
    var editionText2 = document.querySelector(".editionPayContainer .editionText2");

    toggleCheckbox.addEventListener("change", function() {
        if (this.checked) {
            editionText2.textContent = "$7 / month";
        } else {
            editionText2.textContent = "$84 / year";
        }
    });
});