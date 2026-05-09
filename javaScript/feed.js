const API_TOKEN = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
const BASE_URL = "https://phpstack-1076337-5399863.cloudwaysapps.com/api";

document.addEventListener("DOMContentLoaded", () => {
    // Carreguem dades inicials
    mostrarRankings();
    carregarComentaris();

    const formulari = document.getElementById("commentForm");

    if (formulari) {
        formulari.addEventListener("submit", async (event) => {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const comentario = document.getElementById("comentario").value;

            // Preparem l'objecte seguint l'estructura que demana la teva API
            const dadesAEnviar = {
                data: {
                    api_token: API_TOKEN,
                    name: nombre,
                    content: comentario,
                }
            };

            try {
                const resposta = await fetch(`${BASE_URL}/posts`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dadesAEnviar),
                });

                if (resposta.ok) {
                    alert("¡Comentari enviat amb èxit!");
                    formulari.reset();
                    carregarComentaris(); // Refresquem la llista automàticament
                } else {
                    const errorServidor = await resposta.json().catch(() => ({ message: "Error desconegut" }));
                    console.error("El servidor ha rebutjat la petició:", errorServidor);
                }
            } catch (error) {
                console.error("Error en l'enviament:", error);
            }
        });
    }
});

// FUNCIÓ RANKINGS (GET)
async function mostrarRankings() {
    const url = `${BASE_URL}/classification/${API_TOKEN}/5`;
    try {
        const resposta = await fetch(url);
        const dades = await resposta.json();
        const cosTaula = document.getElementById("cuerpoRanking");

        if (cosTaula && dades.data && Array.isArray(dades.data)) {
            cosTaula.innerHTML = ""; 
            dades.data.forEach((jugador, index) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${jugador.name}</td>
                    <td>${jugador.puntuacion}</td>
                `;
                cosTaula.appendChild(fila);
            });
        } else {
            console.error("L'API de rànquing no ha retornat dades vàlides:", dades);
        }
    } catch (error) {
        console.error("Error carregant el rànquing:", error);
    }
}

// FUNCIÓ CARREGAR COMENTARIS (GET)
async function carregarComentaris() {
    const url = `${BASE_URL}/comments/${API_TOKEN}`;

    try {
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            console.error("Error en la resposta del servidor (Comentaris)");
            return;
        }

        const dadesComentaris = await resposta.json();
        const contenidor = document.getElementById("verComentarios");

        if (contenidor && dadesComentaris.data && Array.isArray(dadesComentaris.data)) {
            contenidor.innerHTML = ""; 
            dadesComentaris.data.forEach((comentari) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td><strong>${comentari.name}</strong></td>
                    <td>${comentari.content}</td>
                `;
                contenidor.appendChild(fila);
            });
        } else {
            console.error("L'estructura de comentaris no és la esperada:", dadesComentaris);
        }
    } catch (error) {
        console.error("Error de xarxa al carregar comentaris:", error);
    }
}