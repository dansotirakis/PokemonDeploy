import React from 'react';

import 'config/ReactotronConfig';
import { ApplyProvider } from './common/higherOrder';
import { Routes } from './common/routes';
import { GlobalStyle } from './config/GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);
export default ApplyProvider(App);
