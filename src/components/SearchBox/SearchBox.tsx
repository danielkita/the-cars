import React, { useCallback } from 'react';
import { TitleL } from '../UI/Common/Common.styles';
import * as S from './SearchBox.styles';
import CarForm from '../CarForm/CarForm';
import { Vehicle } from '../../types/vehicle';

type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = () => {
  const submitHandler = useCallback((value?: Vehicle) => {
    if (!value) return;
    alert(`
        You've selected: \n
        Make: ${value.make}\n
        Model: ${value.model}\n
        Body type: ${value.bodyType}\n
        Engine Capacity: ${value.engineCapacity}ccm\n
        Fuel type: ${value.fuelType}\n
        Power: ${value.enginePowerPS}PS (${value.enginePowerKW}KW)\n
    `);
  }, []);

  return (
    <>
      <TitleL>Find your car</TitleL>
      <S.FormContainer>
        <CarForm onSubmit={submitHandler} />
      </S.FormContainer>
    </>
  );
};

export default SearchBox;
