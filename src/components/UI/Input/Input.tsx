import React from 'react';
import * as S from './Input.styles';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <S.Container>
      <input {...props} />
    </S.Container>
  );
};

export default Input;
