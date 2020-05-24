import { render } from '@testing-library/react';
import MakesPicker from './MakesPicker';
import React from 'react';
import * as api from '../../../api/api';

describe('MakesPicker', () => {
  it('should render and call api properly', () => {
    // ARRANGE
    const title = 'ExampleTitle';
    const onChange = jest.fn();
    const spy = jest.spyOn(api, 'fetchMakes');

    // ACT
    const C = render(<MakesPicker title={title} onChange={onChange} />);

    // ASSERT
    expect(spy).toBeCalledTimes(1);
    expect(C.findByText(title)).toBeTruthy();
  });
});
