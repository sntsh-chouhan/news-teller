import axios from 'axios';

export const getNews = async ()=>{

    const URL = '';

    try{
        return await axios.get(URL);
    }catch(error){
        console.error('error while calling get news api => ', error.message);
    }
}