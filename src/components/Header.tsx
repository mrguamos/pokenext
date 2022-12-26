import { Flex } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <Flex
        justify={'center'}
        align="center"
        sx={(theme) => ({
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
        })}
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
      </Flex>
    </>
  )
}

export default Header
