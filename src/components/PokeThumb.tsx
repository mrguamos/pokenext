import { Card, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import type { Pokemon } from '../../types/pokemon'

type Props = {
  pokemon: Pokemon
}

const PokeThumb = ({ pokemon }: Props) => {
  return (
    <Card variant="flat">
      <Card.Body
        css={{
          background: pokemon.color,
          aspectRatio: 'auto',
          position: 'relative',
        }}
      >
        <Text
          color="black"
          weight={'medium'}
          css={{
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
        <Text weight={'medium'} color="black">
          {pokemon.name}
        </Text>
      </Card.Body>
    </Card>
  )
}

export default PokeThumb
