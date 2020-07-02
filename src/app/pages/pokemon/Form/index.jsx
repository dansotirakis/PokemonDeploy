import React from 'react';
import { Grid } from '@material-ui/core';
import { CustomParagraph } from '../../../../common/components/CustonParagraph';
import { COLORS } from '../../../../common/utils/colors';
import history from '../../../../common/store/history';
import { useStyles } from '../../../../common/utils/styleGrid';
import { CustomImg } from '../../../../common/components/CustomImg';
import { CustomDiv } from '../../../../common/components/CustomDiv';
import { CustomInput } from '../../../../common/components/CustonInput';
import { CustomLabel } from '../../../../common/components/CustonLabel';
import { useForm } from 'react-hook-form';
import { CustomButton } from '../../../../common/components/CustomButtom';

export const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });
  const classes = useStyles();
  const pokemon = JSON.parse(localStorage.getItem('selectedPokemon'));
  const listPok = JSON.parse(localStorage.getItem('listPokemons'));

  let fieldIdAtk = 0;
  let fieldIdTyp = 0;

  const submit = data => {
    const newList = [];
    const object = {
      name: data.name,
      types: data.types,
      attacks: data.attacks,
      image: pokemon.image,
      id: pokemon.id,
    };
    listPok.map(pok => {
      if (pok.id === pokemon.id) {
        return newList.push(object);
      } else {
        return newList.push(pok);
      }
    });
    localStorage.setItem('selectedPokemon', JSON.stringify(object));
    localStorage.setItem('listPokemons', JSON.stringify(newList));
    return history.push(`/`);
  };

  return (
    <Grid container xs={12} justify="center">
      <Grid item container className={classes.grid} sm={12} md={10} lg={8}>
        <CustomDiv
          background={COLORS.white100}
          padding="20px"
          width="100%"
          textAlignLast="center"
        >
          {pokemon && (
            <Grid xs={12} sm={12} md={12} justify="center">
              <form onSubmit={handleSubmit(submit)}>
                <CustomDiv width="100%">
                  <CustomImg
                    width="50%"
                    borderRadius="10px"
                    src={pokemon.image}
                  />

                  <CustomParagraph
                    textAlign="center"
                    fontSize="30px"
                    padding="20px"
                  >
                    General
                  </CustomParagraph>

                  <CustomDiv padding="20px" justifyContent="center">
                    <CustomLabel>
                      <CustomParagraph padding="0 0 10px 0">
                        Name
                      </CustomParagraph>
                    </CustomLabel>
                    <CustomInput
                      ref={register({ required: true })}
                      width="100%"
                      padding="5px"
                      name="name"
                      defaultValue={pokemon.name}
                    />
                    {errors.name && <span>This field is required</span>}
                  </CustomDiv>

                  <CustomParagraph
                    textAlign="center"
                    fontSize="30px"
                    padding="20px"
                  >
                    Types
                  </CustomParagraph>

                  {pokemon.types.map(type => (
                    <CustomDiv
                      key={`${type}-pokemon`}
                      justifyContent="center"
                      padding="20px"
                    >
                      <CustomInput
                        ref={register({ required: true })}
                        width="100%"
                        padding="5px"
                        defaultValue={type}
                        name={`types[${fieldIdTyp}]`}
                      />
                      {errors[`types[${fieldIdTyp}]`] && (
                        <span>This field is required</span>
                      )}
                      <CustomInput display="none" defaultValue={fieldIdTyp++} />
                    </CustomDiv>
                  ))}

                  <CustomParagraph
                    textAlign="center"
                    fontSize="30px"
                    padding="20px 20px"
                  >
                    Attacks
                  </CustomParagraph>

                  {pokemon.attacks.special.map(atk => (
                    <CustomDiv
                      key={`${atk.name}-pokemon`}
                      borderRadius="10px"
                      padding="10px"
                      width="100%"
                      border="solid 2px"
                      margin="20px 0 20px 0"
                    >
                      <CustomDiv padding="20px">
                        <CustomLabel>
                          <CustomParagraph padding="0 0 10px 0">
                            Name
                          </CustomParagraph>
                        </CustomLabel>
                        <CustomInput
                          ref={register({ required: true })}
                          width="100%"
                          padding="5px"
                          name={`attacks.special[${fieldIdAtk}].name`}
                          defaultValue={atk.name}
                        />
                        {errors[`attacks.special[${fieldIdAtk}].name`] && (
                          <span>This field is required</span>
                        )}
                      </CustomDiv>
                      <CustomDiv padding="20px">
                        <CustomLabel>
                          <CustomParagraph padding="0 0 10px 0">
                            Type
                          </CustomParagraph>
                        </CustomLabel>
                        <CustomInput
                          ref={register({ required: true })}
                          width="100%"
                          padding="5px"
                          name={`attacks.special[${fieldIdAtk}].type`}
                          defaultValue={atk.type}
                        />
                        {errors[`attacks.special[${fieldIdAtk}].type`] && (
                          <span>This field is required</span>
                        )}
                      </CustomDiv>
                      <CustomDiv padding="20px">
                        <CustomParagraph padding="0 0 10px 0">
                          Damage
                        </CustomParagraph>
                        <CustomInput
                          width="100%"
                          type="number"
                          padding="5px"
                          ref={register({ required: true })}
                          name={`attacks.special[${fieldIdAtk}].damage`}
                          defaultValue={atk.damage}
                        />
                        {errors[`attacks.special[${fieldIdAtk}].damage`] && (
                          <span>This field is required</span>
                        )}
                        <CustomInput
                          display="none"
                          defaultValue={fieldIdAtk++}
                        />
                      </CustomDiv>
                    </CustomDiv>
                  ))}
                </CustomDiv>
                <Grid justify="center" container item xs={12} spacing={1}>
                  <Grid item>
                    <CustomButton onClick={() => history.push(`/read/`)}>
                      Return
                    </CustomButton>
                  </Grid>
                  <Grid item>
                    <CustomButton type="submit">Save</CustomButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          )}
        </CustomDiv>
      </Grid>
    </Grid>
  );
};
