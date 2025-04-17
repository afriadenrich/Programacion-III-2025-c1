const canciones = [
    {
        img:"https://i.scdn.co/image/ab67616d00001e02639fea4197e676cfe9512e04",
        titulo:"big poppa - 2007 remaster",
        artista:"the notorious B.I.G"
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e028fe5d04b06aff90f9fe796f5",
        titulo:"dior",
        artista:"pop smoke"
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369",
        titulo:"what you know bout love",
        artista:"pop smoke"
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e02d7787f2ab36e7cad6dc4dbcc",
        titulo:"damelo",
        artista:"bardero$"
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e02ee2df133409d1e2cf0c07c19",
        titulo:"ruinas",
        artista:"C.R.O"
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e02828e85ef7f11a9cf8d108842",
        titulo:"la 14",
        artista:"bardero$"
    },
]

const artistas = [
    {
        img:"https://i.scdn.co/image/ab676161000051745e9905f881de7345f498258e",
        titulo:"Feid"
    },
    {
        img:"https://i.scdn.co/image/ab67616100005174f4c238e65f0007b4845beb69",
        titulo:"bardero$"
    },
    {
        img:"https://i.scdn.co/image/e56612ae56c9007e99ab36b83efd4faf6401260d",
        titulo:"the notorious b.i.g"
    },
    {
        img:"https://i.scdn.co/image/df73c0cebe56cafe705ffdba5085ccbd5680bd16",
        titulo:"50 cent"
    },
    {
        img:"https://i.scdn.co/image/ab676161000051748372345609bebaf1e948ef7f",
        titulo:"myke towers"
    },
    {
        img:"https://i.scdn.co/image/ab67616100005174c37ea490563bfe14de707f18",
        titulo:"dei v"
    }
]

const tendencias = [
    {
        img:"https://charts-images.scdn.co/assets_generated/locale_es/regional/weekly/region_global_default.jpg",
        texto: "Tu actualización semanal de las canciones más escuchadas ahora mismo en Global."
    },
    {
        img:"https://charts-images.scdn.co/assets_generated/locale_es/regional/weekly/region_ar_default.jpg",
        texto: "Tu actualización semanal de las canciones más escuchadas ahora mismo en Argentina."
    },
    {
        img:"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
        texto: "Tu actualización diaria de las canciones más escuchadas ahora mismo en Global."
    },
    {
        img:"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_ar_default.jpg",
        texto: "Tu actualización diaria de las canciones más escuchadas ahora mismo en Argentina."
    },
    {
        img:"https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
        texto: "Tu actualización diaria de las canciones más virales en Global."
    },
    {
        img:"	https://charts-images.scdn.co/assets/locale_en/viral/daily/region_ar_default.jpg",
        texto: "Tu actualización diaria de las canciones más virales en Argentina."
    },
]

const listaCanciones = document.getElementById("lista-canciones");
listaCanciones.innerHTML = canciones.map((cancion) => {
    return `<div class="card">
                <img class="card-img" src="${cancion.img}" alt="">
                <h3 class="card-titulo">${cancion.titulo}</h3>
                <p class="card-texto">${cancion.artista}</p>
                <div class="play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                    </svg>
                </div>
            </div>`
}).join("");

const listaArtistas = document.getElementById("lista-artistas");
listaArtistas.innerHTML = artistas.map((artista) => {
    return `<div class="card">
                <img class="card-img circle-img" src="${artista.img}" alt="">
                <h3 class="card-titulo">${artista.titulo}</h3>
                <p class="card-texto">artista</p>
                <div class="play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                    </svg>
                </div>
            </div>`
}).join("");

const listaTendencias = document.getElementById("lista-tendencias");
listaTendencias.innerHTML = tendencias.map((tendencia) => {
    return `<div class="card">
                <img class="card-img" src="${tendencia.img}" alt="">
                <h3 class="card-texto">${tendencia.texto}</h3>
                <div class="play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                    </svg>
                </div>
            </div>
            </>`
}).join("");