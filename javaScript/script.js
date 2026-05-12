// NAVBAR MENU
const navbarToggle = document.querySelector('.navbar-toggle');

const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');


});

// Dark-Mode + underline on navbar for active page
const themeBtn = document.getElementById('theme-toggle');
const coinWrapper = document.getElementById('coin-wrapper');
const flipSound = new Audio('../Sound/coinFlip.mp3');

themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    // Play Sound & Animation
    flipSound.currentTime = 0;
    flipSound.play();
    coinWrapper.classList.add('toss-animation');

    // Toggle Theme halfway through (300ms)
    setTimeout(() => {
        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', newTheme);
    }, 300);

    setTimeout(() => {
        coinWrapper.classList.remove('toss-animation');
    }, 600);
});

/* ACTIVE PAGE INDICATOR */
document.addEventListener('DOMContentLoaded', () =>{
    /* Active page indicator */
    const navLinks = document.querySelectorAll('.navbar-link');

    // Normalize current path to handle folders properly
    // This removes the domain and just looks at /html/dev.Blog.html etc.
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // 'pathname' property of the link's  URL object for a clean comparison
        const linkPath = new URL(link.href).pathname;

        if(currentPath === linkPath){
            link.classList.add('active');
        }

        //Special case for home page(index.html)
        if(currentPath === "/" && linkPath.endsWith("index.html")){
            link.classList.add('active');
        }
    });
});