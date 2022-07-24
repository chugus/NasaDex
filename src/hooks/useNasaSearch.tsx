import { useEffect, useState } from 'react';
import { nasaApi } from '../api/nasaApi';
import { Datum, Item, MyItems, NasaPaginatedResponse } from '../interfaces/nasaInterfaces';


export const useNasaSearch = (title = '') => {

    const [isFetching, setIsFetching] = useState(true);
    const [nasaDataList, setNasaDataList] = useState<MyItems[]>([]);

    const loadNasaData = async () => {

        const resp = await nasaApi.get<NasaPaginatedResponse>(`https://images-api.nasa.gov/search?q=mars&media_type=image&title=${title}`);
        sendNewData(resp.data.collection.items);

    };

    const sendNewData = (items: Item[]) => {
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

        setNasaDataList(newNasaList);
        setIsFetching(false);

    }

    useEffect(() => {
        loadNasaData();
    }, []);

    return {
        isFetching,
        nasaDataList
    }

}
