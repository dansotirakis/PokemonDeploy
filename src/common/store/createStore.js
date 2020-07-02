import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

export default (reducers, sagaMiddleware, history) => {
  if (process.env.NODE_ENV === 'development') {
    const storeEnhacer = composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    );
    compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware));
    return createStore(reducers, storeEnhacer);
  }
  return createStore(reducers, applyMiddleware(sagaMiddleware));
};
