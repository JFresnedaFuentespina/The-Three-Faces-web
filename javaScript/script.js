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
const coinImg = document.getElementById('coin-img');

//Path to images
const humanCoin = "../Img/coins/moneda_cara.png";
const ghostCoin = "../Img/coins/moneda_cruz.png";

const flipSound = new Audio('../Sound/coinFlip.mp3');
// Adjust volume
flipSound.volume = 0.5;

//Sync function: Update UI based on current theme
function applyTheme(theme) {
  if(theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if(coinImg) coinImg.src = ghostCoin;
  } else {
    document.documentElement.removeAttribute('data-theme');
    if(coinImg) coinImg.src = humanCoin;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  //Apply saved theme on page load
  applyTheme(savedTheme);

  //Toggle logic
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    //Coin sound & animation logic
    flipSound.currentTime = 0;
    flipSound.playbackRate = 0.9 + Math.random() * 0.1;
    flipSound.play();
    coinWrapper.classList.add('toss-animation');

    //Swap coin halfway animation
    setTimeout(() => {
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }, 300);

    setTimeout(() => {
      coinWrapper.classList.remove('toss-animation');
    }, 600);
  });

  
});
