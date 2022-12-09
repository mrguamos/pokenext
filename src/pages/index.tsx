import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { type NextPage } from 'next'
import Head from 'next/head'
import pokeHandler from '../../services/pokeapi'
import type { Pokemon, Results } from '../../types/pokemon'
import HomeComponent from '../components/HomeComponent'

async function getPokemons(limit = 20, offset = 0): Promise<Pokemon[]> {
  const results = await pokeHandler(`pokemon/?limit=${limit}&offset=${offset}`)
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

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await getPokemons()
  return {
    props: {
      pokemons,
    },
    revalidate: 10,
  }
}

const Home: NextPage = ({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent pokemons={pokemons} />
    </>
  )
}

export default Home
