document.addEventListener("DOMContentLoaded", function() {
    const text3Elements = document.querySelectorAll(".burger");

    text3Elements.forEach(function(text3) {
      text3.addEventListener("click", function() {
        const text4 = this.nextElementSibling;

        text4.classList.toggle("show");
      });
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