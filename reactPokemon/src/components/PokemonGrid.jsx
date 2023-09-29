import React, { use } from 'react'

async function fetchData(url){
    const res = await fetch(url)
    return res.json()
}

export default function PokemonGrid(){
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    let data
    if (localStorage.getItem('pokemon-cards')){
        data = JSON.parse(localStorage.getItem('pokemon-cards'))
        console.log('FETCHED FROM CACHE', console.log(data))
    } else {
        console.log('FETCHED FROM API')
        data = use(fetchData(url))
        localStorage.setItem('pokemon-cards', JSON.stringify(data))
    }



    return (
        <div>{data?.title}</div>
        
    )
}