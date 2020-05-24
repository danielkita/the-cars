import React from 'react';
import { ThemeProvider } from 'styled-components';
import SearchBox from '../SearchBox/SearchBox';
import Header from '../Header/Header';
import * as S from './Main.styles';

const theme = {
  'primary': '#386E6B',
  'secondary': '#51C3B6',
  'error': '#D5462C',
  'success': '#8BA44E',
};

const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <S.Container>
      <Header />
      <SearchBox />
    </S.Container>
  </ThemeProvider>
);

export default Main;
