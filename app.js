const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoElement.appendChild(li);
}

function reiniciarJuego() {
    listaAmigos.length = 0;
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
