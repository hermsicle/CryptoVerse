import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">CryptoVerseV2</div>
      <div className="header-links">
        <Link href="/"> Home </Link>
        <Link href="/cryptos"> Cryptos </Link>
        <Link href="/news"> News </Link>
      </div>
    </div>
  )
}

export default Header
