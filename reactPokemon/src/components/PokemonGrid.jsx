import React, { use , useState } from 'react'
import styles from './pokemongrid.module.css'

async function fetchData(url){
    const res = await fetch(url)
    return res.json()
}

export default function PokemonGrid(props){
    const {handleSelectPokemon} = props
    const [search, setSearch]= useState('')
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    let data
    if (localStorage.getItem('pokemon-cards')) {
        data = JSON.parse(localStorage.getItem('pokemon-cards'))
        console.log('fetched from CACHE', console.log(data))
    } else {
        console.log('fetched from API')
        data = use(fetchData(url))
        localStorage.setItem('pokemon-cards', JSON.stringify(data))
    }




    return (
        <div className={styles.pokemonGrid}>
            <h1 className={styles.header}>My Pokemon</h1>
            <div className={styles.listContainer}>
                <input placeholder='Search Pokemon' value={search} onChange={(e) => setSearch
            (e.target.value)}/>
            {data.results.filter(val => {
                return val.name.includes(search)
            })
            .map((pokemon, pokemonIndex) => {
                return (
                    <div onClick={handleSelectPokemon(pokemon)} className={styles.pokemon} key={pokemonIndex}>
                        {pokemon.name}
                    </div>
                )
            })}
            </div>
        </div>
    )
}