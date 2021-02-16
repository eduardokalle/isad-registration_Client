import React from 'react';
import { Layout as AntLayout, Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../../../assets/dashboard.css';

const { Header, Content, Footer, Sider  } = AntLayout;

const axios = require('axios');

const Layout = ({ children, menus }) => {
  return ( 
      <>      
        <AntLayout>
              <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                  console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
              }}
              >
              <div className="logo" />
              
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                  {menus.map(item => (
                      <Menu.Item key={item.path}>
                      <Link to={item.path}>{item.icon}{'    '} {item.label}</Link>
                      </Menu.Item>
                      ))} 
              </Menu>
              </Sider>
              <AntLayout>
              <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
              <Link to="/">   
                  <Button type="primary" className="logout" icon={<LogoutOutlined/>}>
                  Salir 
                  </Button>
              </Link> 
              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {children}
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>2021 Created by edokalle</Footer>
              </AntLayout>
          </AntLayout>,
      </>
    );
}
 
export default Layout;