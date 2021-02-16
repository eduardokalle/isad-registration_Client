import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Spin } from 'antd';
import { BrowserRouter  } from 'react-router-dom';
import { LayoutContainer as Layout } from './components/Security/Layout'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" className="custom-layout-spin" />}>
        <Layout />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

