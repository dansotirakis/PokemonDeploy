import ReactDOM from 'react-dom';
import React from 'react';
import {
  CustomButton,
  CustomDiv,
  CustomInput,
  CustomLabel,
  CustomParagraph,
} from '../index';

describe('All Components', () => {
  const div = document.createElement('div');
  it('Render image', () => {
    ReactDOM.render(<CustomInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Render custom button', () => {
    ReactDOM.render(<CustomButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Render custom div', () => {
    ReactDOM.render(<CustomDiv />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Render custom paragraph', () => {
    ReactDOM.render(<CustomParagraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Render custom label', () => {
    ReactDOM.render(<CustomLabel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
