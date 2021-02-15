import React from 'react';
import { Spin } from 'antd';

const LoadSpinner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop : '80px' }}>
            <Spin />
        </div>
    );
}

export default LoadSpinner;