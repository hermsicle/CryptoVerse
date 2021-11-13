import React, { FC } from 'react';
import Section from '../components/Section';
import CryptosContainer from '../containers/CryptosContainer';

const HomeLayout: FC = () => {
  return (
    <Section>
      <h1> CryptoVerse App V2 </h1>
      <p> Created by: Hermsicles</p>
      <h4>Top 10 Market Cap</h4>
      <CryptosContainer count={10} />
    </Section>
  );
};

export default HomeLayout;
