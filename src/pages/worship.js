import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Table } from 'antd';
import LoadSpinner from './LoadSpinner'

function Worship () {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


        useEffect(() => {
          const init = async () => {
            axios.get("https://isad-egistration-api.herokuapp.com/api/worship")
            .then(res => {
              console.log('data = ', res.data);
               setData(res.data);
               setLoading(false);
            })
          };
          init();
        }, [])

        const columns = [
            {
              title: 'ID',
              width: 50,
              dataIndex: 'id',
              key: 'id',
             
            },
            {
              title: 'Session',
              width: 140,
              dataIndex: 'session',
              key: 'session',
             
            },
            {
              title: 'Descripcion',
              width: 250,
              dataIndex: 'descripcion',
              key: 'descripcion',
              
            },
            {
              title: 'Estado',
              width: 160,
              //dataIndex: 'estado' == 1 ? 'Activo' : 'Inactivo',
              dataIndex: 'estado',  
              key: 'estado',
              
            },    
            { 
              title: 'Fecha', 
              width: 220 , 
              dataIndex: 'fecha', 
              key: 'fecha', 
             
            },
            {
              title:'Acciones',
              width: 100 ,
              dataIndex: 'operation', 
              fixed: 'right',
            }
          ];
          
          

        return (
                <>
                  <h3>Citas</h3>
                  {loading ? <LoadSpinner /> :    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />  }
                   
                </>

          );
    
}
 
export default Worship;