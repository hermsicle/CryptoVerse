import React from 'react';
import Image from 'next/image';

type CryptoProps = {
  fullName: string;
  img: string;
  abbreviation: string;
  price?: string;
  marketCap?: string;
  dailyChange?: string;
  number: number;
};

const Cryptos = ({
  fullName,
  img,
  abbreviation,
  price,
  marketCap,
  dailyChange,
  number,
}: CryptoProps) => {
  return (
    <div className="crypto-card">
      <div className="overlay"></div>
      <div className="card-upper">
        <div className="crypto-name">
          <h4>
            {number + 1}. <span></span>
            {fullName}
          </h4>
        </div>
        <Image src={img} alt="crypto" height="35px" width="35px" />
      </div>

      <div className="card-lower">
        <p> Price: {price} </p>
        <p> Market Cap: {marketCap} </p>
        <p> Daily Change: {dailyChange} % </p>
      </div>
    </div>
  );
};

export default Cryptos;
