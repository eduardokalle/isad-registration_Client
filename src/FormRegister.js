import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Select, Layout, Menu, Breadcrumb , Image } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import swal from 'sweetalert';
import { Form, Input, InputNumber, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const axios = require('axios');

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const { Option } = Select;

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

function onChange(values) {
  console.log(`selected ${values}`);
}

const validateMessages = {
  required: ' El campo ${label} es requerido!',
  types: {
    email: 'No es un email valido!',
    number: 'No es un numero valido!',
  },
  number: {
    range: '${label} debe estar entre  ${min} y ${max}',
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log(values);
    axios.post('https://isad-egistration-api.herokuapp.com/api/registration/', {
                cedula: values.cedula,
                nombre: values.nombre,
                apellido: values.apellido,
                iglesia: values.iglesia,
                culto:  values.culto
            })  
            .then(function (response) {
              console.log(response);
                if (response.status == 200) {
                  swal(response.data.message , "Haz clic en el botón!", "success");
                }else{
                  swal("Ha ocurrido un error", "Haz clic en el botón!", "error");
                }
            })
            .catch(function (error) {
              console.log(error);
              swal("Ha ocurrido un error", "Haz clic en el botón!", "error");

            })
  };


  return (
    <>
      <Layout className="layout">
        <Header>  
          <div className="logo" />
            <Menu theme="dark" mode="horizontal">
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
              <Row justify='center'>
                <Col span={24} justify='center'>Registro IASD </Col>
              </Row>
              <Row>
                <Col span={8}></Col>  
                <Col span={8} justify="space-around" align="middle" className='height : 100%'>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                      <Form.Item
                        name={'cedula'}
                        label="Cedula"
                        rules={[
                          {
                            type: 'number',
                            min: 10000000,
                            max: 9999999999999,
                            required: true,
                          },  
                        ]}
                      >
                        <InputNumber style={{ width: 200 }}  />
                      </Form.Item>
                      <Form.Item
                        name={'nombre'}
                        label="Nombre"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={'apellido'}
                        label="Apellido"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                          name={'iglesia'}
                          label="Iglesia"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                      >
                        <Select    
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Selecciona tu iglesia"
                          optionFilterProp="children"
                          //onChange={onChange}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="Canaan">Canaan</Option>
                          <Option value="La union">La union</Option>
                          <Option value="Peniel">Peniel</Option>
                          <Option value="Salem">Salem</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                          name={'culto'}
                          label="Culto"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                      >
                        <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Seleccion tipo de culto"
                          optionFilterProp="children"
                          //onChange={onFinish}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="1 Culto">1er Culto</Option>
                          <Option value="2 Culto">2do Culto</Option>
                          <Option value="Culto joven">Culto Joven</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                          Enviar
                        </Button>
                      </Form.Item>
                    </Form>
                </Col>
                <Col span={8}></Col>
              </Row>
            </div>
        </Content> 
        <Footer style={{ textAlign: 'center' }}>2021 Created by edokalle</Footer>        
      </Layout>                
    </>
  );
}

export default Demo;
