import React, { FC, createContext, useState, useEffect } from 'react';
import { getCryptos } from '../services/apis';
import { COIN_INTERFACE } from '../interfaces/interfaces';
//define our prop rtpe
type Props = {
  children?: React.ReactNode | React.ReactNode[]; // if we are mapping out our props, we can define it as React.ReactNode[]
};

//create global types:
export type GlobalState = {
  cryptos: COIN_INTERFACE[];
  setCryptos: (input: COIN_INTERFACE[]) => void;
  BaseImageUrl?: string;
};

export const initialState: GlobalState = {
  cryptos: [],
  setCryptos: () => {},
  BaseImageUrl: 'https://www.cryptocompare.com',
};

export const AppContext = createContext<GlobalState>(initialState);

export const AppContextProvider: FC = ({ children }: Props) => {
  const [cryptos, setCryptos] = useState<COIN_INTERFACE[]>(
    initialState.cryptos
  );

  return (
    <AppContext.Provider value={{ cryptos, setCryptos }}>
      {children}
    </AppContext.Provider>
  );
};
