let navbar = document.querySelector('nav');
let sticky = navbar.offsetTop;


window.onscroll = function() {stickyNav()};

function stickyNav() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
