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
 
  const containerIcon = document.querySelector(".icons");

  //aggiungiamo dei colori come da milestone 2
  //inseriamo le icone nel container come da milestone 2
  const iconeColored = icone.map((elemento) => {
    //console.log(elemento);
    //rispetto la milestone 2 nel metodo .map prima destrutturo l'elemento
    let {name , prefix , type ,family} = elemento;
    //dopo averlo destrutturato utilizio l'operatore ternario per utilizzare la forma contratta sostituendo i condizionali if/else.
    let colore = (family === "animali") ? "blue": (family === "vegetali") ? "orange":"purple";
    
    let coloredElement = {...elemento , color : colore}
    //console.log(coloredElement);
    return coloredElement
    
  });
  console.log(iconeColored);
  
  stampaOggettoColorato(iconeColored , containerIcon);

  //estrapoliamo i tipi di icone

  

  //aggiungiamo i tipi alla select
  const containerSelect = document.getElementById("type");
  containerSelect.innerHTML += `
  <option>Animali</option>
  <option>Vegetali</option>
  <option>Utenti</option>
`;
var indexFamily = iconeColored.find(elemento => elemento.family === "hhh");
console.log(indexFamily);

//   let arr = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// let obj = arr.find(o => o.name === 'string 1');

// console.log(obj);

  //al change mostriamo solo le icone filtrate

  containerSelect.addEventListener("change", event => {
    
    //creare una costante rappresentante di un nuovo array filtrato per famiglie che cambierà al change dell'evento
    const iconeFiltrate = iconeColored.filter(elemento => {
      
      return elemento.family = indexFamily;
      console.log(iconeFiltrate);
    });
    
    //console.log(iconeFiltrate);
  })
  //console.log(containerSelect);

  
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/
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

});
