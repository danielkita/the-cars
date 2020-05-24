import styled from 'styled-components';

export const Container = styled.div`
  select {
    padding: 5px;
    border-radius: 5px;
    border-color: #e5e5e5;
    transition: 0.2s ease-in-out;
    min-width: 100px;
    &:hover {
      border-color: ${props => props.theme.primary};
    }
  }
`;
