import React from 'react';
import { renderCheck } from 'utils/testChecks';
import Button from './Button';

const onClick = jest.fn();

describe('<Button />', () => {
  it('renders correctly', () => {
    renderCheck(
      <Button
        label="My Label"
        onClick={onClick}
      />
    );
  });
});
