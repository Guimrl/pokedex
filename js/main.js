const container = document.getElementById('container');
const numeroDePokemons = 150;
const cores = {
    fogo: '#A81E02',
    grama: '#85C125',
    eletrico: '#FEFF01',
    agua: '#2D3192',
    terra: '#BD4612',
    fada: '#FF669C',
    veneno: '#741F7C',
    inseto: '#FB151F',
    dragao: '#FC6D21',
    psiquico: '#044318',
    voador: '#79DAFD',
    lutador: '#C6AC01',
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
    const tipo = tipos.find(tipo => poke_tipos.indexOf(tipo) > -1);
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