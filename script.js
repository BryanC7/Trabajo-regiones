let arregloRegiones = [
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

const div = document.querySelector('#div')
let regionAEditar = {}
let regionActualizada = {}

function mostrarInfo(id) {
    limpiarCard()
    const region = arregloRegiones.filter(region => region.id === id)[0]
    const card = document.createElement('div')
    card.classList.add('card', 'mt-5', 'align-items-center')
    card.innerHTML = 
    `
    <div class="d-flex flex-column mt-2">
        <button class="btn btn-secondary mb-2" onclick="limpiarCard()">Cerrar</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editar" onclick="obtenerDatos(${region.id})">Editar información</button>
    </div>
    <img src=${region.img} class="p-2 card-img-top shadow">
    <div class="card-body">
        <h5 class="card-title">Región: ${region.nombre}</h5>
        <p class="card-text">Atractivos: ${region.atractivos}</p>
    </div>
    `
    div.appendChild(card)
}

function obtenerDatos(id) {
    regionAEditar = arregloRegiones.filter(region => region.id === id)[0]

    const { nombre, atractivos, img} = regionAEditar
    document.querySelector('#region').value = nombre
    document.querySelector('#atractivo').value = atractivos
    document.querySelector('#img').value = img
}

function guardarCambios() {
    regionActualizada = {
        nombre: document.querySelector('#region').value,
        atractivos: document.querySelector('#atractivo').value,
        img: document.querySelector('#img').value,
        id: regionAEditar.id
    }
    arregloRegiones = arregloRegiones.map(region => {
        if(region.id === regionActualizada.id) {
            return regionActualizada
        } else {
            return region
        }
    })
    mostrarInfo(regionActualizada.id)
}

function limpiarCard() {
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }
}