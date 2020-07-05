import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import history from '../../../common/store/history';
import { COLORS, useStyles } from '../../../common/utils';
import { Creators as actionPokemon } from '../../../common/store/ducks/pokemon';
import {
  CustomButton,
  CustomInput,
  CustomParagraph,
} from '../../../common/components';

export const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles(useStyles);

  function handleSubmit() {
    dispatch(actionPokemon.pokemonLoadRequest());
    history.push(`/list`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <CustomParagraph
              fontSize="50px"
              padding="10px"
              color={COLORS.orange}
              fontWeight="bold"
            >
              Login
            </CustomParagraph>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <CustomInput name="username" padding="10px" />
            </Grid>
            <Grid item>
              <CustomInput type="password" padding="10px" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <CustomButton type="submit" margin="10px 0 0 0">
              LOGIN
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
