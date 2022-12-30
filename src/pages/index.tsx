import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import pokeHandler from '../../services/pokeapi'
import type { IPage, MyPokemon, Pokemon, Results } from '../../types/pokemon'
import HomeComponent from '../components/HomeComponent'
import Vibrant from 'node-vibrant'

async function getPokemons(page: string | string[] = '1'): Promise<Results> {
  const results = await pokeHandler(
    `pokemon/?limit=20&offset=${(+page - 1) * 20}`
  )
  const resultsJson: Results = await results.json()
  return resultsJson
}

interface IProps {
  pokemons: MyPokemon[]
  page: IPage
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({
  res,
  query,
}) => {
  res.setHeader('Cache-Control', 'public, s-maxage=31536000')
  const result = await getPokemons(query.page)
  const responses: Promise<Response>[] = result.results.map((r) => {
    return pokeHandler(`pokemon/${r.name}`)
  })
  const promises = await Promise.all(responses)

  const pokemonsJsons: Promise<Pokemon>[] = promises.map((r) => {
    return r.json()
  })
  const _pokemons = await Promise.all(pokemonsJsons)
  const pokemons = await Promise.all(
    _pokemons.map(async (p): Promise<MyPokemon> => {
      const pallete = await Vibrant.from(
        p.sprites.other['official-artwork'].front_default
      ).getPalette()
      const color = `linear-gradient(to top, ${pallete.Muted?.hex} , ${pallete.LightMuted?.hex})`
      return {
        name: p.name,
        id: p.id,
        color,
        image: p.sprites.other['official-artwork'].front_default,
      }
    })
  )
  const page: IPage = {
    count: result.count,
    currentPage: Number(query.page) || 1,
  }
  return {
    props: {
      pokemons,
      page,
    },
  }
}

export default function Home({
  pokemons,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <HomeComponent pokemons={pokemons} page={page} />
}
