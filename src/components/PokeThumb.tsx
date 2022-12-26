import { AspectRatio, Text, Flex } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import type { Pokemon } from '../../types/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <Flex
      sx={{
        background: pokemon.color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
      }}
    >
      <Text
        sx={{
          color: 'white',
          alignSelf: 'flex-end',
        }}
      >
        #{pokemon.id.toString().padStart(3, '0')}
      </Text>
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        width={475}
        height={475}
        alt={pokemon.name}
        quality={75}
        priority
        style={{
          alignSelf: 'center',
        }}
      />
      <Text
        sx={{
          color: 'white',
        }}
      >
        {pokemon.name}
      </Text>
    </Flex>
  )
}

export default PokeThumb
