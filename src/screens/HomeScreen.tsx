import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { FadeInImage } from '../components/FadeInImage'
import { NasaCard } from '../components/NasaCard'
import { useLoadData } from '../hooks/useLoadData'
import { useRenderNasaData } from '../hooks/useRenderNasaData'

import { styles } from '../theme/appTheme'


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { incrementarPage, numberPage } = useLoadData();
  const { items } = useRenderNasaData();

  return (
    <>
      <Image
        source={require('../assets/NASA.png')}
        style={styles.nasaBG}
      />

      <View style={{alignItems: 'center'}}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.index}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => <NasaCard nasaItem={item} />}

          // Header
          ListHeaderComponent={() => (
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
            }}>
              NasaDex
            </Text>
          )}

          // infinite scroll
          onEndReached={() => incrementarPage(numberPage + 1)}
          onEndReachedThreshold={0.4}

          ListFooterComponent={(
            <ActivityIndicator
              size={100}
              color="grey"
            />
          )}
        />
      </View>


    </>
  )
}
