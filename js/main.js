const container = document.getElementById('container');
const numeroDePokemons = 150;
const cores = {
    fire: '#A81E02',
    grass: '#85C125',
    electric: '#FEFF01',
    water: '#2D3192',
    ground: '#BD4612',
    fairy: '#FF669C',
    rock: '#5D6162',
    poison: '#741F7C',
    bug: '#FB151F',
    dragon: '#FC6D21',
    psychic: '#044318',
    flying: '#79DAFD',
    fighting: '#C6AC01',
    normal: '#563317'
}

const tipos = Object.keys(cores);
const fetchPokemons = async () => {
    for(let i = 1; i <= numeroDePokemons; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    criaCardPokemon(data);
}

const criaCardPokemon = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_tipos = pokemon.types.map(tipo => tipo.type.name);
    // console.log(tipo)
    const tipo = tipos.find(tipo => poke_tipos.indexOf(tipo) > -1);
    console.log(tipo)
    const cor = cores[tipo];

    pokemonEl.style.backgroundColor = cor;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name} />
    </div>
    <div class="info">
        <span class="numero">#${id}</span>
        <h3 class="nome">${name}</h3>
        <small class="tipo">Tipo: <span>${tipo}</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML;
    container.appendChild(pokemonEl);
}

fetchPokemons();