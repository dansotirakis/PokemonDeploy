import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../../common/store/history';
import { ROUTES } from './routes';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Suspense fallback={<h1>Loading ...</h1>}>
          {ROUTES.map((route, index) => (
            <Route
              key={`route-${route.path}-${index}`}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Suspense>
      </Switch>
    </ConnectedRouter>
  );
};

export { Routes };
