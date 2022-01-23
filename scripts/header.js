let header_code = `
<div id="nav_bar">
    <a id="home_nav_button" class="nav_entry" style="float:left;padding:2px;"><img class="nav_bar_logo" src="res/logo.svg"></a>
    <a id="download_nav_button" class="nav_entry">Download</a>
    <a id="progress_nav_button" class="nav_entry">Progress</a>
    <a id="contact_nav_button" class="nav_entry">Contact Us</a>
    <a id="about_nav_button" class="nav_entry">About</a>
</div>
`;

// Get the header div
let insertion_div = document.getElementById("nav_bar_container");

// Insert the header
insertion_div.innerHTML = header_code;
