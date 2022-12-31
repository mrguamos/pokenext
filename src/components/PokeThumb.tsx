import Image from 'next/image'
import React from 'react'
import type { MyPokemon } from '../../types/pokemon'

type Props = {
  pokemon: MyPokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <div
      className="flex flex-col justify-center rounded-lg to-transparent p-5 text-black"
      style={{
        background: pokemon.color,
      }}
    >
      <span className="self-end ">
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
      <span className="font-semibold">{pokemon.name}</span>
    </div>
  )
}

export default PokeThumb
