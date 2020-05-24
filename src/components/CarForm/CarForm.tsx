import React, { useCallback, useState } from 'react';
import * as S from './CarForm.styles';
import MakesPiker from './MakesPicker/MakesPicker';
import ModelsPicker from './ModelsPicker/ModelsPicker';
import VehiclesPicker from './VehiclesPicker/VehiclesPicker';
import { Vehicle } from '../../types/vehicle';
import Button from '../UI/Button/Button';

type CarFormProps = {
  onSubmit: (value?: Vehicle) => void;
};

const CarForm: React.FC<CarFormProps> = ({ onSubmit }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);

  const submitHandler = useCallback(() => onSubmit(vehicle), [onSubmit, vehicle]);

  const onSelectMake = useCallback((value: string) => {
    setMake(value);
    setModel('');
    setVehicle(undefined);
  }, []);

  const onSelectModel = useCallback((value: string) => {
    setVehicle(undefined);
    setModel(value);
  }, []);

  const onSelectVehicle = useCallback((value: string) => {
    try {
      value && setVehicle(JSON.parse(value));
    } catch (e) {
      console.error('Cannot parse selected vehicle');
    }
  }, []);

  return (
    <>
      <S.SearchFormContainer>
        <S.FieldBox>
          <MakesPiker title="Makes" onChange={onSelectMake} value={make} />
        </S.FieldBox>
        {make && (
          <S.FieldBox>
            <ModelsPicker title="Models" onChange={onSelectModel} value={model} selectedMake={make} />
          </S.FieldBox>
        )}
        {make &&
          model && (
            <S.FieldBox>
              <VehiclesPicker title="Vehicles" onChange={onSelectVehicle} selectedMake={make} selectedModel={model} />
            </S.FieldBox>
          )}
      </S.SearchFormContainer>
      {make &&
        model &&
        vehicle && (
          <Button primary onClick={submitHandler}>
            Submit
          </Button>
        )}
    </>
  );
};

export default CarForm;
