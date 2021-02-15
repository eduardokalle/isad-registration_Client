import React, { Suspense } from 'react';
import { Spin } from 'antd';
import  Registration  from '../pages/Registration';
import Church from '../pages/church'   
import Workship from '../pages/worship'  
import { Switch, Route, Redirect } from 'react-router-dom';

const routes = [{
    index:'Registration',
    path: "/Registration",
    component :Registration,
    when : 'logged'
  },
  {
    index:'Worship',
    path: "/Worship",
    component :Workship,
    when : 'logged'
  },
  {
    index:'Church',
    path: "/Church",
    component :Church,
    when : 'logged'
  },    

]

const Routes = () => {
  
  return (
    <Suspense fallback={<Spin size="large" className="custom-layout-spin" />}>
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
    </Suspense>
  );
};

export default Routes;