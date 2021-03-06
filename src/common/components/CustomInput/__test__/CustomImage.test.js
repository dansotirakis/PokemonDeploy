import ReactDOM from 'react-dom';
import React from 'react';
import { CustomInput } from '../index';
import { COLORS } from '../../../utils';

describe('Custom Input Component', () => {
  const div = document.createElement('div');

  it('Render with parameters', () => {
    ReactDOM.render(
      <CustomInput
        textAlign="center"
        fontWeight="600"
        fontSize="10px"
        backgroundColor={COLORS.blue}
        kgroundColor={COLORS.blue}
        border="0"
        borderRadius="0"
        borderColor={COLORS.blue}
        color={COLORS.blue}
        cursor="pointer"
        padding="0"
        outline={true}
        margin="0"
        width="0"
        display="none"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
