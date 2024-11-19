import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
import canchas from '../data/canchas.json'
import FlatCard from '../components/FlatCard'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const FieldsScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Se denegó el permiso para acceder a la ubicación');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const renderFieldItem = ({item}) => {
    const { coordenadas } = item;
    if (!coordenadas) {
      return (
        <View style={styles.flatContainer}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.nombre}</Text>
          <Text>Coordenadas no disponibles</Text>
        </View>
      );
    }
    const { latitude, longitude } = coordenadas; // Asumiendo que ubicacion tiene latitud y longitud
    
    return (
      <Pressable onPress={() => navigation.navigate('Cancha', item.nombre)}>
        <FlatCard style={styles.flatContainer}>
          <MapView
            style={{ width: '100%', height: 200 }}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: latitude, longitude: longitude }}
              title={item.nombre}
              description={item.tipo}
            />
          </MapView>
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
    padding: 10,
    flexDirection: 'column',
    height: 300,
},
})