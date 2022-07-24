import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

import { Loading } from '../components/Loading'
import { NasaCard } from '../components/NasaCard'
import { SearchInput } from '../components/SearchInput'

import { useNasaSearch } from '../hooks/useNasaSearch'
import { MyItems } from '../interfaces/nasaInterfaces'

import { styles } from '../theme/appTheme'



export const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const { isFetching, nasaDataList } = useNasaSearch(term);

    const [ nasaFiltered, setNasaFiltered ] = useState<MyItems[]>([])

    useEffect(() => {

        if (term.length === 0) {
            return setNasaFiltered([]);
        }

        setNasaFiltered(
            nasaDataList.filter(
                (item) => item.title.toLocaleLowerCase()
                    .includes(term.toLocaleLowerCase())
            )
        );
        
    }, [term])



    if (isFetching) {
        return <Loading />;
    }

    return (
        <View style={{
            flex: 1,
            marginTop: 20,
            justifyContent: 'center'
        }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
            />

            <FlatList
                data={nasaFiltered}
                keyExtractor={(item) => item.index}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => <NasaCard nasaItem={item} />}

                // Header
                ListHeaderComponent={() => (
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        top: 20,
                        marginBottom: 20,
                    }}>{term}</Text>
                )}
            />
        </View>
    )
}
