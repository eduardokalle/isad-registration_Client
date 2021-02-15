import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import swal from 'sweetalert';
import { SettingOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Modal, Button  } from 'antd';
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
        this.setState({ loading: true });
        setTimeout(() => {
        this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    passEnviar = () => {
      
    }

    handleChange(e) { console.log(e.target.value) }

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
                onOk={this.handleChange}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                    Retroceder
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleChange}>
                    Enviar
                    </Button>,
                ]}
                >
                <Input size="large"  onChange={this.handleChange}/>
                <p>Ingresa el codigo para ingresar a la administacion</p>
                </Modal>
        </>  

        );
    }

}
export default passW;