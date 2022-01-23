// Check whether or not they're on mobile
let small_screen = ((window.innerWidth / window.innerHeight) < 1.2);
let mobile_device = /\b(BlackBerry|webOS|IEMobile|Windows Phone|Android|iPod|iPad|iPhone)\b/i.test(navigator.userAgent);
let mobile_mac_pro = /Macintosh/i.test(navigator.userAgent) && (( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 ));
let is_mobile = small_screen || mobile_device || mobile_mac_pro;

// If they're on mobile, do some resizing
if (is_mobile) {
    console.log("User is on mobile");

    // Get the main div
    let content_div = document.getElementById("content_div");

    // Resize the main div
    content_div.style.width = "80%";
    content_div.style.marginRight = "10%";
    content_div.style.marginLeft = "10%";
}