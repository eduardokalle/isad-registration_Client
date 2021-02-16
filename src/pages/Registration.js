import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Table } from 'antd';
import LoadSpinner from './LoadSpinner'

function Registration () {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


        useEffect(() => {
          const init = async () => {
            axios.get("https://isad-egistration-api.herokuapp.com/api/registration")
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
              title: 'Cedula',
              width: 140,
              dataIndex: 'cedula',
              key: 'cedula',
             
            },
            {
              title: 'Nombre',
              width: 160,
              dataIndex: 'nombre',
              key: 'nombre',
              
            },
            {
              title: 'Apellido',
              width: 160,
              dataIndex: 'apellido',
              key: 'apellido',
              
            },    
            { 
              title: 'Fecha', 
              width: 220 , 
              dataIndex: 'fecha', 
              key: 'fecha', 
             
            },
            { 
              title: 'Iglesia', 
              width: 220 , 
              dataIndex: 'iglesia', 
              key: 'iglesia', 
             
            },
            { 
              title: 'Culto', 
              width: 250 , 
              dataIndex: 'culto', 
              key: 'culto' ,
              
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
                  <h3>Inscripciones a cultos </h3>
                  {loading ? <LoadSpinner /> :    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />  }
                   
                </>

          );
    
}
 
export default Registration;