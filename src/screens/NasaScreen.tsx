import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Tab1'

interface Props extends StackScreenProps<RootStackParams, 'NasaScreen'> { };


export const NasaScreen = ({ navigation, route }: Props) => {

  const { nasaItem, color } = route.params;

  const { date_created, description, title, linkBueno, keywords, nasa_id } = nasaItem;

  return (
    <ScrollView>

      {/* Header */}
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color
      }}>

        {/* Imagen */}
        <FadeInImage
          uri={linkBueno}
          style={styles.imageContainer}
        />

        {/* Flecha de regreso */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.buttonBack}
        >
          <Icon
            name="arrow-back"
            color="white"
            size={35}
          />
        </TouchableOpacity>

      </View>

      {/* Detalles */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description + '\n'}
          {date_created}
        </Text>
        
        <Text style={styles.keywords}>
          Keywords:
          {'\n'}
          {keywords.join('\n')}
        </Text>

        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 20,
          borderTopColor: 'black',
          borderWidth: 1,
        }}>
          {'\n'}
          Nasa_Id: {nasa_id}
        </Text>
        
      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonBack: {
    top: 20,
    left: 20,
    zIndex: 999
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  detailsContainer: {
    height: '100%',
    width: '100%',
    zIndex: 999
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontSize: 23,
    color: '#000',
    textAlign: 'center',
  },
  keywords: {
    fontSize: 23,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
    borderTopColor: '#000',
    borderTopWidth: 1
  }
})