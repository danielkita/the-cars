import React from 'react';
import { TitleL } from '../UI/Common/Common.styles';
import * as S from './SearchBox.styles';

type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = props => (
  <>
    <TitleL>Find your car</TitleL>
    <S.FormContainer></S.FormContainer>
  </>
);

export default SearchBox;
