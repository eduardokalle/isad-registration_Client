import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import 'antd/dist/antd.css';
import swal from 'sweetalert';
import { SettingOutlined } from '@ant-design/icons';
import { Form, Input, Modal, Button  } from 'antd';
import '../assets/dashboard.css' 

class passW extends React.Component {

    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = () => {
        this.setState({  
            loading: true,
        });
        setTimeout(() => {
        this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    onFinish = (values) =>{
      console.log(values.pass);
      if (values.pass == '45FK') {
        console.log('XXXX', values.pass);
        return <Redirect to="/dashboard" />;
      }else{
        swal("Error!", "El codigo es incorrecto!", "error");
      }
    }
    
    render () {
      
        const { visible, loading } = this.state;

        return (
        <>
            <Button type="primary" onClick={this.showModal} className="conf" icon={<SettingOutlined/>}>
            Configuracion
            </Button>
                <Modal
                visible={visible}
                title="Administración"
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                    Retroceder
                    </Button>
                ]}
                >
                <Form onFinish={this.onFinish}>   
                <Form.Item
                    name={'pass'}
                >  
                    <Input size="large"/>
                </Form.Item>    
                        <p>Ingresa el codigo para ingresar a la administacion</p>
                <Form.Item>          
                    <Button key="submit" type="primary" htmlType="submit" loading={loading}>
                        Enviar
                    </Button>
                </Form.Item> 
                </Form> 
                </Modal>
        </>  

        );
    }

}
export default passW;