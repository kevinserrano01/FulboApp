import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
import canchas from '../data/canchas.json'
import FlatCard from '../components/FlatCard'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const FieldsScreen = ({navigation}) => {    

    const renderFieldItem = ({item}) => {    
      return (
        <Pressable onPress={() => navigation.navigate('Cancha', {...item})}>
          <FlatCard style={styles.flatContainer}>
          <Image source={require('../../assets/icono-futbol.png')} style={{width: 190, height: 180}} />
            <View style={{padding: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.nombre}</Text>
              <Text>{item.ubicacion}</Text>
              <Text>{item.tipo}</Text>
            </View>
          </FlatCard>
        </Pressable>
      )
    };
  return (
    <>
      { canchas.length > 0 ?
        <FlatList
          data={canchas}
          keyExtractor={item => item.id.toString()}
          renderItem={renderFieldItem}
        />
        :
        <Text>Error al cargar las canchas.</Text>
      }
    </>
  )
}

export default FieldsScreen

const styles = StyleSheet.create({
  flatContainer: {
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    height: 200,
},
})