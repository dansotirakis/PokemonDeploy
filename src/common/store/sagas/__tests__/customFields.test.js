import customFieldsSaga from '../customFields';
import { expectSaga } from 'redux-saga-test-plan';
import { create, update } from '../../../services/serviceCustomFields';

describe('Custom Fields Saga Tests', () => {
  it('Create Saga Test', () => {
    const name = 'teste';

    expectSaga(customFieldsSaga)
      .provide({
        call(effect, next) {
          if (effect.fn === create) {
            return { id: 1, name: 'teste', status: true };
          }
        },
      })
      .put({
        type: 'CREATE_CUSTOM_FIELDS_SUCCESS',
        id: 1,
        name: 'teste',
        status: true,
      })
      .dispatch({ type: 'CREATE_CUSTOM_FIELDS_REQUEST', name })
      .run({ silenceTimeout: true });
  });

  it('Update Saga Test', () => {
    const id = 1;
    const name = 'teste';
    const status = false;

    expectSaga(customFieldsSaga)
      .provide({
        call(effect, next) {
          if (effect.fn === update) {
            return { id: 1, name: 'teste', status: false };
          }
        },
      })
      .put({
        type: 'UPDATE_CUSTOM_FIELDS_SUCCESS',
        id: 1,
        name: 'teste',
        status: false,
      })
      .dispatch({ type: 'UPDATE_CUSTOM_FIELDS_REQUEST', id, name, status })
      .run({ silenceTimeout: true });
  });
});
