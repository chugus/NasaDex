import { useContext, useEffect } from 'react';
import { PageContext } from '../context/NumberContext';
import { MyItems } from '../interfaces/nasaInterfaces';
import { useNasaPaginated } from './useNasaPaginated';


export const useRenderNasaData = () => {
    const { nasaDataList } = useNasaPaginated();

    const {numberPage: page} = useContext(PageContext);

    let items: MyItems[] = [];

    const renderNasaData = (incrementarId: number = 0, newNasaDataList: MyItems[]) => {
        for (const item in newNasaDataList) {
            const itemDeNDL = newNasaDataList[item];

            let objetoConIndex = {
                ...itemDeNDL,
                index: item + incrementarId,
            }

            items.push(objetoConIndex);
        }
    }

    renderNasaData(0, nasaDataList);

    useEffect(() => {
      renderNasaData(page, nasaDataList);
    }, [page])
    

    return ({ items });

}
