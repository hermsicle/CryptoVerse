import React from 'react';
import Link from 'next/link';
import Section from '../components/Section';
const Header = () => {
  return (
    <div className="header">
      <Section>
        <div className="nav-bar-inner">
          <h1>CryptoVerseV2</h1>
          <div className="header-links">
            <Link href="/"> Home </Link>
            <Link href="/news"> News </Link>
            <Link href="/top-100"> Top-Coins </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Header;
