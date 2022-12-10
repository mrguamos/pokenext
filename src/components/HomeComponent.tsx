import React from 'react'
import type { Pokemon } from '../../types/pokemon'
import PokeThumb from './PokeThumb'

type Props = {
  pokemons: Pokemon[]
}

const HomeComponent = ({ pokemons }: Props) => {
  return (
    <>
      <div className={'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 '}>
        {pokemons.map((pokemon) => {
          return <PokeThumb pokemon={pokemon} key={pokemon.id} />
        })}
      </div>
    </>
  )
}

export default HomeComponent
