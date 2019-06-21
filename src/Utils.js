import { createContext } from "react";
import axios from 'axios';

const getData = url => { 
    return axios.get(url)
}
const getJSON = url => getData(url)

const FilterContext = createContext([]);

export { FilterContext, getJSON }