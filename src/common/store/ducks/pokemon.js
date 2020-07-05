import { createActions, createReducer } from 'reduxsauce';
import { handle } from '../../utils';

export const { Types, Creators } = createActions({
  pokemonLoadRequest: [],
  pokemonRequestFailure: ['error'],
  pokemonRequestSuccess: ['pokemonSelected'],
  pokemonLoadFailure: ['errors'],
  pokemonLoadSuccess: ['pokemons'],
  selectedOnPokemon: ['pokemon'],
});

const INITIAL_STATE = {
  pokemonSelected: undefined,
  pokemon: {},
  pokemons: [],
  errors: undefined,
};

const pokemonLoadSuccess = (state = INITIAL_STATE, pokemons) => {
  return {
    ...state,
    pokemons: pokemons,
  };
};

const pokemonLoadFailure = (state = INITIAL_STATE, response) => {
  return {
    ...state,
    errors: handle(response),
  };
};

const pokemonRequestSuccess = (state = INITIAL_STATE, { pokemonSelected }) => {
  return {
    ...state,
    pokemonSelected: pokemonSelected,
  };
};

const pokemonRequestFailure = (state = INITIAL_STATE, response) => {
  return {
    ...state,
    errors: handle(response),
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.POKEMON_REQUEST_SUCCESS]: pokemonRequestSuccess,
  [Types.POKEMON_REQUEST_FAILURE]: pokemonRequestFailure,
  [Types.POKEMON_LOAD_SUCCESS]: pokemonLoadSuccess,
  [Types.POKEMON_LOAD_FAILURE]: pokemonLoadFailure,
});
