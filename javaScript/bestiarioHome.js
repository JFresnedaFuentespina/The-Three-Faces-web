// -- DYNAMIC CONTENT DATA
const bestiaryData = {
    light: {
        protagonistImg: "Img/Character/Esqueleto.png",
        protagonistForm: "Parte Humana",
        protagonistDesc: "Era un tipo normal con una vida tranquila. Descubrió la moneda original y su destino cambió."
    },
    dark: {
        protagonistImg: "Img/Character/Fantasma.png",
        protagonistForm: "Parte Fantasma",
        protagonistDesc: "Espíritu vinculado a la moneda. Canaliza poder para acceder a habilidades del mundo espectral."
    },
    // Add enemies
    enemies: {
        light: {
            img: "Img/enemies/zombie-the3faces.png",
            form: "Zombie",
            desc: "Criaturas ligadas al mundo material que atacan cuerpo a cuerpo."
        },
        dark: {
            img: "Img/enemies/fantasma-the3faces.png",
            form: "Fantasma",
            desc: "Entidades del plano espectral que atacan a distancia de forma impredecible."
        }
    }
};

const relics = [
    "Img/Items/bomb.png", "Img/Items/skull.png", "Img/Items/heart.png", 
    "Img/Items/shield.png", "Img/Items/star.png", "Img/Items/yellow_arrow.png",
    "Img/Items/blue_arrow.png", "Img/Items/red_arrow.png", "Img/Items/blue_pill.png",
    "Img/Items/green_potion.png", "Img/Items/hourglass.png"
];

let currentRelicIndex = 0;

// Animation for the relic section
function startRelicSlideshow() {
    const relicImg = document.getElementById('relic-slide');
    if (!relicImg) return;

    setInterval(() => {
        relicImg.classList.add('fade-out');
        setTimeout(() => {
            currentRelicIndex = (currentRelicIndex + 1) % relics.length;
            relicImg.src = relics[currentRelicIndex];
            relicImg.classList.remove('fade-out');
        }, 800);
    }, 4000);
}

function updateBestiaryContent(theme) {
    const pImg = document.getElementById('protagonist-img');
    const eImg = document.getElementById('enemy-img');
    
    // If elements aren't on this page, stop to avoid errors
    if(!pImg || !eImg) return; 

    const data = theme === 'dark' ? bestiaryData.dark : bestiaryData.light;
    const enemyData = theme === 'dark' ? bestiaryData.enemies.dark : bestiaryData.enemies.light;

    // Apply the update
    pImg.src = data.protagonistImg;
    document.getElementById('protagonist-form').innerText = data.protagonistForm;
    document.getElementById('protagonist-desc').innerText = data.protagonistDesc;

    eImg.src = enemyData.img;
    document.getElementById('enemy-form').innerText = enemyData.form;
    document.getElementById('enemy-desc').innerText = enemyData.desc;
}

// -- INITIALIZATION --
document.addEventListener('DOMContentLoaded', () => {
    // 1. Start slideshow
    startRelicSlideshow();

    // 2. Initial set
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateBestiaryContent(initialTheme);

    // 3. Watch for theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
                const updatedTheme = document.documentElement.getAttribute('data-theme');
                updateBestiaryContent(updatedTheme);
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });
});