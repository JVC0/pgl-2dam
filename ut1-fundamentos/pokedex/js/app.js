// Importamos la clase Pokemon desde el archivo Pokemon.js
import Pokemon from "./pokemon.js";

// Creamos un array para los 151 pokemons que obtendremos desde la API
var pokemons = [];

// Seleccionamos el elemento button del DOM usando querySelector
const button = document.querySelector("button");
// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", async () => {
  // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
  document.querySelector("#button").style.visibility = "hidden";

  // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
  await startPokedex();
  // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
  document.querySelector("#pokedex").style.visibility = "visible";
});

// Función asíncrona que va a realizar operaciones con promesas para realizar la llamada a la API
const startPokedex = async () => {
  // Bucle for que itera desde 1 hasta 151, que son los primeros 151 Pokemon
  for (var i = 1; i <= 151; i++) {
    // Utilizamos fetch para hacer una solicitud a la API donde i representa el número de Pokemon
    await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
      .then(function (result) {
        return result.json();
        // Convertimos la respuesta de la API en un objeto JSON
      })
      .then(function (result) {
        const data = result;
        const pokemon = new Pokemon(data);
        pushPokemon(pokemon);
        //Guardamos el resultado en data y creamos una nueva instancia de Pokemon con los datos obtenidos
        // almacenamos los resultados en el array
        // console.log(pokemon);
      });
  }
  // Una vez que todos los Pokemon se han añadido al array, llamamos a la función showPokedex
  await showPokedex();
};

// Esta función añade el Pokemon que se le pasa como parámetro al array
function pushPokemon(pokemon) {
  pokemons.push(pokemon);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array
const showPokedex = async () => {
  // Se obtiene una referencia al elemento con el ID pokedex en el DOM donde se insertarán las tarjetas de los Pokemon.
  const pokedex = document.getElementById("pokedex");
  // Iteramos sobre cada elemento del array pokemons
  for (var i = 0; i < pokemons.length; i++) {
    var aux = 0;
    while (aux != pokemons[i].pkm_type.length) {
      if (aux == 0) var tipo1 = pokemons[i].pkm_type[aux].type.name;
      if (aux == 1) var tipo2 = pokemons[i].pkm_type[aux].type.name;
      else tipo2 = "";
      aux++;
    }
    function getColorByType(type) {
      switch (type) {
        case "fire":
          return "#ff4422";
        case "water":
          return "#3399ff";
        case "electric":
          return "#ffcc33";
        case "grass":
          return "#77cc55";
        case "ice":
          return "#66ccff";
        case "fighting":
          return "#bb5544";
        case "poison":
          return "#aa5599";
        case "ground":
          return "#ddbb55";
        case "flying":
          return "#8899ff";
        case "psychic":
          return "#ff5599";
        case "bug":
          return "#aabb22";
        case "rock":
          return "#bbaa66";
        case "ghost":
          return "#6666bb";
        case "dragon":
          return "#7766ee";
        case "dark":
          return "#775544";
        case "steel":
          return "#aaaabb";
        case "fairy":
          return "#ee99ee";
        default:
          return "#aaaa99";
      }
    }

    function NoEmptyTypes(tipo) {
      return tipo === "" ? "0" : "1";
    }

    function isSingleType(tipo1, tipo2) {
      return (tipo1 !== "" && tipo2 === "") || (tipo1 === "" && tipo2 !== "");
    }

    const singleTypeClass = isSingleType(tipo1, tipo2) ? "single-type" : "";

    // Ejemplo de uso en tu código
    const tipo1Color = getColorByType(tipo1);
    const tipo2Color = getColorByType(tipo2);

    pokedex.innerHTML += `<div class="card">
                        <div class="idname">
                            ${pokemons[i].id}. ${pokemons[i].name}<br>
                        </div>
                        <br>
                        <img src="${pokemons[i].pkm_back}">
                        <img src="${pokemons[i].pkm_sback}">
                        <img class="front" src="${pokemons[i].pkm_front}">
                        <img class="front" src="${pokemons[i].pkm_sfront}">
                        
                        <br>
                        
                        <div class="type ${singleTypeClass}" style="background-color: ${tipo1Color};">
                            ${tipo1}
                        </div>
                        <div class="type ${singleTypeClass}" style="background-color: ${tipo2Color}; opacity: ${NoEmptyTypes(tipo2)};">
                            ${tipo2}
                        </div>

                        <div class="phy">
                            <div class="size">
                                height: ${pokemons[i].pkm_weight}
                                weight: ${pokemons[i].pkm_height}
                            </div>
                        </div>
                    </div>`;
  }
};
