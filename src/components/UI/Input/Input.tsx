import React from 'react';
import * as S from './Input.styles';
import { Label } from '../Common/Common.styles';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <S.Container>
      <Label>{label}</Label>
      <input {...props} />
    </S.Container>
  );
};

export default Input;
