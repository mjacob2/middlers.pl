var html = '<nav class="navbar">\
<span class="navbar-toggle" id="js-navbar-toggle">\
    <div class="hamburger"></div>\
    <div class="hamburger"></div>\
    <div class="hamburger"></div>\
</span>\
<a href="https://middlers.pl" class="logo">○●○ middlers</a>\
<button id="call_btn_navBar" onclick="callFunction()" type="button"><img class="btn_icon" src="images/call_icon.png" alt="Doradca kredytowy wrocław zadzwoń">zadzwoń</button>\
<ul class="main-nav" id="js-menu">\
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
</ul>\
</nav>';

document.getElementById('navigationBar').innerHTML = html;