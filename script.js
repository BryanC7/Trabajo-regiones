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
function mostrarRegion(region) {
    switch (region) {
        case 1:
            crearCard()
            break
        case 2:
            crearCard()
            break
        case 3:
            crearCard()
            break
        case 4:
            crearCard()
            break
        case 5:
            crearCard()
            break
        case 6:
            crearCard()
            break
        case 7:
            crearCard()
            break
        case 8:
            crearCard()
            break
        case 9:
            crearCard()
            break
        case 10:
            crearCard()
            break
        case 11:
            crearCard()
            break
        case 12:
            crearCard()
            break
        case 13:
            crearCard()
            break
        case 14:
            crearCard()
            break
        case 15:
            crearCard()
            break
        case 16:
            crearCard()
            break
    }
}

const div = document.querySelector('#div')

function crearCard() {
    objetoRegiones.forEach(region => console.log(region))
}