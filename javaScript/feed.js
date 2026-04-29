async function mostrarRankings() {
  const api_token =
    "LIJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO";
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
  .getElementById("commentForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita recàrrega

    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;

    const datosAEnviar = {
      api_token: "LIJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO",
      name: nombre,
      content: comentario,
    };

    //Gestión errores

    try {
      const respuesta = await fetch(
        `https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/publicar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", //etiqueta formato json
          },
          body: JSON.stringify(datosAEnviar), // datosAEnviar debe incluir el api_token, pasar objeto a string para server
        },
      );

      if (respuesta.ok) {
        alert("Comentario enviado con exito!");
        document.getElementById("commentForm").reset();
        cargarComentarios();
      } else {
        console.error("Error en la respuesta del servidor.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  });

mostrarRankings();
cargarComentarios();

async function cargarComentarios() {
  const api_token =
    "LIJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO";
  const url = `https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/${api_token}`;

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
      container.appendChild(fila); //crear nuevo elemento, nuevo hijo 
    });
  } catch (error) {
    console.error("Error. Algo ha salido mal.", error);
  }
}
