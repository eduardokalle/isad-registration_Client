import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import FormR from './components/FormRegister';
import Dashboard from './components/Dashboard';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={FormR} />
          <Route path="/Dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

