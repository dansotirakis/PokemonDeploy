import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import pokemon from './pokemon';

export default history =>
  combineReducers({
    router: connectRouter(history),
    pokemon,
  });
