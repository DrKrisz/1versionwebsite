// When the user scrolls down 700px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("navbar").style.top = "10px";
    } else {
        document.getElementById("navbar").style.top = "-500px";
    }
}
// Function for not changing the URL with control and navbar. 
function scrollto(id) {
    var element_to_scroll_to = document.getElementById(id);
    element_to_scroll_to.scrollIntoView();
}

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function () { myFunction() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}