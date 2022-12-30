import Image from 'next/image'
import React from 'react'
import type { MyPokemon } from '../../types/pokemon'

type Props = {
  pokemon: MyPokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <div
      className={`relative flex aspect-square flex-col justify-center rounded-lg to-transparent p-5`}
      style={{
        background: pokemon.color,
      }}
    >
      <span className="self-end text-white">
        #{pokemon.id.toString().padStart(3, '0')}
      </span>
      <Image
        src={pokemon.image}
        width={475}
        height={475}
        alt={pokemon.name}
        quality={75}
        priority
        className="self-center"
      />
      <span className="font-semibold text-white">{pokemon.name}</span>
    </div>
  )
}

export default PokeThumb
