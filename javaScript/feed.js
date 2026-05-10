document.addEventListener("DOMContentLoaded", () => {
  
    mostrarRankings();
    cargarComentarios();

    const formulari = document.getElementById("commentForm");

    if (formulari) {
    formulari.addEventListener("submit", async (event) => {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const comentario = document.getElementById("comentario").value;

      
        const API_TOKEN = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";

        const datosAEnviar = {
            data: {
            api_token: API_TOKEN,
            name: nombre,
            content: comentario,
            }
        };

        try {
            const respuesta = await fetch(
            `https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts`,
            {
                method: "POST", // Mètode per enviar dades al servidor 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datosAEnviar), 
            }
            );

            if (respuesta.ok) {
            alert("¡Comentario enviado con éxito!");
            formulari.reset(); 
                cargarComentarios(); 
            } else {
            // Per si el servidor respon amb error
                const errorServidor = await respuesta.json().catch(() => ({ message: "Error desconegut" }));
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
    const api_token = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
    const url =`https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS/5`;
    try {
        const respuesta = await fetch(url);
        const dades = await respuesta.json();
        const cosTaula = document.getElementById("cuerpoRanking");

        // Verificació d'array per evitar l'error "dades.forEach is not a function"
        if (cosTaula && dades.data && Array.isArray(dades.data)) {
        cosTaula.innerHTML = ""; // Neteja el contingut HTML previ [8]
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
        console.error("L'API no ha retornat un array vàlid o l'element HTML no existeix.", dades);
        }
    } catch (error) {
        console.error("Error carregant el rànquing:", error);
    }
    }

    // FUNCIÓ CARREGAR COMENTARIS (GET)
    async function cargarComentarios() {
    const api_token = "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
    const url = `https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments/${api_token}`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            console.error("Error de autenticación:", errorData);
            return; 
        }

    const dadesComentaris = await respuesta.json();
    const container = document.getElementById("verComentarios");

    // CORRECCIÓ: Verifiquem si dadesComentaris.data existeix i és un array
    if (container && dadesComentaris.data && Array.isArray(dadesComentaris.data)) {
      container.innerHTML = ""; // Neteja del contingut segons el DOM [3]
      dadesComentaris.data.forEach((post) => {
        const fila = document.createElement("tr"); // Creació dinàmica de nodes [4]
        fila.innerHTML = `<td>${post.name}</td><td>${post.content}</td>`;
        container.appendChild(fila); 
      });
    } else {
      console.error("L'estructura de dades no conté l'array 'data' esperat:", dadesComentaris);
    }
  } catch (error) {
    console.error("Fallo crítico en la red:", error); 
  }
}