import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className={'flex aspect-auto items-center justify-center py-5'}>
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
          />
        </Link>
      </div>
      <hr
        className={
          'mx-10 h-[1px] border-0 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300'
        }
      />
    </>
  )
}

export default Header
