import { StyleSheet, Text, View, ScrollView, FlatList, Pressable, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { useGetFieldQuery } from '../services/fieldsService';

const FieldDetailsScreen = ({navigation}) => {
  const fieldId = useSelector(state => state.fieldsReducer.value.fieldId);
  const { data: field, error, isLoading } = useGetFieldQuery(fieldId);

  const renderOpinionItem = ({item}) => (
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
      {field.coordenadas && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: field.coordenadas.latitude,
            longitude: field.coordenadas.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: field.coordenadas.latitude, longitude: field.coordenadas.longitude }}
            title={field.nombre}
            description={field.ubicacion}
          />
        </MapView>
      )}
      <Text style={styles.title}> 📌 {field.nombre}</Text>
      <Text style={styles.info}> • {field.ubicacion}</Text>
      <Text style={styles.info}> • {field.tipo}</Text>
      <Text style={styles.info}> • {field.descripcion}</Text>
      <Text style={styles.info}> • Precio por hora: {field.precio}</Text>
      <View style={styles.buttonContainer}>
        <Pressable 
          style={styles.alquilaButton}
          onPress={() => {
            navigation.navigate('Alquiler');
          }}
        >
          <Text style={styles.alquilarButtonText}>Alquilar</Text>
        </Pressable>
      </View>
      <Text style={styles.opiniones}>  Opiniones </Text>
    </View>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return <Text>Error: Error al cargar los detalles de la cancha</Text>;
  }



  return (
    <FlatList
      data={field.opiniones}
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  alquilaButton: {
    flex: 1,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  alquilarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})