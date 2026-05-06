document.addEventListener("DOMContentLoaded", () => {
  

  mostrarRankings();
  cargarComentarios();

  const formulari = document.getElementById("commentForm");


  if (formulari) {
    formulari.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evita la recàrrega nativa del formulari [5]

      const nombre = document.getElementById("nombre").value;
      const comentario = document.getElementById("comentario").value;

      const datosAEnviar = {
        api_token: "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS",
        name: nombre,
        content: comentario,
      };

      try {
        const respuesta = await fetch(
          `https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/publicar`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosAEnviar), // Passem l'objecte a text JSON [5]
          }
        );

        if (respuesta.ok) {
          alert("¡Comentario enviado con éxito!");
          formulari.reset();
          cargarComentarios(); 
        } else {
          console.error("Error en la resposta del servidor.");
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
    if (cosTaula) {
      cosTaula.innerHTML = "";
      dades.data.forEach((jugador, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
              <td>${index + 1}</td>
              <td>${jugador.name}</td>
              <td>${jugador.puntuacion}</td>
              `;
        cosTaula.appendChild(fila); // Inserció dinàmica de nodes [6]
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
  const url = `https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/${api_token}`;

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        const errorData = await respuesta.json();
        console.error("Error de autenticación:", errorData);
        return; // Detenemos la ejecución si el token falla
    }

    const dadesComentaris = await respuesta.json();
    const container = document.getElementById("verComentarios");

    if (container && Array.isArray(dadesComentaris)) {
      container.innerHTML = "";
      dadesComentaris.forEach((post) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${post.name}</td><td>${post.content}</td>`;
        container.appendChild(fila); 
      });
    }
  } catch (error) {
    console.error("Fallo crítico en la red:", error); // Captura errores de conexión [7]
  }
}