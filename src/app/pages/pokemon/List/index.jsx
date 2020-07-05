import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../../../common/store/history';
import { COLORS, useStyles } from '../../../../common/utils';
import { Creators as actionPokemon } from 'common/store/ducks/pokemon';
import {
  CustomButton,
  CustomDiv,
  CustomImg,
  CustomInput,
  CustomParagraph,
} from '../../../../common/components';

export const List = () => {
  const dispatch = useDispatch();
  const classes = useStyles(useStyles);
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const localStore = JSON.parse(localStorage.getItem('listPokemons'));
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('listPokemons'));
    !Array.isArray(store)
      ? pokemons && setFiltered(pokemons.pokemons)
      : setFiltered(store);
  }, [pokemons]);

  const logOut = () => {
    localStorage.removeItem('listPokemons');
    history.push('/');
  };

  const selectedHandler = pokemon => {
    dispatch(actionPokemon.selectedOnPokemon(pokemon));
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
        }
        return null;
      });
  };

  const changeList = param => {
    const value = param.currentTarget.value;
    if (value.length < 1) {
      return setFiltered(localStore);
    }
    return searchHandler(value);
  };

  return (
    <>
      {filtered ? (
        <>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <CustomButton onClick={logOut}>LogOut</CustomButton>
            </Grid>
          </Grid>
          <Grid container className={classes.grid} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <CustomParagraph
                  fontSize="50px"
                  color={COLORS.orange}
                  fontWeight="bold"
                >
                  Pokédex
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
        </>
      ) : (
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <CustomParagraph
                fontSize="50px"
                color={COLORS.orange}
                fontWeight="bold"
              >
                Loading...
              </CustomParagraph>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
