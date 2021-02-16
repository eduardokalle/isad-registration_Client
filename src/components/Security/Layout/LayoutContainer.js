import React, { useEffect, useState } from 'react';
import {
  Route, Switch, withRouter
} from 'react-router-dom';
import { LogoutOutlined, HomeOutlined, AuditOutlined, UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import Layout from './Layout';
import Routes from '../../../pages/Routes';
import FormR from '../../FormRegister';
import Registration from '../../../pages/Registration';
import Church from '../../../pages/church';
import Workship from '../../../pages/worship';

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
};

const Login = () => {
  return (
    <div>Login</div>
  )
};

const routes = [{
  index: "dashboard",
  path: "/dashboard",
  component: Dashboard,
  when: 'logged'
},{
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

const LayoutContainer = ({
  history, location: { pathname }, handleScope, globalScope
}) => {

  const logged = true;

  const menus = [
    { path: '/Dashboard', label: 'Inicio' , icon: <AppstoreOutlined /> , key:'1'},
    { path: '/Registration', label: 'Citas' , icon: <UserOutlined/> , key:'2'},
    { path: '/Worship', label: 'Cultos' , icon: <AuditOutlined/> , key:'3'},
    { path: '/Church', label: 'Iglesias' , icon: <HomeOutlined/> , key:'4'},
  ];

  return (
    <Switch>
      <Route exact path="/" component={FormR} />
      {/*!logged && ( */
      logged && (
        <Route
          path="/raw/login"
          component={Login} 
        />
      )}
      {logged && (
        <Layout
          menus={menus}
        >
          <Routes
            routes={routes}
          />
        </Layout>
      )}
    </Switch>
  );
};

export default withRouter(LayoutContainer);
