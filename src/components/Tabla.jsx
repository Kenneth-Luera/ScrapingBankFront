import React, { useEffect, useState } from 'react';
import { Space, Table as TableAnt, Tag } from 'antd';
import { getAllScraping } from '../api/api_Scraping';



const columns = [
    {
        title: "Banco / Casa de Cambio",
        dataIndex: "name",
        key: "name",
        render: text => <a>{text}</a>,
    },
    {
        title: "Compra",
        dataIndex: "compra",
        key: "compra",
    },
    {
        title: "Venta",
        dataIndex: "venta",
        key: "venta",
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAllScraping()
            .then((res) => {
                setData(res.data);
                setLoading(false);
            }
            )
            .catch((err) => {
                console.error("Error al traer los datos:", err);
                setLoading(false);
            });
    }, []);
    console.log(data);
    const dataParced = data.map((item, index) => ({
        key: index,
        name: item.name,
        compra:
        <div className='text-green-500'>
            {item.compra} USD
        </div>,
        venta: 
        <div className='text-red-500'>
            {item.venta} USD
        </div>
    }));
    console.log(dataParced);
    return (<TableAnt columns={columns} dataSource={dataParced} />); 
}

export default Table;