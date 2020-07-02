import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { CustomDiv } from '../../../../common/components/CustomDiv';
import { CustomParagraph } from '../../../../common/components/CustonParagraph';
import { CustomImg } from '../../../../common/components/CustomImg';
import { COLORS } from '../../../../common/utils/colors';
import history from '../../../../common/store/history';
import { useStyles } from '../../../../common/utils/styleGrid';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { CustomInput } from '../../../../common/components/CustonInput';

const GET_POKEMON_INFO = gql`
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

export const List = () => {
  const classes = useStyles(useStyles);
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);
  const initialState = JSON.parse(localStorage.getItem('listPokemons'));
  const [renderList, setRenderList] = useState(false);
  const [filtered, setFiltered] = useState(
    JSON.parse(localStorage.getItem('listPokemons')) || []
  );

  useEffect(() => {
    if (!filtered) {
      if (data && !loading && !error) {
        localStorage.setItem('listPokemons', JSON.stringify(data.pokemons));
        setRenderList(true);
      }
    }
    setRenderList(true);
  }, [data, loading, error, filtered]);

  useEffect(() => {
    if (renderList) {
      const newList = JSON.parse(localStorage.getItem('listPokemons'));
      setFiltered(newList);
    }
  }, [renderList]);

  const selectedHandler = poke => {
    localStorage.setItem('selectedPokemon', JSON.stringify(poke));
    return history.push(`/read`);
  };

  const searchHandler = param => {
    const newArray = [];
    filtered &&
      filtered.map(pokemon => {
        if (
          pokemon.name
            .toString()
            .toLocaleLowerCase()
            .includes(param.toLocaleLowerCase())
        ) {
          newArray.push(pokemon);
          return setFiltered(newArray);
        } else {
          return null;
        }
      });
  };

  const changeList = param => {
    const value = param.currentTarget.value;
    if (value.length < 1) {
      return setFiltered(initialState);
    } else {
      return searchHandler(value);
    }
  };

  return (
    <>
      {error ? (
        <h1>error</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <CustomParagraph
                fontSize="50px"
                padding="10px"
                color={COLORS.orange}
                fontWeight="bold"
              >
                SoftReactPokémon
              </CustomParagraph>
            </Grid>
          </Grid>
          <Grid item container spacing={1} justify="center" xs={12}>
            <Grid item>
              <CustomInput onChange={changeList} padding="10px" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {Array.isArray(filtered) &&
                filtered.map(pokemon => (
                  <Grid key={`${Math.random()}-pokemon`} item>
                    <CustomDiv
                      padding="10px"
                      background={COLORS.white100}
                      borderRadius="10px"
                      width="200px"
                      textAlign="center"
                      onClick={() => selectedHandler(pokemon)}
                      cursor="pointer"
                    >
                      <CustomImg
                        padding="10px"
                        width="150px"
                        height="150px"
                        src={pokemon && pokemon.image}
                      />
                      <CustomParagraph
                        textAlign="-webkit-center"
                        fontSize="x-large"
                        padding="10px"
                      >
                        {pokemon && pokemon.name}
                      </CustomParagraph>
                      <CustomParagraph
                        textAlign="-webkit-center"
                        fontSize="medium"
                      >
                        Type : {pokemon && pokemon.types}
                      </CustomParagraph>
                    </CustomDiv>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
