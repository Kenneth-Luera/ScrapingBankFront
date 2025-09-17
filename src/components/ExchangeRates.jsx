import React, { useEffect, useState } from "react";
import { getAllScraping } from "../api/api_Scraping";
import { Breadcrumb, Layout, theme, Cascader, Card, Button, Flex, Divider, Typography } from 'antd';
import Table from './Tabla'
import CardBuy from './cards'
import CardSell from './cardsell'
import Scraping from "./Scraping";


const { Title, Paragraph, Text, Link } = Typography;

function recargarPagina() {
    window.location.reload(false);
}

const { Header, Content, Footer } = Layout;
export default function ExchangeRates() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    useEffect(() => {
        getAllScraping()
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al traer los datos:", err);
                setLoading(false);
            });
    }, []);
    const options = [
        {
            value: '1',
            label: 'USD'
        },
        {
            value: '2',
            label: 'EUR'
        },
        {
            value: '3',
            label: 'GBP'
        },
    ]
    const onChange = value => {
        console.log(value);
    };
    return (
        <Layout className="h-screen">
            <Typography>
                <Header className="flex items-center !bg-white !h-20">
                    <div className="demo-logo" />
                    <Title>Tipo de cambio esto si funciona</Title>
                </Header>
                <div className="flex justify-center  p-10">
                    <Card className="w-full flex justify-between p-1">
                        <div>
                            <p>Card content</p>
                        </div>

                        <div>
                            <Scraping />
                            <Flex gap="small" wrap>
                                <Button onClick={recargarPagina} type="primary">Actualizar</Button>
                            </Flex>
                        </div>

                    </Card>
                </div>
                <Content style={{ padding: '0 48px' }}>
                    <Breadcrumb
                        style={{ margin: '16px 0' }}
                        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                    />
                    <div className="flex justify-center gap-4 mb-4">
                        <CardBuy />
                        <CardSell />
                    </div>
                    <div
                        style={{
                            background: colorBgContainer,
                            minHeight: 280,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Table />
                    </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
                </Typography>
        </Layout>
    );
};
