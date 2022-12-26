import Link from 'next/link'
import React from 'react'
import type { IPage, Pokemon } from '../../types/pokemon'
import Pagination from './Pagination'
import PokeThumb from './PokeThumb'
import { useRouter } from 'next/router'
import { SimpleGrid } from '@mantine/core'

type Props = {
  pokemons: Pokemon[]
  page: IPage
}

const HomeComponent = ({ pokemons, page }: Props) => {
  const router = useRouter()

  const handlePageClick = () => {
    //
  }

  return (
    <>
      <SimpleGrid
        sx={{
          width: '100%',
        }}
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 3 },
          { maxWidth: 'sm', cols: 2 },
        ]}
      >
        {pokemons.map((pokemon) => {
          return <PokeThumb pokemon={pokemon} key={pokemon.id} />
        })}
      </SimpleGrid>
    </>
  )
}

export default HomeComponent
