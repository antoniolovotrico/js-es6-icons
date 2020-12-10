$(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const icone = [
    {
      name : "gatto",
      prefix : "fas",
      type : "fa-cat",
      family : "animali"
    },
    {
      name : "pesce",
      prefix : "fas",
      type : "fa-fish",
      family : "animali"
    },
    {
      name : "cane",
      prefix : "fas",
      type : "fa-dog",
      family : "animali"
    },
    {
      name : "cavallo",
      prefix : "fas",
      type : "fa-horse",
      family : "animali"
    },
    {
      name : "drago",
      prefix : "fas",
      type : "fa-dragon",
      family : "animali"
    },
    {
      name : "ippopotamo",
      prefix : "fas",
      type : "fa-hippo",
      family : "animali"
    },
    {
      name : "colomba",
      prefix : "fas",
      type : "fa-dove",
      family : "animali"
    },
    {
      name : "corvo",
      prefix : "fas",
      type : "fa-crow",
      family : "animali"
    },
    {
      name : "carota",
      prefix : "fas",
      type : "fa-carrot",
      family : "vegetali"
    },
    {
      name : "limone",
      prefix : "fas",
      type : "fa-lemon",
      family : "vegetali"
    },
    {
      name : "mela",
      prefix : "fas",
      type : "fa-apple-alt",
      family : "vegetali"
    },
    {
      name : "Peperoncino",
      prefix : "fas",
      type : "fa-pepper-hot",
      family : "vegetali"
    },
    {
      name : "Ninja",
      prefix : "fas",
      type : "fa-user-ninja",
      family : "utenti"
    },
    {
      name : "Agente",
      prefix : "fas",
      type : "fa-user-secret",
      family : "utenti"
    },
    {
      name : "Laureato",
      prefix : "fas",
      type : "fa-user-graduate",
      family : "utenti"
    },
    {
      name : "Astronauta",
      prefix : "fas",
      type : "fa-user-astronaut",
      family : "utenti"
    }
  ];

  const containerIcon = document.getElementById("icons");
  
  icone.forEach(icon => {
  
    containerIcon.innerHTML += `
    <div>
        <i class="${icon.prefix} ${icon.type}"></i>
        <div class="title">${icon.name}</div>
    </div>
    `; 
 });

  // definiamo dei colori per le icone (blue, orange, purple)
const user = icone.map((index) => {
  console.log(index);
  if (index.family === "animali") {
    return "blue";
  }else if (index.family === "vegetali") {
    return "orange";
  }else {
    return "purple"
  }
});
console.log(user);




  //aggiungiamo dei colori usando una funzione


  //inseriamo le icone colorate nel container

});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
