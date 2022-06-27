window.onscroll = function() {stickyNav()};

let navbar = document.querySelector('nav');
let sticky = navbar.offsetTop;

function stickyNav() { // nice stolen code
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}