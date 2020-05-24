import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #4e4e4e;
  margin: 0 20px;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #732121;
  }
`;
