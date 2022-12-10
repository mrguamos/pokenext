import Link from 'next/link'
import React from 'react'
import type { Pokemon } from '../../types/pokemon'
import Pagination from './Pagination'
import PokeThumb from './PokeThumb'

type Props = {
  pokemons: Pokemon[]
}

const HomeComponent = ({ pokemons }: Props) => {
  return (
    <>
      <div className={'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 '}>
        {pokemons.map((pokemon) => {
          return (
            <Link href={`/pokemons/${pokemon.name}`} key={pokemon.id}>
              <PokeThumb pokemon={pokemon} />
            </Link>
          )
        })}
      </div>
      <div className="mt-10">
        <Pagination
          currentPage={1}
          totalPage={10}
          next={() => console.log('next')}
          prev={() => console.log('prev')}
        />
      </div>
    </>
  )
}

export default HomeComponent
