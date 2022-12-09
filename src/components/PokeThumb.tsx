import Image from 'next/image'
import React from 'react'
import type { Pokemon } from '../../types/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <div className="relative rounded-lg bg-gradient-radial from-blue-400 to-transparent p-5">
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        width={475}
        height={475}
        alt={pokemon.name}
        quality={75}
      />
    </div>
  )
}

export default PokeThumb
