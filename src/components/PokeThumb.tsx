import Image from 'next/image'
import React from 'react'
import type { Pokemon } from '../../types/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <div className="relative flex aspect-square flex-col  justify-center rounded-lg bg-gradient-radial from-slate-900 to-transparent p-5">
      <span className="font self-end text-white">
        #{pokemon.id.toString().padStart(3, '0')}
      </span>
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        width={475}
        height={475}
        alt={pokemon.name}
        quality={75}
        priority
        className="self-center"
      />
      <span className="font-semibold text-teal-400">{pokemon.name}</span>
    </div>
  )
}

export default PokeThumb
