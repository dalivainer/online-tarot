// Welcome
swal({
    title: "Bienvenidx a Tirame una Carta",
    text: "¿Estás listx para recibir tu mensaje del Tarot? \n Apretá la carta para recibir tu mensaje",
    button: "Ok",
  });

// Card Array
/* const cards = fetch('/data.json')
.then( (res) => res.json()) */

const cards = [
    {
        name: "El Loco",
        message: "Ponte en movimiento",
        img: "https://live.staticflickr.com/2251/5771298787_023d9dbd72.jpg"
    },
    {
        name: "El Mago",
        message: "Actuá con lo que tienes a mano",
        img: "https://live.staticflickr.com/3251/5771837316_55cc46954a.jpg"
    },
    {
        name: "La Papisa",
        message: "Momento de detenerse y aprender",
        img: "https://live.staticflickr.com/2133/5771294123_5a0e2f4b1e.jpg" 
    },
    {
        name: "La Emperatriz",
        message: "Sigue tu deseo",
        img: "https://live.staticflickr.com/2394/5771837864_aed25091a8.jpg" 
    },
    {
        name: "El Emperador",
        message: "Buscá estabilidad",
        img: "https://live.staticflickr.com/2632/5771837664_b0ce33f0bb.jpg" 
    },
    {
        name: "El Papa",
        message: "Cruzá el puente desde la fe",
        img: "https://live.staticflickr.com/2723/5771294511_9318f80c47.jpg" 
    },
    {
        name: "El Enamorado",
        message: "Seguí el camino que te muestra tu corazón",
        img: "https://live.staticflickr.com/2464/5771838072_7985cac225.jpg" 
    },
    {
        name: "El Carro",
        message: "Solo sucederá su ritmo natural",
        img: "https://live.staticflickr.com/3448/5771296043_5cbbbbee35.jpg" 
    },
    {
        name: "La Justicia",
        message: "Pensá en lo que es justo y cortá por lo sano",
        img: "https://live.staticflickr.com/2078/5771295725_a7a39c38a8.jpg" 
    },
    {
        name: "El Hermitaneo",
        message: "Un viaje al pasado para curar y madurar",
        img: "https://live.staticflickr.com/2670/5771295483_56ddb90e23.jpg" 
    },
    {
        name: "La Rueda de la Fortuna",
        message: "La vida tiene subidas y bajadas. Fluí.",
        img: "https://live.staticflickr.com/5143/5771295299_8263670cc2.jpg" 
    },
    {
        name: "La Fuerza",
        message: "¿Conocés tus deseos? ¿Qué lugar les das?",
        img: "https://live.staticflickr.com/2790/5771838252_1b941529e6.jpg" 
    },
    {
        name: "El Colgado",
        message: "Antes de actuar, mirá las cosas desde otra perspectiva",
        img: "https://live.staticflickr.com/2177/5771296297_f1328a6eeb.jpg" 
    },
    {
        name: "Arcano Sin Nombre",
        message: "Dejá morir lo que ya terminó para evolucionar",
        img: "https://live.staticflickr.com/2477/5771840818_e2349fb5d6.jpg" 
    },
    {
        name: "Templanza",
        message: "Encontrá el verdadero sentido",
        img: "https://live.staticflickr.com/3333/5771840542_a0e90d168f.jpg" 
    },
    {
        name: "El Diablo",
        message: "Dejá salir tus deseos y pasiones",
        img: "https://live.staticflickr.com/3595/5771840228_d6e9e1c89a.jpg" 
    },
    {
        name: "La Torre",
        message: "Aquello que se destruyó puede traer algo mejor",
        img: "https://live.staticflickr.com/2622/5771839942_0f48c9da08.jpg" 
    },
    {
        name: "La Estrella",
        message: "Entregate desde tu esencia",
        img: "https://live.staticflickr.com/2211/5771839668_4583852cac.jpg" 
    },
    {
        name: "La Luna",
        message: "No tengas miedo de profundizar",
        img: "https://live.staticflickr.com/3635/5771841074_9be6f3a9d0.jpg" 
    },
    {
        name: "El Sol",
        message: "Apoyate en buena compañía",
        img: "https://live.staticflickr.com/2397/5771299887_7dfb663a5c.jpg" 
    },
    {
        name: "El Juicio",
        message: "Escuchá el llamado y despertá",
        img: "https://live.staticflickr.com/5065/5771299473_d8de74e1cb.jpg" 
    },
    {
        name: "El Mundo",
        message: "Celebrá tus victorias personales",
        img: "https://live.staticflickr.com/3255/5771842194_b78a6abb62.jpg" 
    }
]; 

// FUNCIÓN ORÁCULO
//Al apretar la carta
let cardBtn = document.getElementById("card-btn");
cardBtn.addEventListener("click", throwCard);

    function throwCard () {
        /* const cards = fetch('data.json')
        .then( (res) => res.json()) */

        const result = cards[Math.floor(Math.random()* cards.length)];

        //cambiar imagen e información
        let imageDisplay = document.getElementById("img-container");
        imageDisplay.innerHTML = `<img src= "${result.img}" alt="card-display">`
        //Título
        let title = document.querySelector("h1");
        title.innerText = result.name;
        //Texto
        let message = document.querySelector("p");
        message.innerText = result.message;
        //Refresh button
        let refreshBtn = document.createElement("div");
        let btnContainer = document.getElementById("btn-container");
        btnContainer.appendChild(refreshBtn);
        refreshBtn.innerHTML = `<button type="button" class="bottom-btn">Sacar otra carta</button>`;
        const reload = () => {
            swal({
                title: "¿Estás segurx?",
                text:" Si el mensaje te resonó suficiente, quédate con eso. \n Si te faltó más, sacá otra carta. ", 
                buttons:{
                    cancel: "Ok, me voy a pensar",
                    again: {
                        text: "Quiero más",
                        value: "again",
                    },
                },
            })
            .then((value) => {
                switch (value) {
                    case "again":
                        location.replace("newcard.html");
                        break;
                    }
                });
            };
            refreshBtn.addEventListener("click", reload);
            
            // STORAGE
            sessionStorage.setItem("lastCard", result.name);
            let itemName = sessionStorage.getItem("lastCard");
            // Dom
            let listStorage = document.getElementById("listStorage");
            let listItem = document.createElement("p");
            listStorage.appendChild(listItem);
            // Content
            listItem.innerText = `${itemName}`; 
    };