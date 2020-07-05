import { call, put, takeLatest } from 'redux-saga/effects';
import {
  Creators as pokemonCreators,
  Types as pokemonTypes,
} from '../ducks/pokemon';
import { FindAll } from '../../service';
import history from '../history';

function* pokemonLoadRequest() {
  try {
    const pokemons = yield call(FindAll);
    yield put(pokemonCreators.pokemonLoadSuccess(pokemons));
  } catch (errors) {
    yield put(pokemonCreators.pokemonLoadFailure(errors));
  }
}

function* updatedPokemon({ newList }) {
  yield localStorage.setItem('listPokemons', JSON.stringify(newList));
  history.push('/list');
}

function* selectedOnPokemon({ pokemon }) {
  try {
    yield put(pokemonCreators.pokemonRequestSuccess(pokemon));
    history.push('/read');
  } catch (errors) {
    yield put(pokemonCreators.pokemonRequestFailure(errors));
  }
}

export default function* pokemonSaga() {
  yield takeLatest(pokemonTypes.POKEMON_LOAD_REQUEST, pokemonLoadRequest);
  yield takeLatest(pokemonTypes.SELECTED_ON_POKEMON, selectedOnPokemon);
  yield takeLatest(pokemonTypes.UPDATED_POKEMON, updatedPokemon);
}
