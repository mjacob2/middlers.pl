


var pozycjeMenu = document.getElementById('pozycjeMenu');
var hamburger = document.getElementById('hamburger');



hamburger.addEventListener('click', function () {
    pozycjeMenu.classList.toggle('active');
});

function callFunction() {
    window.location.href = "tel://" + 692409120;


}