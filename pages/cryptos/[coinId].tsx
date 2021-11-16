import Cryptos from '../../containers/Cryptos';
import { API_URL } from '../../constants/constants';
import { json } from 'stream/consumers';
import LineChart from '../../components/LineChart';
import Section from '../../components/Section';

const CryptoDetails = ({ crypto }: any) => {
  const { apiBaseUrl } = API_URL;

  console.log(crypto);

  return (
    <Section>
      <h1> COIN: </h1>
      <LineChart />
    </Section>
  );
};

export default CryptoDetails;

const API_KEY = `&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
const cryptoURL = `https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD`;

export const getStaticPaths = async () => {
  const res = await fetch(`${cryptoURL}&limit=100${API_KEY}`);
  const { Data } = await res.json();

  const paths = Data.map((crypto: any) => {
    return {
      params: { coinId: crypto.CoinInfo.Name.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.coinId;
  console.log(id);

  const res = await fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=USD${API_KEY}`
  );
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      crypto: data,
    },
  };
};
