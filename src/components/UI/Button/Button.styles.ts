import styled from 'styled-components';

export const Container = styled.div<{
  primary?: boolean;
  error?: boolean;
}>`
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  display: inline-block;
  cursor: pointer;
  background: ${props =>
    props.primary ? props.theme.primary : props.error ? props.theme.error : props.theme.secondary};
`;
