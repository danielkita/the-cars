import React, { useCallback, useEffect, useState } from 'react';
import * as api from '../../../api/api';
import Select, { Option } from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';
import { LabelTitle } from '../../UI/Common/Common.styles';

type MakesPickerProps = {
  title: string;
  onChange: (value: string) => void;
  value?: string;
};

const MakesPicker: React.FC<MakesPickerProps> = ({ title, onChange, value }) => {
  const [makes, setMakes] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value), [onChange]);

  const saveMakes = useCallback(async () => {
    setError(false);
    try {
      const makes = await api.fetchMakes();
      setMakes(makes);
    } catch (e) {
      setError(true);
    }
  }, []);

  useEffect(
    () => {
      saveMakes();
    },
    [saveMakes]
  );

  return (
    <>
      <LabelTitle>{title}</LabelTitle>
      {!error ? (
        <Select onChange={changeHandler} defaultValue="-">
          <Option disabled value="-">
            -
          </Option>
          {makes.map(item => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      ) : (
        <Button error onClick={saveMakes}>
          Can't get makes. Try again!
        </Button>
      )}
    </>
  );
};

export default MakesPicker;
