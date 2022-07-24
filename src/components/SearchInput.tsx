import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebounceValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void;
}

export const SearchInput = ({onDebounce}: Props) => {

    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebounceValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue]);
    

    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar...'
                    placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon
                    name='search-outline'
                    size={25}
                    color='#5858D6'
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
        marginHorizontal: 20,
    },
    textBackground: {
        backgroundColor: '#F3F3F3',
        borderRadius: 50,
        height: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 8,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: 'black'
    }
})