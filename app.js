window.onscroll = function() {stickyNav()};

let navbar = document.querySelector('nav');
let sticky = navbar.offsetTop;

stickyNav();

function stickyNav() { // nice stolen code
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

const factsSection = document.querySelector('#counterSection');

options = {
    root: null,
    threshold: 0,
    rootMargin: "-75px"
};

let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
        }
        counter("count1", 0, 5, 3000);
        counter("count2", 0, 42, 2500);
        counter("count3", 0, 63, 3000);
        counter("count4", 0, 11, 3000);
    });
}, options);

observer.observe(factsSection);