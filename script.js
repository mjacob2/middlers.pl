


var pozycjeMenu = document.getElementById('pozycjeMenu');
var hamburger = document.getElementById('hamburger');



hamburger.addEventListener('click', function () {
    pozycjeMenu.classList.toggle('active');
});

function callFunction() {
    window.location.href = "tel://" + 692409120;


}

//Skrypt dla FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activeFAQ");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}// koniec Skryptu dla FAQ