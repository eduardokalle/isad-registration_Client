import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Select, Layout, Menu, Breadcrumb , Image} from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import swal from 'sweetalert';
import { Form, Input, InputNumber, Button } from 'antd';
import Config  from "../pages/passW";


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
  const [cultos, setCultos] = useState([]);
  const [iglesia, setIglesia ] = useState([]);

  useEffect(() => (
    axios.get('https://isad-egistration-api.herokuapp.com/api/worship/', {})
    .then(function (response) {
      console.log( 'worship response == ',response);
      setCultos(response?.data || []);
    })
    .catch(function (error) {
      console.log('worship error == ',error);

    })
  ), []);

  useEffect(() => (
    axios.get('https://isad-egistration-api.herokuapp.com/api/church/', {})
    .then(function (response) {
      console.log( 'church response == ',response);
      setIglesia(response?.data || []);
    })
    .catch(function (error) {
      console.log('church error == ',error);

    })
  ), []);

  const onFinish = (values) => {
    console.log(values);
    axios.post('https://isad-egistration-api.herokuapp.com/api/registration/', {
        cedula: values.cedula,
        nombre: values.nombre,
        apellido: values.apellido,
        fecha: values.fecha,
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
            <Config/>
            <Menu theme="dark" mode="horizontal">
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
              <Row justify='center'>
                <Col span={24} justify='center'>Registro IASD </Col>
              </Row>
              <Row className='form'> 
                <Col>
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
                        <Input style={{ width: 200 }} />
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
                        <Input  style={{ width: 200 }}/>
                      </Form.Item>
                      <Form.Item
                          name={'fecha'}
                          label="Fecha"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                      >
                        <Select    
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Selecciona tu fecha del culto"
                          optionFilterProp="children"
                          //onChange={onChange}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                          
                        >
                          { cultos.map(item => {
                            return (
                              <Option key={item.fecha}>
                                {item.fecha}
                              </Option>
                            );
                          })}
                        </Select>
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
                          
                        >
                           { iglesia.map(item => {
                            return (
                              <Option key={item.nombre}>
                                {item.nombre}
                              </Option>
                            );
                          })}
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
                        >
                          { cultos.map(item => {
                            return (
                              <Option key={item.session}>
                                {item.session}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                          Enviar
                        </Button>
                      </Form.Item>
                    </Form>
                </Col>
              </Row>
            </div>
        </Content> 
        <Footer style={{ textAlign: 'center' }}>2021 Created by edokalle</Footer>        
      </Layout>                
    </>
  );
}

export default Demo;
