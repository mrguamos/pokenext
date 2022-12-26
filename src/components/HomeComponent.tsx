import Link from 'next/link'
import React from 'react'
import type { IPage, Pokemon } from '../../types/pokemon'
import Pagination from './Pagination'
import PokeThumb from './PokeThumb'
import { useRouter } from 'next/router'

type Props = {
  pokemons: Pokemon[]
  page: IPage
}

const HomeComponent = ({ pokemons }: Props) => {
  const router = useRouter()

  const handlePageClick = () => {
    //
  }

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
      <div className="mt-10"></div>
    </>
  )
}

export default HomeComponent
