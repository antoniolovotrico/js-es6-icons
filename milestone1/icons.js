$(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 

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
  ]
  // <i class="fas fa-cat"></i>
  // <i class="fas fa-fish"></i>
  // <i class="fas fa-dog"></i>
  // <i class="fas fa-horse"></i>
  // <i class="fas fa-dragon"></i>
  // <i class="fas fa-hippo"></i>
  // <i class="fas fa-dove"></i>
  // <i class="fas fa-crow"></i>
  // <i class="fas fa-carrot"></i>
  // <i class="fas fa-lemon"></i>
  // <i class="fas fa-apple-alt"></i>
  // <i class="fas fa-pepper-hot"></i>
  // <i class="fas fa-user-ninja"></i>
  // <i class="fas fa-user-graduate"></i>
  // <i class="fas fa-user-secret"></i>
  // <i class="fas fa-user-astronaut"></i>

  // Selezioniamo il container icons

  const containerIcon = document.getElementById("icons");


  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

icone.forEach(icon => {
  
   containerIcon.innerHTML += `
   <div>
       <i class="${icon.prefix} ${icon.type}" style="color:blue"></i>
       <div class="title">${icon.name}</div>
   </div>
   `; 
});

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

