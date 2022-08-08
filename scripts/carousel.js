document.getElementById("carousel-links").childNodes.forEach(function (i) {
    i.onclick = tempPause;
});
document.getElementById("fart_button").onclick = tempPauseFunne;

function tempPause() {
    disableScroll();
    setTimeout(clearLock, 30);

    if (randint(0, 100) == 69) {
        microwave();
    }
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tempPauseFunne() {
    disableScroll();
    setTimeout(clearLock, 30);
    var snd = new Audio("res/hehe.mp3");
    snd.volume = 0.7;
    snd.play();
}

function microwave() {
    var snd = new Audio("res/mmmmmmmmmm BEEP BEEP BEEP.mp3");
    snd.play();
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
