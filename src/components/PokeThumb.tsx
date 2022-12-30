import Image from 'next/image'
import React from 'react'
import type { MyPokemon } from '../../types/pokemon'

type Props = {
  pokemon: MyPokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <div
      className="rounded-lg to-transparent p-5 flex flex-col justify-center"
      style={{
        background: pokemon.color,
      }}
    >
      <span className="self-end text-white">
        #{pokemon.id.toString().padStart(3, '0')}
      </span>
      <div className={`relative aspect-square`}>
        <Image
          src={pokemon.image}
          fill
          alt={pokemon.name}
          quality={75}
          priority
        />
      </div>
      <span className="font-semibold text-white">{pokemon.name}</span>
    </div>
  )
}

export default PokeThumb
