const navbarToggle = document.querySelector('.navbar-toggle');

const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');


});

// Dark-Mode
const themeBtn = document.getElementById('theme-toggle');
const coinImg = document.getElementById('coin-img');

//Path to images
const humanCoin = "Img/coins/moneda_cara.png";
const ghostCoin = "Img/coins/moneda_cruz.png";

//Function to set theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if(theme === 'dark'){
    coinImg.src = ghostCoin;
  } else {
    coinImg.src = humanCoin;
  }
}

// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

//Toggle on click
themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
