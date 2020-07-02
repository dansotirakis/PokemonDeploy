import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <WrappedComponent {...props} />
      </PersistGate>
    </Provider>
  );
  return hocComponent;
};
