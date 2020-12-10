$(function () {
 // icone come da milestone 1

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

  // colori come da milestone 2
 
  const containerIcon = document.getElementById("icons");

  //aggiungiamo dei colori come da milestone 2
  //inseriamo le icone nel container come da milestone 2
  const colors = icone.map((index) => {
    console.log(index);
    if (index.family === "animali") {
      return containerIcon.innerHTML += `
      <div>
        <i class="${index.prefix} ${index.type}" style="color:blue"></i>
        <div class="title">${index.name}</div>
    </div>
    `; 
    }else if (index.family === "vegetali") {
      return containerIcon.innerHTML += `
      <div>
        <i class="${index.prefix} ${index.type}" style="color:orange"></i>
        <div class="title">${index.name}</div>
    </div>
    `;
    }else {
      return containerIcon.innerHTML += `
      <div>
        <i class="${index.prefix} ${index.type}" style="color:purple"></i>
        <div class="title">${index.name}</div>
    </div>
    `;
    }
  });

  //estrapoliamo i tipi di icone

  

  //aggiungiamo i tipi alla select
  const containerSelect = document.getElementById("type");
  containerSelect.innerHTML += `
  <option>Animali</option>
  <option>Vegetali</option>
  <option>Utenti</option>
`;


  //al change mostriamo solo le icone filtrate

  
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/

});