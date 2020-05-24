import { render } from '@testing-library/react';
import VehiclesPicker from './VehiclesPicker';
import React from 'react';
import * as api from '../../../api/api';

describe('VehiclesPicker', () => {
  it('should render and call api properly', () => {
    // ARRANGE
    const onChange = jest.fn();
    const title = 'ExampleTitle';
    const make = 'FORD';
    const model = 'Fiesta';
    const spy = jest.spyOn(api, 'fetchVehicles');

    // ACT
    const C = render(<VehiclesPicker selectedModel={model} selectedMake={make} title={title} onChange={onChange} />);

    // ASSERT
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith({
      make,
      model,
    });
    expect(C.findByText(title)).toBeTruthy();
  });
});
