import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Table } from 'antd';
import LoadSpinner from './LoadSpinner'

function Church () {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


        useEffect(() => {
          const init = async () => {
            axios.get("https://isad-egistration-api.herokuapp.com/api/church")
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
              title: 'Nombre',
              width: 160,
              dataIndex: 'nombre',
              key: 'nombre',
              
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
              dataIndex: 'estado',
              key: 'estado', 
             
            },
            { 
              title: 'Imagen', 
              width: 250 , 
              dataIndex: 'imagen', 
              key: 'imagen' ,
              
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
                  <h3>Registro de iglesias</h3>
                  {loading ? <LoadSpinner /> :    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />  }
                   
                </>

          );
    
}
 
export default Church;