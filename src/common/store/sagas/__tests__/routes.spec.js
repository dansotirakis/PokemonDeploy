import { testSaga } from 'redux-saga-test-plan';
import { sagaNavigation } from '../routePermission';

describe('Router Saga Test', () => {
  it('Saga test', () => {
    testSaga(sagaNavigation, {
      payload: {
        location: { pathname: '/' },
      },
    })
      .next()
      .next()
      .isDone();
  });
});
