import Image from 'next/image'
import React from 'react'
import type { Pokemon } from '../../types/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <div className="relative flex aspect-square flex-col items-center justify-center rounded-lg bg-gradient-radial from-slate-900 to-transparent p-5 hover:cursor-pointer">
      {/* <span className="font-semibold text-white">
        #{pokemon.id.toString().padStart(3, '0')}
      </span> */}
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        fill
        alt={pokemon.name}
        quality={75}
        priority
      />
      {/* <span className="font-semibold text-teal-400">
        {pokemon.name.toUpperCase()}
      </span> */}
    </div>
  )
}

export default PokeThumb
