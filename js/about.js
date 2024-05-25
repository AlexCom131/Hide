document.addEventListener("DOMContentLoaded", function() {
    const text3Elements = document.querySelectorAll(".ongoingQuestinText3");

    text3Elements.forEach(function(text3) {
      text3.addEventListener("click", function() {
        const text4 = this.nextElementSibling;

        text4.classList.toggle("show");

        text3.style.borderBottom = text4.classList.contains("show") ? "none" : "1px solid rgba(52, 56, 57, 1)";
        text3.style.borderRadius = text3.classList.contains("show") ? "none" : "25px 25px 0px 0px";
        text3.style.borderRadius = text4.classList.contains("show") ? "none" : "25px";

        const image = this.querySelector("img");

        if (text4.classList.contains("show")) {
          image.src = "img/about/lineal/Vector 10.png";
        } else {
          image.src = "img/about/lineal/Vector 13.png";
        }
      });
    });
  });

// function toggleText() {
//     var answer = document.getElementById("answer");
//     answer.classList.toggle("show");
// }

