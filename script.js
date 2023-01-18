const objetoRegiones = [
    { nombre: 'Arica y Parinacota', atractivos: 'Morro de Arica y lago Chungará', img: 'img/arica.jpg', id: 1},
    { nombre: 'Tarapacá', atractivos: 'Salitreras Humberstone y  Santa Laura', img: 'img/tarapaca.jpg', id: 2},
    { nombre: 'Antofagasta', atractivos: 'Valle de la Luna y lagunas antiplánicas', img: 'img/antofagasta.jpg', id: 3},
    { nombre: 'Atacama', atractivos: 'Bahía Inglesa y Caldera', img: 'img/atacama.jpg', id: 4},
    { nombre: 'Coquimbo', atractivos: 'Cruz del Tercer Milenio y Fuerte Lambert', img: 'img/coquimbo.jpg', id: 5},
    { nombre: 'Valparaíso', atractivos: 'Cerro artillería y Cerro Alegre', img: 'img/valparaiso.jpg', id: 6},
    { nombre: 'Metropolitana', atractivos: 'Costanera Center', img: 'img/metropolitana.jpg', id: 7},
    { nombre: "O'Higgins", atractivos: '', img: 'img/ohiggins.jpg', id: 8},
    { nombre: 'Maule', atractivos: 'Altos de Lircay y Las Siete Tazas', img: 'img/maule.jpg', id: 9},
    { nombre: 'Ñuble', atractivos: 'Valle de Itata', img: 'img/ñuble.jpg', id: 10},
    { nombre: 'Biobío', atractivos: 'Salto del Laja', img: 'img/biobio.jpg', id: 11},
    { nombre: 'Araucanía', atractivos: 'Huerquehue y Conguillío', img: 'img/araucania.jpg', id: 12},
    { nombre: 'Ríos', atractivos: 'Rio Calle Calle y Fuerte Niebla', img: 'img/los-rios.jpg', id: 13},
    { nombre: 'Lagos', atractivos: 'Chiloé y Frutillar', img: 'img/los-lagos.jpg', id: 14},
    { nombre: 'Aysén', atractivos: 'Laguna San Rafael y Queulat', img: 'img/aysen.jpg', id: 15},
    { nombre: 'Magallanes', atractivos: 'Torres del Paine y la Antártica', img: 'img/magallanes.jpg', id: 16}
]
function mostrarInfo(id) {
    switch (id) {
        case 1:
            crearCard(id)
            break
        case 2:
            crearCard(id)
            break
        case 3:
            crearCard(id)
            break
        case 4:
            crearCard(id)
            break
        case 5:
            crearCard(id)
            break
        case 6:
            crearCard(id)
            break
        case 7:
            crearCard(id)
            break
        case 8:
            crearCard(id)
            break
        case 9:
            crearCard(id)
            break
        case 10:
            crearCard(id)
            break
        case 11:
            crearCard(id)
            break
        case 12:
            crearCard(id)
            break
        case 13:
            crearCard(id)
            break
        case 14:
            crearCard(id)
            break
        case 15:
            crearCard(id)
            break
        case 16:
            crearCard(id)
            break
    }
}

function ocultarInfo() {
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }
}

const div = document.querySelector('#div')

function crearCard(id) {
    const region = objetoRegiones.filter(region => region.id === id)
    const card = document.createElement('div')
    card.classList.add('card', 'mb-3')
    card.innerHTML = 
    `
    <img src=${region[0].img} class="p-2 card-img-top shadow">
    <div class="card-body">
        <h5 class="card-title">Región: ${region[0].nombre}</h5>
        <p class="card-text">Atractivos: ${region[0].atractivos}</p>
    </div>
    `
    div.appendChild(card)
}

