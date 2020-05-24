import React, { useCallback, useEffect, useState } from 'react';
import { fetchVehicles } from '../../../api';
import Select, { Option } from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';
import { Vehicle } from '../../../types/vehicle';
import { LabelTitle } from '../../UI/Common/Common.styles';

type VehiclesPickerProps = {
  onChange: (value: string) => void;
  selectedMake: string;
  selectedModel: string;
  title: string;
};

const VehiclesPicker: React.FC<VehiclesPickerProps> = ({ title, onChange, selectedMake, selectedModel }) => {
  const [vehicles, setVehicles] = useState<Vehicle[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value), [onChange]);

  const saveVehicles = useCallback(
    async () => {
      setError(false);
      try {
        const vehicles = await fetchVehicles({
          make: selectedMake,
          model: selectedModel,
        });
        setVehicles(vehicles);
      } catch (e) {
        setError(true);
      }
    },
    [selectedMake, selectedModel]
  );

  useEffect(
    () => {
      saveVehicles();
    },
    [saveVehicles, selectedMake, selectedModel]
  );

  return (
    <>
      <LabelTitle>{title}</LabelTitle>
      {!error ? (
        <Select onChange={changeHandler}>
          <Option disabled value="-">
            -
          </Option>
          {vehicles?.map((item, key) => (
            <Option key={`${item.model}_${item.make}_${key}`} value={JSON.stringify(item)}>
              {item.enginePowerPS}
              PS ({item.enginePowerKW}
              KW) - {item.fuelType} - {item.engineCapacity}
              ccm - {item.bodyType}
            </Option>
          ))}
        </Select>
      ) : (
        <Button error onClick={saveVehicles}>Can't get vehicles. Try again!</Button>
      )}
    </>
  );
};

export default VehiclesPicker;
