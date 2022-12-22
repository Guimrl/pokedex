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

console.log(fetchPokemons());