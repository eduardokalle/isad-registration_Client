import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Select, Layout, Menu, Breadcrumb , Image, Button } from 'antd';
import { LogoutOutlined, HomeOutlined, AuditOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import swal from 'sweetalert';
import { Form, Input, InputNumber,  } from 'antd';
import '../assets/dashboard.css';
import Routes from '../pages/Routes';
import Registration from '../pages/Registration';
import Church from '../pages/church';
import Worship from '../pages/worship';

const { Header, Content, Footer, Sider  } = Layout;

const axios = require('axios');

const menus = [
    { path: '/Resgistration', label: 'Citas' , icon: <UserOutlined/> , key:'1'},
    { path: '/Worship', label: 'Cultos' , icon: <AuditOutlined/> , key:'2'},
    { path: '/Church', label: 'Iglesias' , icon: <HomeOutlined/> , key:'3'},
];

const Dashboard = () => {
    return ( 
        <>      
          <Layout>
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
                <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
                <Link to="/">   
                    <Button type="primary" className="logout" icon={<LogoutOutlined/>}>
                    Salir 
                    </Button>
                </Link> 
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                      <Routes/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>2021 Created by edokalle</Footer>
                </Layout>
            </Layout>,
        </>
     );
}
 
export default Dashboard;