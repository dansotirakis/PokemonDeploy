import gql from 'graphql-tag';

export const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 151) {
      id
      number
      name
      types
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;
