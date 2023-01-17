const objetoRegiones = [
    { nombre: 'Arica y Parinacota', atractivo: 'Morro de Arica y lago Chungará', img: 'img/arica.jpg', id: 1 },
    { nombre: 'Tarapacá', atractivo: 'Salitreras Humberstone y  Santa Laura', img: 'img/tarapaca.jpg', id: 2 },
    { nombre: 'Antofagasta', atractivo: 'Valle de la Luna y lagunas antiplánicas', img: 'img/antofagasta.jpg', id: 3 },
    { nombre: 'Atacama', atractivo: 'Bahía Inglesa y Caldera', img: 'img/atacama.jpg', id: 4 },
    { nombre: 'Coquimbo', atractivo: 'Cruz del Tercer Milenio y Fuerte Lambert', img: 'img/coquimbo.jpg', id: 5 },
    { nombre: 'Valparaíso', atractivo: 'Cerro artillería y Cerro Alegre', img: 'img/valparaiso.jpg', id: 6 },
    { nombre: 'Metropolitana', atractivo: 'Costanera Center', img: 'img/metropolitana.jpg', id: 7 },
    { nombre: "O'Higgins", atractivo: '', img: 'img/ohiggins.jpg', id: 8 },
    { nombre: 'Maule', atractivo: 'Altos de Lircay y Las Siete Tazas', img: 'img/maule.jpg', id: 9 },
    { nombre: 'Ñuble', atractivo: 'Valle de Itata', img: 'img/ñuble.jpg', id: 10 },
    { nombre: 'Biobío', atractivo: 'Salto del Laja', img: 'img/biobio.jpg', id: 11 },
    { nombre: 'Araucanía', atractivo: 'Huerquehue y Conguillío', img: 'img/araucania.jpg', id: 12 },
    { nombre: 'Ríos', atractivo: 'Rio Calle Calle y Fuerte Niebla', img: 'img/los-rios.jpg', id: 13 },
    { nombre: 'Lagos', atractivo: 'Chiloé y Frutillar', img: 'img/los-lagos.jpg', id: 14 },
    { nombre: 'Aysén', atractivo: 'Laguna San Rafael y Queulat', img: 'img/aysen.jpg', id: 15 },
    { nombre: 'Magallanes', atractivo: 'Torres del Paine y la Antártica', img: 'img/magallanes.jpg', id: 16 }
]
function mostrarRegion(id) {
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

const div = document.querySelector('#div')

function crearCard(id) {
    objetoRegiones.forEach(region => {
        if (id === region.id) {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML =
                // <img class="card-img-top shadow">
                // <div class="card-body">
                //     <h5 class="card-title">Región:</h5>
                //     <p class="card-text" id="atractivos">Atractivos: </p>
                // </div>
            console.log('Son iguales')
        }
    })
}