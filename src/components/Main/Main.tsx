import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from '../Header/Header';
import * as S from './Main.styles';

const Main: React.FC = () => (
  <S.Container>
    <Header />
    <SearchBox />
  </S.Container>
);

export default Main;
