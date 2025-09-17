import axios from "axios";




export const getAllScraping = () => {
    return axios.get('http://52.15.173.152:8000/api/filtro/')
}

export const getPriceSell = () => {
    return axios.get('http://52.15.173.152:8000/api/bestPriceSell/')
}

export const getPriceBuy = () => {
    return axios.get('http://52.15.173.152:8000/api/bestPriceBuy/')
}

export const getLastScraping = () => {
    return axios.get('http://52.15.173.152:8000/api/lastScraping/')
}