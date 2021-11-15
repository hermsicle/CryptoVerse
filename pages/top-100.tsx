import React, { useContext } from 'react';
import Cryptos from '../containers/Cryptos';
import Link from 'next/link';
import { API_URL } from '../constants/constants';
import Section from '../components/Section';
const Top100 = ({ coins }: any) => {
  const { apiBaseUrl } = API_URL;
  return (
    <Section>
      <h1> Top 100 Crypto Currency by Market Cap </h1>
      <div className="cryptos-container">
        {coins?.map(({ CoinInfo, DISPLAY, RAW }: any) => (
          <div className="coin" key={CoinInfo.Id}>
            <Link href={`/cryptos/${CoinInfo.Name}`} passHref>
              <div>
                <Cryptos
                  fullName={CoinInfo.FullName}
                  img={`${apiBaseUrl + CoinInfo.ImageUrl}`}
                  abbreviation={CoinInfo.Name}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Top100;

const API_KEY = `&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
const cryptoURL: string = `https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD`;

export const getStaticProps = async () => {
  const res = await fetch(`${cryptoURL}&limit=100${API_KEY}`);
  const { Data } = await res.json();
  return {
    props: {
      coins: Data,
    },
  };
};
