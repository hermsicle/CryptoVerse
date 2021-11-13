import React, { useEffect, useContext } from 'react';
import { initialState, AppContext } from '../context/AppContext';
import { COIN_INTERFACE } from '../interfaces/interfaces';
import Link from 'next/link';
import Cryptos from '../containers/Cryptos';
import { getCryptos } from '../services';

type CryptosContainerProps = {
  count: number;
};

const CryptosContainer = ({ count }: CryptosContainerProps) => {
  const { cryptos, setCryptos } = useContext(AppContext);
  const { BaseImageUrl } = initialState;

  console.log(cryptos);
  useEffect(() => {
    getCryptos(count).then(({ Data }) => setCryptos(Data));
  }, []);

  return (
    <div className="cryptos-container">
      {cryptos.length > 0
        ? cryptos?.map(({ CoinInfo }: COIN_INTERFACE, i) => (
            <Cryptos
              key={CoinInfo.Id}
              fullName={CoinInfo.FullName}
              img={`${BaseImageUrl + CoinInfo.ImageUrl}`}
              abbreviation={CoinInfo.Name}
            />
          ))
        : 'loading...'}
      <button>
        <Link href="/cryptos">View Top 100 By Market Cap</Link>
      </button>
    </div>
  );
};

export default CryptosContainer;
