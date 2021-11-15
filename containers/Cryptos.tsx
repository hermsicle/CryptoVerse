import React from 'react';
import Image from 'next/image';

type CryptoProps = {
  fullName: string;
  img: string;
  abbreviation: string;
};

const Cryptos = ({ fullName, img, abbreviation }: CryptoProps) => {
  return (
    <div className="crypto-card">
      <div className="overlay"></div>
      <Image src={img} alt="crypto" height="50px" width="50px" />
      <div className="crypto-name">
        <h4>{fullName}</h4>
        <h4>{abbreviation}</h4>
      </div>
    </div>
  );
};

export default Cryptos;
