import React, { useEffect, useState } from 'react';
import { Card as CardAnt } from 'antd';
import { getPriceSell } from '../api/api_Scraping';

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
]


const CardSell = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPriceSell()
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
    return (
        <>
            <div className='flex relative w-full'>
                <div className='bg-red-600 w-3 h-full rounded-3xl absolute -left-1'></div>
                <CardAnt className='w-full' columns={columns} datasource={data} loading={loading}>
                    <p>Mejor Venta</p>
                    <p>{data.name}</p>
                    <p style={{ color: 'green' }}>{data.compra} USD</p>
                    <p style={{ color: 'red' }}>{data.venta} USD</p>
                    <p>Card content</p>
                </CardAnt>
            </div>
        </>
    );

}
export default CardSell;