let amigos = []

// para agregar amigos a la lista 


let listaDeAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    // Alerta si el campo de texto está vacío
    if (nombreAmigo.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; 
    }

    if (listaDeAmigos.includes(nombreAmigo)) {
        alert('¡Ese nombre ya ha sido agregado!');
        document.getElementById('amigo').value = '';
        return;
    }
    
    listaDeAmigos.push(nombreAmigo);
    actualizarListaDeAmigos();
    document.getElementById('amigo').value = '';
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a llenarla
    
    listaDeAmigos.forEach(amigo => {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        lista.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Por favor, agrega un nombre para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados anteriores

    let elementoResultado = document.createElement('li');
    elementoResultado.textContent = `¡Felicidades, tu amigo secreto es: ${nombreSorteado}! 🎉`;
    resultado.appendChild(elementoResultado);
}