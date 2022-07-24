import { useContext, useEffect, useState } from 'react';
import { nasaApi } from '../api/nasaApi';
import { PageContext } from '../context/NumberContext';
import { Datum, Item, MyItems, NasaPaginatedResponse } from '../interfaces/nasaInterfaces';


export const useNasaPaginated = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [nasaDataList, setNasaDataList] = useState<MyItems[]>([]);

    const { numberPage } = useContext(PageContext);

    const loadNasaData = async () => {
        setIsLoading(true);

        const resp = await nasaApi.get<NasaPaginatedResponse>(`https://images-api.nasa.gov/search?q=mars&media_type=image&page=${numberPage}`);
        let items = resp.data.collection.items;

        const sendNewData = () => {
            const newNasaList: MyItems[] = items.map(({ data, links }) => {
                const { title, description, date_created, keywords, nasa_id }: Datum = data[0];

                let linkBueno;

                links.forEach(({ href }) => {
                    if (href.includes(' ')) {
                        linkBueno = 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg';
                    } else {
                        linkBueno = href;
                    }
                })

                return {
                    linkBueno,
                    title,
                    description,
                    date_created,
                    keywords, 
                    nasa_id
                };
            });

            setNasaDataList([...nasaDataList, ...newNasaList]);
            setIsLoading(false);
        }

        sendNewData();

    };

    useEffect(() => {
        loadNasaData();
    }, [numberPage]);

    return ({
        isLoading,
        nasaDataList,
        loadNasaData,
    })

}
