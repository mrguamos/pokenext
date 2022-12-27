import { Container } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <Container
        display="flex"
        justify="center"
        alignItems="center"
        css={{
          py: '$15',
        }}
      >
        <Link
          href={'https://pokeapi.co/'}
          target={'_blank'}
          aria-label="Pokemon API"
        >
          <Image
            src={'/images/pokeapi_256.png'}
            alt={'PokeAPI'}
            width={257}
            height={103}
            itemType="webp"
            priority
          />
        </Link>
      </Container>
    </>
  )
}

export default Header
