import axios from 'axios';

const API_KEY = `&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
const cryptoURL: string = `https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD`;

export const getCryptos = async (count: number) => {
  try {
    const res = await axios.get(`${cryptoURL}&limit=${count}${API_KEY}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
