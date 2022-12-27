import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next'
import { type NextPage } from 'next'
import pokeHandler from '../../../services/pokeapi'
import { Pokemon } from '../../../types/pokemon'

async function getPokemon(
  id: string | string[] | undefined
): Promise<Pokemon | undefined> {
  if (id) {
    const result = await pokeHandler(`pokemon/${id}`)
    const pokemon: Pokemon = await result.json()
    return pokemon
  }
  return undefined
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemon = await getPokemon(params?.id)
  if (pokemon) {
    return {
      props: {
        pokemon,
      },
    }
  }
  return {
    notFound: true,
  }
}

const Pokemon: NextPage = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  return (
    <>
      <div className="h-96 w-96"></div>
    </>
  )
}

export default Pokemon
