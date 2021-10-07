var html = '<nav class="navbar">\
<span class="navbar-toggle" id="hamburger">\
    <div class="hamburger"></div>\
    <div class="hamburger"></div>\
    <div class="hamburger"></div>\
</span>\
<a href="https://middlers.pl" class="logo">○●○ middlers</a>\
<ul class="main-nav" id="pozycjeMenu">\
    <li>\
    <a href="/o-mnie.html" class="nav-links">O MNIE </a>\
    </li>\
    <li>\
        <a href="/#korzysci" class="nav-links">KORZYŚCI </a>\
    </li>\
    <li>\
        <a href="/#etapy" class="nav-links">PROCES</a>\
    </li>\
    <li>\
        <a href="/#testimonials" class="nav-links">OPINIE</a>\
    </li>\
    <li>\
        <a href="/blog" class="nav-links">BLOG</a>\
    </li>\
    <li>\
        <a href="/kontakt" class="nav-links">KONTAKT</a>\
    </li>\
    <li>\
    <button id="call_btn_navBar" onclick="callFunction()" type="button"><img class="btn_icon" src="https://middlers.pl/images/call_icon.png" alt="Doradca kredytowy wrocław zadzwoń">zadzwoń</button>\
</li>\
</ul>\
</nav>\
<!--To poniższe ciasteczko jest tylko po to, żeby zrobićnową DIV dla bannera z ciasteczkiem a jest w tym miejscu, zeby nie trzeba bylo kopiowac tego do kazdej strony-->\
<div id="ciasteczko"></div>';

document.getElementById('navigationBar').innerHTML = html;