import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const FieldDetailsScreen = ({route}) => {
  const { nombre, ubicacion, tipo, coordenadas, descripcion, precio, opiniones } = route.params;

  const renderOpinionItem = ({ item }) => (
    <View style={styles.opinionContainer}>
      <View style={styles.opinionHeader}>
        <Text style={styles.opinionUser}>{item.usuario}</Text>
        <Text style={styles.opinionRating}>{item.puntuacion} ⭐</Text>
      </View>
      <Text style={styles.opinionComment}>{item.comentario}</Text>
  </View>
  );

  const ListHeaderComponent = () => (
    <View style={styles.detailsContainer}>
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
      <Text style={styles.title}> 📌 {nombre}</Text>
      <Text style={styles.info}> • {ubicacion}</Text>
      <Text style={styles.info}> • {tipo}</Text>
      <Text style={styles.info}> • {descripcion}</Text>
      <Text style={styles.info}> • Precio por hora: {precio}</Text>
      <Text style={styles.opiniones}>  Opiniones </Text>
    </View>
  );

  return (
    <FlatList
      data={opiniones}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderOpinionItem}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={styles.container}
    />
  );
};

export default FieldDetailsScreen

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 550,
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
  },
  opinionContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  opinionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  opinionUser: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  opinionRating: {
    color: '#888',
    fontSize: 12,
  },
  opinionComment: {
    fontSize: 14,
    color: '#333',
  },
  opiniones: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    paddingTop: 20,
  },
})