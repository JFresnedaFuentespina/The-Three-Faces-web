async function mostrarRankings(){
  const api_token = "LIJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO";
    const url = `https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/${api_token}`;
}

try {
  const resposta = await fetch(url);
  const dades = await resposta.json();
  const cosTaula = document.getElementById("cosRanking");

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

document.getElementById('commentForm').addEventListener('submit', async(event) => {`LIJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO`
    event.preventDefault(); //Evitar recàrrega


    let nombre = document.getElementById('nombre').value;
    let comentario = document.getElementById('comentario').value;

    //Enviar a server datos para la API
    const datosAEnviar = {
        api_token: "LIJOekjwbGP3XzDPPye8Na8tWJpONhM7s9c2YtYwA2Eab9yj4Omqe63u68TO",
        name: nombre,
        content: comentario
    };

    //Gestión errores

    try{
        const respuesta = await fetch(`https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/publicar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //etiqueta formato json
        },
        body: JSON.stringify(datosAEnviar) // datosAEnviar debe incluir el api_token, pasar objeto a string para server
    });

    if (respuesta.ok){
        alert("Comentario enviado con exito!");
        document.getElementById('commentForm').reset();
    }
 

    } catch(error){
        console.error("Error: ", error);

    }
});
