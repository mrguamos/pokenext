import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import resolveConfig from 'tailwindcss/resolveConfig'
import type { KeyValuePair } from 'tailwindcss/types/config'
import tailwindConfig from '../../tailwind.config.cjs'

type Props = {
  totalPage: number
  currentPage: number
  next?: () => void
  prev?: () => void
}

const PaginationButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="mx-[3px] min-w-[35px] rounded-xl bg-slate-800 py-2 hover:bg-slate-700">
      {children}
    </button>
  )
}

const fullConfig = resolveConfig(tailwindConfig)
const screens = fullConfig.theme?.screens as KeyValuePair<string, string>
const Pagination = (props: Props) => {
  return (
    <nav aria-label="pagination" className="bg-transparent">
      <ul
        className={
          'inline-flex items-center justify-center text-sm text-white '
        }
      >
        <li>
          <button className="mx-[3px] min-w-[35px] rounded-xl bg-slate-800 py-2 hover:bg-slate-700">
            &lt;
          </button>
        </li>
        <li>
          <PaginationButton>1</PaginationButton>
        </li>
        <li>
          <PaginationButton>2</PaginationButton>
        </li>
        <li>
          <PaginationButton>3</PaginationButton>
        </li>
        <li>
          <PaginationButton>4</PaginationButton>
        </li>
        <li>
          <PaginationButton>5</PaginationButton>
        </li>
        <li>
          <button className="mx-[3px] min-w-[35px] rounded-xl bg-slate-800 py-2 hover:bg-slate-700">
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
