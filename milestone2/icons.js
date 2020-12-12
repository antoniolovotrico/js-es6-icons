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

  const containerIcon = document.querySelector(".icons");
  
  
  // definiamo dei colori per le icone (blue, orange, purple)
  //aggiungiamo dei colori usando una funzione
  //inseriamo le icone colorate nel container
  const iconeColored = icone.map((elemento) => {
    //console.log(elemento);
    if (elemento.family === "animali") {
      var colore = "blue";
    }else if (elemento.family === "vegetali") {
      var colore = "orange";
    }else {
      var colore = "purple";
    }
    let coloredElement = {...elemento , color : colore}
    //console.log(coloredElement);
    return coloredElement
    
  });
  console.log(iconeColored);
  
  stampaOggettoColorato(iconeColored , containerIcon);

});



/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1

function stampaOggetto (arrSelection,contenitore) {
  arrSelection.forEach(elemento => {
    //Destrutturare l'elemento 
    const {name , prefix , type} = elemento;
    //Stampiamo la funzione in Html utilizzando la proprietà JavaScrip .innerHTML ed il Template Literals
    contenitore.innerHTML += `
    <div>
        <i class="${prefix} ${type}" style="color:blue"></i>
        <div class="title">${name}</div>
    </div>
    `; 
});
}


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 
function stampaOggettoColorato (arrSelection,contenitore) {
  arrSelection.forEach(elemento => {
    //Destrutturare l'elemento 
    const {name , prefix , type , color} = elemento;
    //Stampiamo la funzione in Html utilizzando la proprietà JavaScrip .innerHTML ed il Template Literals
    contenitore.innerHTML += `
    <div>
        <i class="${prefix} ${type}" style="color:${color}"></i>
        <div class="title">${name}</div>
    </div>
    `; 
});
}


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
