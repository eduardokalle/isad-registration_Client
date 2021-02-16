import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const Routes = ({  routes }) => {  
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.index}
          exact={route.exact ? route.exact : false}
          path={route.path}
          component={route.component}
          render={ props => {
                return <Redirect to={routes} />
                }
          }
        />
      ))}
    </Switch>
  );
};

export default Routes;