// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the image that opens the modal
var thumbnail = document.getElementsByClassName("thumbnail");

// When the user clicks on the image, open the modal
for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].onclick = function() {
        modal[i].style.display = "block";
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (let i = 0; i < modal.length; i++)
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
}

let navMobile = document.getElementById('nav-ul')

function toggle() {
    if (navMobile.className === "topNav") {
        navMobile.className += " show";
    } else {
        navMobile.className = "topNav";
    }
}