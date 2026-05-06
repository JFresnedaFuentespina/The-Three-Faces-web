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

const flipSound = new Audio('Sound/coinFlip.mp3');
// Adjust volume
flipSound.volume = 0.5;

//Toggle on click
themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  //Sound effect
  flipSound.currentTime = 0;
  flipSound.play();

  //Sound changes
  flipSound.preservesPitch = false;
  flipSound.playbackRate = 0.9 + Math.random() * 0.1;

  // Start animation
  coinWrapper.classList.add('toss-animation');

  //Swap coin image halfway of the flip
  setTimeout(() =>{
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if(newTheme === 'dark'){
      coinImg.src = ghostCoin;
    } else {
      coinImg.src = humanCoin;
    }
  }, 300); //300ms is half of 0.6s animation

  //Remove class so we can trigger it again next time
  setTimeout(() => {
    coinWrapper.classList.remove('toss-animation');
  }, 600);
});
