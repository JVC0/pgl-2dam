import Pokemon from "./pokemon.js";

const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const pokedex = document.querySelector("#pokedex");
const start = document.querySelector("#start");
const barradebuscar = document.querySelector(".buscadord");
const modal = document.querySelector(".modal");
const barra = document.querySelector(".loadingbar");
const loading = document.querySelector(".loading");
const numero = document.querySelector(".numero");
let pokemons = [];

const obtenerPokemon = (busqueda) => {
    const texto = String(busqueda).trim().toLowerCase();
    const tipo = document.querySelector('input[name="option"]:checked').value;

    const lista =
        tipo === "all"
            ? pokemons
            : pokemons.filter(
                  (p) => p.pkm_tipo1 === tipo || p.pkm_tipo2 === tipo,
              );

    const exacto = lista.find((pokemon) => pokemon.name === texto);
    if (exacto)return [exacto];

    const id = Number(texto);
    if (texto !== "" && Number.isInteger(id)) {
        const porId = lista.find((pokemon) => pokemon.id === id);
        if (porId)return[porId];
            
    }
    const empizapor =lista.filter((p) => p.name.startsWith(texto))
    return empizapor;
};

const startPokedex = async () => {
    barra.value = 0;
    loading.style.display = "flex";
    for (let i = 1; i <= 151; i++) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await result.json();
        pokemons.push(new Pokemon(data));
        barra.value = i;
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
    numero.innerHTML = `<div>${pokemons.length}</div>`
    loading.style.display = "none";
    showPokedex();
};

start.addEventListener("click", async () => {
    start.style.display = "none";
    await startPokedex();
    barradebuscar.style.visibility = "visible";
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const encontrados = obtenerPokemon(inputBusqueda.value);
    numero.innerHTML = `<div>${encontrados.length}</div>`
    if (encontrados.length == 0) {
        mensaje.textContent = "No se encontró ningún Pokémon.";
        pokedex.innerHTML = "";
        return;
    }
    
    mensaje.textContent = "";
    try {
        pokedex.innerHTML = encontrados.map(crearTarjeta).join("");
    } catch (error) {
         mensaje.textContent = "No se encontró ningún Pokémon.";
        pokedex.innerHTML = "";
    }
    
});

const showPokedex = () => {
    pokedex.innerHTML = pokemons.map(crearTarjeta).join("");
};

pokedex.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".verdetalle");
    if (!boton) return;

    const pokemon = pokemons.find((p) => p.id === Number(boton.dataset.id));
    if (!pokemon) return;

    modal.innerHTML = `<div class="modal-content">${crearmodal(pokemon)}</div>`;
    modal.style.display = "flex";
});

modal.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("close") || evento.target === modal) {
        modal.style.display = "none";
    }
});

const crearmodal = (pokemon) => {
    const singleTypeClass = isSingleType(pokemon.pkm_tipo1, pokemon.pkm_tipo2)
        ? "single-type"
        : "";
    const { hp, attack, defense, special_attack, special_defense, speed } =
        pokemon.pkm_stats;
    const abilities = pokemon.pkm_abilities
        .map((item) => item.ability.name)
        .join(", ");
    return `<span class="close">&times;</span>
                    <div class="pkmname">
                    ${pokemon.id}. ${pokemon.name}<br>
                </div>
                    <img class="pkmart" src="${pokemon.pkm_front}">
                    <div class="type ${singleTypeClass}" style="background-color: ${getColorByType(pokemon.pkm_tipo1)};">
                    ${pokemon.pkm_tipo1}
                </div>
                <div class="type ${singleTypeClass}" style="background-color: ${getColorByType(pokemon.pkm_tipo2)}; opacity: ${NoEmptyTypes(pokemon.pkm_tipo2)};">
                    ${pokemon.pkm_tipo2}
                </div>
                <div class="abilities">${abilities}</div>
                    <div class="stats">
                        <div class="hp">hp:${hp}</div>
                        <div class="attack">attack:${attack}</div>
                        <div class="defense">defense: ${defense}</div>
                        <div class="special-attack">special attack: ${special_attack}</div>
                        <div class="special-defense">special defense :${special_defense}</div>
                        <div class="speed">speed:${speed}</div>
                    </div>`;
};

const crearTarjeta = (pokemon) => {
    const singleTypeClass = isSingleType(pokemon.pkm_tipo1, pokemon.pkm_tipo2)
        ? "single-type"
        : "";

    return `<div class="card">
                <div class="idname">
                    ${pokemon.id}. ${pokemon.name}<br>
                </div>
                <br>
                <img src="${pokemon.pkm_back}">
                <img src="${pokemon.pkm_sback}">
                <img class="front" src="${pokemon.pkm_front}">
                <img class="front" src="${pokemon.pkm_sfront}">
                <br>
                <div class="type ${singleTypeClass}" style="background-color: ${getColorByType(pokemon.pkm_tipo1)};">
                    ${pokemon.pkm_tipo1}
                </div>
                <div class="type ${singleTypeClass}" style="background-color: ${getColorByType(pokemon.pkm_tipo2)}; opacity: ${NoEmptyTypes(pokemon.pkm_tipo2)};">
                    ${pokemon.pkm_tipo2}
                </div>
                <div>
                <button class="verdetalle" data-id="${pokemon.id}">Ver detalle</button>
                </div>
                <div class="phy">
                    <div class="size">
                        height: ${pokemon.pkm_height / 10} m
                        weight: ${pokemon.pkm_weight / 10} kg
                    </div>
                </div>
            </div>`;
};
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
            return "#8899FF";
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
