import Link from 'next/link'
import React from 'react'
import type { IPage, MyPokemon } from '../../types/pokemon'
import PokeThumb from './PokeThumb'
import { useRouter } from 'next/router'
import { Grid, Pagination } from '@nextui-org/react'

type Props = {
  pokemons: MyPokemon[]
  page: IPage
}

const HomeComponent = ({ pokemons, page }: Props) => {
  const router = useRouter()

  const handlePageClick = (page: number) => {
    router.push(`/?page=${page}`)
  }

  return (
    <>
      <Grid.Container gap={2}>
        {pokemons.map((pokemon) => {
          return (
            <Grid
              xs={6}
              sm={4}
              md={3}
              key={pokemon.id}
              justify="center"
              alignItems="center"
            >
              <Link href={`/pokemons/${pokemon.name}`}>
                <PokeThumb pokemon={pokemon} />
              </Link>
            </Grid>
          )
        })}
      </Grid.Container>
      <Pagination
        onChange={handlePageClick}
        color="gradient"
        total={Math.ceil(page.count / 20)}
        css={{
          mt: '$10',
          alignSelf: 'center',
        }}
      />
    </>
  )
}

export default HomeComponent
