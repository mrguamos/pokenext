import Link from 'next/link'
import React from 'react'
import type { IPage, MyPokemon } from '../../types/pokemon'
import ReactPaginate from 'react-paginate'
import PokeThumb from './PokeThumb'
import { useRouter } from 'next/router'
import { GrNext, GrPrevious } from 'react-icons/gr'

type Props = {
  pokemons: MyPokemon[]
  page: IPage
}

const HomeComponent = ({ pokemons, page }: Props) => {
  const router = useRouter()

  const handlePageClick = ({ selected }: { selected: number }) => {
    router.push(`/?page=${selected + 1}`)
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
        <ReactPaginate
          initialPage={page.currentPage - 1}
          className="inline-flex items-center text-sm font-semibold text-white"
          activeClassName="bg-blue-500"
          activeLinkClassName="bg-blue-500"
          pageClassName="ml-2 bg-slate-900 rounded-lg hover:brightness-150"
          pageLinkClassName="inline-flex justify-center w-10 h-10 items-center rounded-lg"
          breakLabel="..."
          breakClassName="ml-2 bg-slate-900 hover:brightness-150 rounded-lg"
          breakLinkClassName="inline-flex justify-center w-10 h-10 items-center rounded-lg"
          nextClassName="ml-2 bg-slate-900 hover:brightness-150 rounded-lg"
          nextLinkClassName="inline-flex justify-center w-10 h-10 items-center rounded-lg"
          previousClassName="bg-slate-900 hover:brightness-150 rounded-lg"
          previousLinkClassName="inline-flex justify-center w-10 h-10 items-center rounded-lg"
          nextLabel={<GrNext className="gr-white" />}
          previousLabel={<GrPrevious className="gr-white" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(page.count / 20)}
          renderOnZeroPageCount={undefined}
        />
      </div>
    </>
  )
}

export default HomeComponent
