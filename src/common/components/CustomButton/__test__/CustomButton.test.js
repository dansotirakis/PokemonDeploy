import ReactDOM from 'react-dom';
import React from 'react';
import { CustomButton } from '../index';
import { COLORS } from '../../../utils';

describe('Custom Button Component', () => {
  const div = document.createElement('div');

  it('Render with parameters', () => {
    ReactDOM.render(
      <CustomButton
        width={'0'}
        height={'0'}
        padding={'0'}
        border={'0'}
        borderRadius={'0'}
        borderColor={COLORS.orange100}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
