// NAVBAR MENU
const navbarToggle = document.querySelector('.navbar-toggle');

const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');


});


// Dark-Mode
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