import Cryptos from '../../containers/Cryptos';
import { API_URL } from '../../constants/constants';
import LineChart from '../../components/LineChart';
import Section from '../../components/Section';
import Stats from '../../components/Stats';

const CryptoDetails = ({ crypto, history }: any) => {
  const { apiBaseUrl } = API_URL;
  const {Data} = history

  return (
    <Section>
      <h2> Crypto: </h2>
      <LineChart 
        history= {Data}
      />
      <Stats  
        stats= {crypto}
      />

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

  const res = await fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=USD${API_KEY}`
  );
  const data = await res.json();

  const res2 = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${id}&tsym=USD&limit=200${API_KEY}`
  )
  const historyData = await res2.json();

  return {
    props: {
      crypto: data,
      history: historyData,
    },
  };
};
