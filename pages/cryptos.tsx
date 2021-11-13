import type { NextPage } from 'next';
import Link from 'next/link';
import React, { FC, useState, useEffect, useContext } from 'react';
import { getCryptos } from '../services';
import { AppContext, initialState } from '../context/AppContext';
import CryptosContainer from '../containers/CryptosContainer';
import { COIN_INTERFACE } from '../interfaces/interfaces';

const Cryptos: NextPage = () => {
  return (
    <div>
      <h1>Crypto Page</h1>
      <h4>Top 100 Top Cryptocurrencies</h4>
      <CryptosContainer count={100} />
    </div>
  );
};

export default Cryptos;
