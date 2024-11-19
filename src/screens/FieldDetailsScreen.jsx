import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const FieldDetailsScreen = ({route}) => {
  const { nombre, ubicacion, tipo, coordenadas, descripcion, precio, opiniones } = route.params;

  return (
    <ScrollView style={styles.container}>
      {coordenadas && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordenadas.latitude,
            longitude: coordenadas.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: coordenadas.latitude, longitude: coordenadas.longitude }}
            title={nombre}
            description={tipo}
          />
        </MapView>
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}> 📌 {nombre}</Text>
        <Text style={styles.info}>📍 {ubicacion}</Text>
        <Text style={styles.info}> ⚽️ {tipo}</Text>
        <Text style={styles.info}> ⚽️ {descripcion}</Text>
        <Text style={styles.info}> ⚽️ {precio}</Text>
        <Text style={styles.info}> Opiniones </Text>
        <FlatList 
          data={opiniones}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <Text>{item.usuario}</Text>
              <Text>{item.comentario}</Text>
              <Text>{item.puntuacion}</Text>
            </View>
          )}
        />

      </View>
      
      
    </ScrollView>
  )
}

export default FieldDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  map: {
    width: '100%',
    height: 600,
  },
  info: {
    fontSize: 20,
    marginTop: 10,
  },
})