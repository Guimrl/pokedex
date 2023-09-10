import  { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Card from './componentes/Card'
import Color from './enum/Color'

const H1 = styled.h1`
  letter-spacing: 3px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 100%;
`

const App = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemons: any[] = [];
        const numberOfPokemonToFetch = 151;

        // while (pokemons.length < numberOfPokemonToFetch) {
        //   const randomId = Math.floor(Math.random() * 151) + 1
        //   if (!pokemons.includes(randomId)) {
        //     pokemons.push(randomId)
        //   }
        // }

        for (let i = 1; i <= numberOfPokemonToFetch; i++) {
            if (!pokemons.includes(i)) {
            pokemons.push(i);
          }
        }

        const pokemonData = await Promise.all(
          pokemons.map(async id => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            return data;
          })
        )

        setPokemons(pokemonData)
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <H1>Pokédex</H1>
      <Container>
        {pokemons.map((pokemon: any, index: any) => {
          const id = pokemon.id;
          const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
          const types = pokemon.types.map((type: any) => type.type.name);
          const type = types.find((type: any) => types.indexOf(type) === 0);
          //@ts-ignore
          const color = Color[type];
          
          return <Card key={index} id={id} name={name} type={types} color={color} />
        })}
      </Container>
    </>
  )
}

export default App
