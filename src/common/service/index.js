import { GET_POKEMON_INFO } from 'common/utils/consults';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://graphql-pokemon.now.sh/',
});

const client = new ApolloClient({
  cache,
  link,
});

export async function FindAll() {
  return await client.query({ query: GET_POKEMON_INFO }).then(poke => {
    localStorage.setItem('listPokemons', JSON.stringify(poke.data.pokemons));
    return poke.data.pokemons;
  });
}
