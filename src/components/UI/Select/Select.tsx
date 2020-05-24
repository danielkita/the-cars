import React from 'react';
import * as S from './Select.styles';

type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type OptionProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

const Select: React.FC<SelectProps> = ({ ...props }) => (
  <S.Container>
    <select {...props} />
  </S.Container>
);

export const Option: React.FC<OptionProps> = props => <option {...props} />;

export default Select;
