import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { type NextPage } from 'next'
import pokeHandler from '../../services/pokeapi'
import type { Pokemon, Results } from '../../types/pokemon'
import HomeComponent from '../components/HomeComponent'

async function getPokemons(page: string | string[] = '1'): Promise<Pokemon[]> {
  const results = await pokeHandler(
    `pokemon/?limit=20&offset=${(+page - 1) * 20}`
  )
  const resultsJson: Results = await results.json()
  const responses: Promise<Response>[] = resultsJson.results.map((r) => {
    return pokeHandler(`pokemon/${r.name}`)
  })
  const promises = await Promise.all(responses)

  const pokemonsJsons: Promise<Pokemon>[] = promises.map((r) => {
    return r.json()
  })
  const pokemons = await Promise.all(pokemonsJsons)
  return pokemons
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader('Cache-Control', 's-maxage=99999999999')
  const pokemons = await getPokemons(query.page)
  return {
    props: {
      pokemons,
    },
  }
}

const Home: NextPage = ({
  pokemons,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <HomeComponent pokemons={pokemons} />
}

export default Home
