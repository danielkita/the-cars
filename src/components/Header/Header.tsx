import React from 'react';
import * as S from './Header.styles';

const Header: React.FC = () => (
  <S.Container>
    <img src="https://via.placeholder.com/250x70" alt="Example company name" />
    <S.Nav>
      <S.Link target="_blank" rel="noopener noreferrer" href="https://google.com">
        Google.com
      </S.Link>
      <S.Link target="_blank" rel="noopener noreferrer" href="https://microsoft.com">
        Microsoft.com
      </S.Link>
      <S.Link target="_blank" rel="noopener noreferrer" href="https://example.com">
        Example.com
      </S.Link>
    </S.Nav>
  </S.Container>
);

export default Header;
