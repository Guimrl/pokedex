const container = document.getElementById('container');
const numeroDePokemons = 1154;
const cores = {
    fire: '#EE8130',
    grass: '#7AC74C',
    electric: '#F7D02C',
    water: '#6390F0',
    ground: '#E2BF65',
    fairy: '#D685AD',
    rock: '#B6A136',
    poison: '#A33EA1',
    bug: '#A6B91A',
    dragon: '#6F35FC',
    psychic: '#F95587',
    flying: '#79DAFD',
    fighting: '#C22E28',
    normal: '#A8A77A',
    ice: '#96D9D6',
    ghost: '#735797',
    dark: '#705746',
    steel: '#B7B7CE'
}

const tipos = Object.keys(cores);

const fetchPokemons = async () => {
    for (let i = 1; i <= numeroDePokemons; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    criaCardPokemon(data);
}

const criaCardPokemon = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    //puxa todos os tipo de pokemon
    const poke_tipos = pokemon.types.map(tipo => tipo.type.name);
    const tipo = tipos.find(tipo => poke_tipos.indexOf(tipo) > -1);
    const tipo2 = tipos.find(tipo => poke_tipos.indexOf(tipo) > 0);
    const cor = cores[tipo];

    pokemonEl.style.backgroundColor = cor;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${nome}">
    </div>
    <div class="info">
        <span class="numero">#${id}</span>
        <h3 class="nome">${nome}</h3>
        <small class="tipo"><span>${poke_tipos[0]}</span></small>
        <small class="tipo2"><span>${poke_tipos[1]}</span></small>
    </div>
    `
    // const classTipo2 = document.querySelector("small.tipo2")
    // console.log(classTipo2)
    // if(tipo2 == undefined) {
    //     return classTipo2.style.display = 'none';
    // }
    // if (pokemon.types[1] === undefined) {
    //     classTipo2.style.display = 'none';
    // }        
    // if(poke_tipos[1] === undefined) {
    //     document.querySelector('small.tipo2').style.display = 'none'
    // }
    // console.log(pokemon.id = 1)



    pokemonEl.innerHTML = pokemonInnerHTML;

    container.appendChild(pokemonEl);
}

fetchPokemons();
