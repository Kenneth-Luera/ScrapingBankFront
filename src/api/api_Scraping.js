import axios from "axios";




export const getAllScraping = () => {
    return axios.get('http://3.143.240.202:8000/api/filtro/') /* aqui cambia la direccion deacuerdo a tus necesidades ya sea en local o tomando el mismo de aws */ 
}

export const getPriceSell = () => {
    return axios.get('http://3.143.240.202:8000/api/bestPriceSell/') /* aqui cambia la direccion deacuerdo a tus necesidades ya sea en local o tomando el mismo de aws */ 
}

export const getPriceBuy = () => {
    return axios.get('http://3.143.240.202:8000/api/bestPriceBuy/') /* aqui cambia la direccion deacuerdo a tus necesidades ya sea en local o tomando el mismo de aws */ 
}

export const getLastScraping = () => {
    return axios.get('http://3.143.240.202:8000/api/lastScraping/') /* aqui cambia la direccion deacuerdo a tus necesidades ya sea en local o tomando el mismo de aws */ 
}