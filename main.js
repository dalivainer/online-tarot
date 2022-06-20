// Card Array
const cards = [
    {
        id: 0,
        name: "El Loco",
        message: "Ponte en movimiento",
        img: "https://live.staticflickr.com/2251/5771298787_023d9dbd72.jpg",
    },
    {
        id: 1,
        name: "El Mago",
        message: "Actua con lo que tienes a mano",
        img: "https://live.staticflickr.com/3251/5771837316_55cc46954a.jpg"
    },
    {
        id: 2,
        name: "La Papisa",
        message: "Momento de detenerse y aprender",
        img: "https://live.staticflickr.com/2133/5771294123_5a0e2f4b1e.jpg" 
    }
];

// FUNCIÓN ORÁCULO
//Al apretar la carta
let cardBtn = document.getElementById("card-btn");
cardBtn.addEventListener("click", throwCard);

    function throwCard () {
        const result = cards[Math.floor(Math.random()* cards.length)];
        console.log(result);

        //cambiar imagen e información
        //imagen NOT WORKING
        let imageDisplay = document.getElementById("img-container");
        /* const imgJSON = JSON.stringify(imageDisplay); */
        imageDisplay.innerHTML = `<img src= "${result.img}" alt="card-display">`;
        //Título
        let title = document.querySelector("h1");
        title.innerText = result.name;
        //Texto
        let message = document.querySelector("p");
        message.innerText = result.message;
    };