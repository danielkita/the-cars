import React from 'react';
import * as S from './Button.styles';

export type ButtonProps = {
  onClick?: React.MouseEventHandler;
  primary?: boolean;
  error?: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, error, primary }) => {
  return (
    <S.Container primary={primary} error={error} onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default Button;
