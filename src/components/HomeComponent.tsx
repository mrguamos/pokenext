import Link from 'next/link'
import React from 'react'
import type { IPage, MyPokemon } from '../../types/pokemon'
import PokeThumb from './PokeThumb'
import { useRouter } from 'next/router'
import { GrNext, GrPrevious } from 'react-icons/gr'
import {
  Pagination,
  PageButton,
  PrevButton,
  NextButton,
} from 'react-headless-pagination'

type Props = {
  pokemons: MyPokemon[]
  page: IPage
}

const HomeComponent = ({ pokemons, page }: Props) => {
  const router = useRouter()

  const handlePageClick = (page: number) => {
    router.push(`/?page=${page + 1}`)
  }

  return (
    <>
      <div className={'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
        {pokemons.map((pokemon) => {
          return (
            <Link href={`/pokemons/${pokemon.name}`} key={pokemon.id}>
              <PokeThumb pokemon={pokemon} />
            </Link>
          )
        })}
      </div>
      <div className="mt-10"></div>
      <div className="text-center">
        <Pagination
          className="inline-flex h-10 w-fit select-none items-center justify-center text-sm"
          currentPage={page.currentPage - 1}
          edgePageCount={1}
          middlePagesSiblingCount={1}
          setCurrentPage={handlePageClick}
          totalPages={Math.ceil(page.count / 20)}
          truncableClassName="text-white"
          truncableText="..."
        >
          <PrevButton className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-700 bg-opacity-0 hover:bg-opacity-100">
            <GrPrevious className="gr-white" />
          </PrevButton>
          <PageButton
            activeClassName="bg-blue-600 hover:brightness-150"
            className="ml-1 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white "
            inactiveClassName="bg-slate-700 bg-opacity-0 hover:bg-opacity-100"
          />
          <NextButton className="ml-1 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-700 bg-opacity-0 hover:bg-opacity-100">
            <GrNext className="gr-white" />
          </NextButton>
        </Pagination>
      </div>
    </>
  )
}

export default HomeComponent
