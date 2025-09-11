import React, { useEffect, useState } from 'react';
import { getLastScraping } from "../api/api_Scraping";

const columns = [
    {
        title: "identificador",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "codScraping",
        dataIndex: "codScraping",
        key: "codScraping",
    },
    {   
        title: "timenow",
        dataIndex: "timenow",
        key: "timenow", 
    },
]

const Scraping = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getLastScraping()
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
    return (
            <div columns={columns} datasource={data}>
                <p>Ultimo Scraping</p>
                <p>{data.timenow}</p>
            </div>
    ); 
}
export default Scraping;