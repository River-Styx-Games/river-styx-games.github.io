document.getElementById("carousel-links").childNodes.forEach(function (i) {
    i.onclick = tempPause;
});
document.getElementById("fart_button").onclick = tempPauseFunne;

function tempPause() {
    disableScroll();
    setTimeout(clearLock, 10);
}

function tempPauseFunne() {
    disableScroll();
    var snd = new Audio("res/hehe.mp3");
    snd.play();
    setTimeout(clearLock, 10);
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        // if any scroll is attempted, set this to the previous value
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });
}

function clearLock() {
    window.onscroll = function () {};
    window.history.pushState({}, "", "index.html");
}
