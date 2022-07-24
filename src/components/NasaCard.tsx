import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import ImageColors from 'react-native-image-colors';

import { MyItems } from '../interfaces/nasaInterfaces'


const windowWidth = Dimensions.get('window').width;

interface Props {
    nasaItem: MyItems;
}

export const NasaCard = ({ nasaItem }: Props) => {

    const navigation = useNavigation();

    const [ bgColor, setBgColor ] = useState('grey');
    const isMounted = useRef(true);

    useEffect(() => {

        ImageColors.getColors(nasaItem.linkBueno, { fallback: 'grey' })
            .then(colors => {

                if (!isMounted.current) return;

                (colors.platform === 'android') 
                    ? setBgColor(colors.dominant || 'grey')
                    : '';
            })
            .catch(console.log);

        return () => {
            isMounted.current = false;
        }
    }, [])


    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={
                () => navigation.navigate('NasaScreen', {
                    nasaItem,
                    color: bgColor
                })
            }
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}>
                {/* Nombre del item */}
                <View>
                    <Text numberOfLines={3} style={styles.name}>
                        {nasaItem.title}
                    </Text>
                </View>

                <Image
                    source={require('../assets/NASA.png')}
                    style={styles.nasaImage}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
        borderWidth: 1,
        height: 120,
        marginBottom: 25,
        marginHorizontal: 20,
        overflow: 'hidden',
        padding: 10,
        width: '100%',
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        left: 10,
        top: 20,
        width: '100%',
        zIndex: 2
    },
    nasaImage: {
        bottom: -25,
        height: 100,
        opacity: 0.4,
        position: 'absolute',
        right: -25,
        width: 100,
    }
})