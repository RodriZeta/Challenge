// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", function () {
    const inputAmigo = document.getElementById("amigo");
    const ulListaAmigos = document.getElementById("listaAmigos");
    const ulResultado = document.getElementById("resultado");
    const btnReiniciar = document.getElementById("reiniciarBtn");
    const listaAmigos = [];

    function actualizarEstadoBotonReiniciar() {
        btnReiniciar.style.display = listaAmigos.length > 0 ? "inline-block" : "none";
    }
//Funcion de agregar amigo y creación de listado
    function agregarAmigo() {
        const nombre = inputAmigo.value.trim();
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; //Validación de caracteres

        if (nombre === "") {
            alert("Debe escribir el nombre de un amigo");
            return;
        }

        if (!regex.test(nombre)) {
            alert("El nombre no puede contener números ni caracteres especiales");
            return;
        }

        if (listaAmigos.includes(nombre)) {
            alert("Ese nombre ya está en la lista.");
            return;
        }

        listaAmigos.push(nombre);
        ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
        inputAmigo.value = "";

        actualizarEstadoBotonReiniciar();
    }
//Funcion de sorteo de amigo
    function sortearAmigo() {
        if (listaAmigos.length === 0) {
            alert("No hay amigos para sortear.");
            ulResultado.innerHTML = "";
            return;
        }
//Random para sorteo
        const random = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[random];
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    }
//Funcion para reiniciar el juego
    function reiniciarJuego() {
        listaAmigos.length = 0;
        ulListaAmigos.innerHTML = "";
        ulResultado.innerHTML = "";
        inputAmigo.value = "";

        actualizarEstadoBotonReiniciar();
    }

    // ✅ Escuchar el Enter en el campo de entrada y ejecutar agregarAmigo()
    inputAmigo.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que se envíe un formulario si está dentro de uno
            agregarAmigo();
        }
    });

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
    btnReiniciar.addEventListener("click", reiniciarJuego);

    actualizarEstadoBotonReiniciar();
});
