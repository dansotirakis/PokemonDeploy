import ReactDOM from 'react-dom';
import React from 'react';
import { CustomDiv } from '../index';
import { COLORS } from '../../../utils';

describe('Custom Div Component', () => {
  const div = document.createElement('div');

  it('Render with parameters', () => {
    ReactDOM.render(
      <CustomDiv
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
