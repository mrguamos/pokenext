import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

type Props = {
  totalPage: number
  currentPage: number
  next: () => void
  prev: () => void
}

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
