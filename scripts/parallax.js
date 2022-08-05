// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

var building_3= document.getElementById('buildings-3');
var building_2 = document.getElementById('buildings-2');
var building_1 = document.getElementById('buildings-1');

function parallaxBG(){
    var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
    var body = document.body, html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    building_3.style.top = ((-scrolltop)+height) * .15 + 'px'; // move bubble1 at 10% of scroll rate
    building_2.style.top = ((-scrolltop)+height) * .2 + 'px'; // move bubble1 at 20% of scroll rate
    building_1.style.top = ((-scrolltop)+height) * .29 + 'px'; // move bubble1 at 30% of scroll rate
}

window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxBG); // call parallaxbubbles() on next available screen paint
}, false)

requestAnimationFrame(parallaxBG);