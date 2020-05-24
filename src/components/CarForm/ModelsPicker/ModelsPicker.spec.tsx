import { render } from '@testing-library/react';
import ModelsPicker from './ModelsPicker';
import React from 'react';
import * as api from '../../../api/api';

describe('ModelsPicker', () => {
  it('should render and call api properly', () => {
    // ARRANGE
    const onChange = jest.fn();
    const title = 'ExampleTitle';
    const make = 'FORD';
    const spy = jest.spyOn(api, 'fetchModels');

    // ACT
    const C = render(<ModelsPicker selectedMake={make} title={title} onChange={onChange} />);

    // ASSERT
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith({
      make,
    });
    expect(C.findByText(title)).toBeTruthy();
  });
});
