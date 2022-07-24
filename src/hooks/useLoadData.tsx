import React, { useContext, useEffect, useState } from 'react'
import { PageContext, PageProvider } from '../context/NumberContext';
import { useNasaPaginated } from './useNasaPaginated';

export const useLoadData = () => {

    const [numberPage, setNumberPage] = useState(1);
    const { loadNasaData } = useNasaPaginated();

    const {setNumber} = useContext(PageContext);

    const incrementarPage = (number = 1) => {
        setNumberPage(number);
        setNumber(number);
        
        loadNasaData();
    }


    useEffect(() => {
      incrementarPage(numberPage);
    }, [numberPage])
    

    return {
        numberPage,
        incrementarPage,
    }
}
