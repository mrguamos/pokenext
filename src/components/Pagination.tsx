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

const fullConfig = resolveConfig(tailwindConfig)
const screens = fullConfig.theme?.screens as KeyValuePair<string, string>
const Pagination = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-center text-white">
      <FaAngleLeft className="h-10 w-7" />
      <span>1</span>
      <FaAngleRight className="h-10 w-7" />
    </div>
  )
}

export default Pagination
