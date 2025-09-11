import React from 'react';
import { Select } from 'antd';
const onChange = value => {
    console.log(`selected ${value}`);
};
const onSearch = value => {
    console.log('search:', value);
};
const App = () => (
    <Select
        showSearch
        placeholder="Todas las monedas"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={[
            {
                value: 'Dolar americano',
                label: 'Dolar americano',
            },
            {
                value: 'Euro',
                label: 'Euro',
            },
        ]}
    />
);
export default App;