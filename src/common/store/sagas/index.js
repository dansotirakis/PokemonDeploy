import { all } from 'redux-saga/effects';
import pokemon from './pokemon';

export default function* sagas() {
  yield all([pokemon()]);
}
