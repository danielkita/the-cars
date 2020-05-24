import React, { useCallback, useEffect, useState } from 'react';
import { fetchModels } from '../../../api';
import Select, { Option } from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';
import { LabelTitle } from '../../UI/Common/Common.styles';

type ModelsPickerProps = {
  onChange: (value: string) => void;
  value?: string;
  selectedMake: string;
  title: string;
};

const ModelsPicker: React.FC<ModelsPickerProps> = ({ title, onChange, value, selectedMake }) => {
  const [models, setModels] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value), [onChange]);

  const saveModels = useCallback(
    async () => {
      setError(false);
      try {
        const models = await fetchModels({
          make: selectedMake,
        });
        setModels(models);
      } catch (e) {
        setError(true);
      }
    },
    [selectedMake]
  );

  useEffect(
    () => {
      saveModels();
    },
    [saveModels, selectedMake]
  );

  return (
    <>
      <LabelTitle>{title}</LabelTitle>
      {!error ? (
        <Select onChange={changeHandler}>
          <Option disabled value="-">
            -
          </Option>
          {models.map(item => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      ) : (
        <Button error onClick={saveModels}>Can't get models. Try again!</Button>
      )}
    </>
  );
};

export default ModelsPicker;
