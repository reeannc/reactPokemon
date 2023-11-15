import React, {use} from 'react'
import styles from './pokemoncard.module.css'

async function fetchData(url){
    const res = await fetch(url)
    return res.json()
}

export default function PokemonCard(props){
    const {selectedPokemon, clearHandler, parentUrl} = props
    const pokemonUrl = parentUrl + selectedPokemon
    const data = use(fetchData(pokemonUrl))
    console.log(data)

    return (
        <div className={styles.card}>
            <div className={styles.headerBar}>
                <h4>
                    {selectedPokemon}
                </h4>
                <div onClick={clearHandler}>x</div>
            </div>
            <img src={data.sprites.front_default} alt={selectedPokemon}/>
            <h5>Stats</h5>
                {data.stats.map((stat, statIndex) => {
                    return (
                        <div key={statIndex}>
                            <p><b>{stat.stat.name}</b> {stat.base_stat}
                            </p>
                        </div>
                    )
                } )}
        </div>
    )
}