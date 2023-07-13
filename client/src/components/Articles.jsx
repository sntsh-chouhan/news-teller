import { useEffect } from 'react';
import {Box , Typography, styled} from '@mui/material';
import { getNews } from '../service/api';



const Articles = ()=>{
    useEffect(()=>{
        dailyNews();
    }, []);

    const dailyNews = async ()=>{
        let responce = await getNews();
    }

    return (
        <Box>
            hello from article
        </Box>
    )
}

export default Articles;