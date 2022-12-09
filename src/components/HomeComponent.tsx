import React from 'react'
import type { Pokemon } from '../../types/pokemon'
import PokeThumb from './PokeThumb'

type Props = {
  pokemons: Pokemon[]
}

const HomeComponent = ({ pokemons }: Props) => {
  return (
    <>
      <div className={'grid w-full grid-cols-4 gap-4 '}>
        {pokemons.map((pokemon) => {
          return <PokeThumb pokemon={pokemon} key={pokemon.id} />
        })}
      </div>
    </>
  )
}

export default HomeComponent
