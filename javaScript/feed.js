
async function mostrarRankings() {
  const api_token =
    "pHJNhm719MN5LCVqE839IOse0qvlbL1IBXndZmAWoJfiPXZFQHmgNQrzUHYS";
  const url = `https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/${api_token}`;

  try {
    const respuesta = await fetch(url);
    const dades = await respuesta.json();
    const cosTaula = document.getElementById("cosRanking");

    cosTaula.innerHTML = "";

    dades.forEach((jugador, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${jugador.name}</td>
            <td>${jugador.puntuacion}</td>
            `;
      cosTaula.appendChild(fila);
    });
  } catch (error) {
    console.error("Error carregant el rànquing:", error);
  }
}

//Gestió formulari comentaris


document
  .getElementById("commentForm").addEventListener("submit", "DOMContentLoaded", async (event) => {
    event.preventDefault(); // Evita recàrrega

    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;
  const api_token = "pHJNhm719MN5LCVqE839IOse0qvlbL1IBXndZmAWoJfiPXZFQHmgNQrzUHYS";
      

     const datosAEnviar = {
        api_token: api_token,
        name: nombre,
        content: comentario,
      };

      try {
        const respuesta = await fetch(
          `https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/publicar`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datosAEnviar), 
          }
        );

        if (respuesta.ok) {
          alert("Comentario enviado con exito!");
          formulari.reset();
          cargarComentarios(); 
        } else {
          console.error("Error en la respuesta del servidor.");
        }
      } catch (error) {
        console.error("Error: ", error); 
      }
    });


async function cargarComentarios() {
  const api_token =
    "pHJNhm719MN5LCVqE839IOse0qvlbL1IBXndZmAWoJfiPXZFQHmgNQrzUHYS";
  const url = `https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/${api_token}`;


  try {
    const respuesta = await fetch(url);
    const comentarios = await respuesta.json();
    const container = document.getElementById("verComentarios");

    container.innerHTML = ""; //innerHTML modifica html interno

    comentarios.forEach((post) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${post.name}</td>
        <td>${post.content}</td>
        `;
      container.appendChild(fila);
    });
  } catch (error) {
    console.error("Error. Algo ha salido mal.", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {const url_base = "https://phpstack-1076337-5399863.cloudwaysapps.com";
const api_token = "pHJNhm719MN5LCVqE839IOse0qvlbL1IBXndZmAWoJfiPXZFQHmgNQrzUHYS";

  const formulari = document.getElementById("commentForm");
  
  mostrarRankings();
  cargarComentarios();

  if(formulari){
    formulari.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const comentarios = document.getElementById("comentario").value;
      
      const datosAEnviar = {
        api_token: "pHJNhm719MN5LCVqE839IOse0qvlbL1IBXndZmAWoJfiPXZFQHmgNQrzUHYS",
        name: nombre,
        content: comentario
      };

  try {
        const respuesta = await fetch (
          `https://phpstack-1076337-5399863.cloudwaysapps.com/POST/api/comments`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosAEnviar),
          }
        );

        if (respuesta.ok) {
          alert("Comentario enviado con exito!");
          formulari.reset();
          cargarComentarios(); // Refrescar lista comentaris
        }
      } catch (error) {
        console.error("Error en l'enviament: ", error);
      }
    });
  }
});