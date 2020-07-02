import React from 'react';
import { Grid } from '@material-ui/core';
import { CustomParagraph } from '../../../../common/components/CustonParagraph';
import { COLORS } from '../../../../common/utils/colors';
import history from '../../../../common/store/history';
import { useStyles } from '../../../../common/utils/styleGrid';
import { CustomImg } from '../../../../common/components/CustomImg';
import { CustomDiv } from '../../../../common/components/CustomDiv';
import { CustomButton } from '../../../../common/components/CustomButtom';

export const Read = () => {
  const classes = useStyles();
  const pokemon = JSON.parse(localStorage.getItem('selectedPokemon'));

  return (
    <Grid container className={classes.grid} xs={12} justify="center">
      <CustomDiv
        background={COLORS.white100}
        width="80%"
        padding="20px"
        textAlignLast="center"
      >
        {pokemon && (
          <Grid xs={12} justify="center">
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Grid container spacing={2} xs={12}>
                  <Grid item justify="center" xs={12} md={12} lg={4}>
                    <Grid item>
                      <CustomParagraph
                        color={COLORS.orange}
                        padding="10px"
                        fontSize="30px"
                        textAlign="center"
                      >
                        {pokemon.name}
                      </CustomParagraph>
                    </Grid>
                    <Grid item>
                      <CustomDiv
                        borderRadius="10px"
                        borderColor={COLORS.orange}
                      >
                        <CustomImg
                          width="100%"
                          borderRadius="10px"
                          src={pokemon.image}
                        />
                      </CustomDiv>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={2} justify="center">
                        {pokemon.types.map(type => (
                          <Grid key={`${Math.random()}-pokemon`} item>
                            <CustomDiv
                              borderRadius="10px"
                              background={COLORS.white100}
                              borderColor={COLORS.orange}
                              border="solid 2px"
                              margin="10px"
                            >
                              <CustomParagraph
                                fontSize="15px"
                                textAlign="center"
                                padding="10px"
                              >
                                {type}
                              </CustomParagraph>
                            </CustomDiv>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item justify="center" xs={12} md={12} lg={8}>
                    <CustomParagraph
                      textAlign="center"
                      fontSize="30px"
                      padding="5px 5px 20px 5px"
                      color={COLORS.orange}
                    >
                      Attacks
                    </CustomParagraph>
                    <Grid container spacing={2}>
                      {pokemon.attacks.special.map(atk => (
                        <Grid
                          key={`${Math.random()}-pokemon`}
                          item
                          xs={12}
                          md={12}
                          lg={4}
                        >
                          <CustomDiv
                            borderRadius="10px"
                            background={COLORS.white100}
                            padding="10px"
                            width="100%"
                            border="solid 2px"
                          >
                            <CustomParagraph
                              fontSize="20px"
                              textAlign="center"
                              padding="10px"
                            >
                              {atk.name}
                            </CustomParagraph>
                            <CustomParagraph
                              fontSize="15px"
                              textAlign="center"
                              padding="10px"
                            >
                              {atk.type}
                            </CustomParagraph>
                            <CustomParagraph
                              fontSize="20px"
                              textAlign="center"
                              padding="10px"
                            >
                              {atk.damage}
                            </CustomParagraph>
                            <CustomDiv padding="10px">
                              <CustomDiv
                                background={COLORS.blue}
                                width="100%"
                                height="10px"
                              >
                                <CustomDiv
                                  background={COLORS.red}
                                  width={`${
                                    atk.damage > 100 ? 100 : atk.damage
                                  }%`}
                                  height="10px"
                                />
                              </CustomDiv>
                            </CustomDiv>
                          </CustomDiv>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid justify="center" container item xs={12} spacing={1}>
                <Grid item>
                  <CustomButton onClick={() => history.push(`/`)}>
                    Return
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton
                    onClick={() => history.push(`/form/${pokemon.name}`)}
                  >
                    Edit
                  </CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </CustomDiv>
    </Grid>
  );
};
