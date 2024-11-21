import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
import FlatCard from '../components/FlatCard'
import { useGetFieldsQuery } from '../services/fieldsService'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { setFieldId } from '../features/fields/fieldSlice'


const FieldsScreen = ({navigation}) => {
    const { data:fields, error, isLoading } = useGetFieldsQuery();
    dispatch = useDispatch();

    const renderFieldItem = ({item}) => {    
      return (
        <Pressable onPress={() => {
          dispatch(setFieldId(item.id)) // enviar el id al store
          navigation.navigate('Cancha') 
        
        }}>
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

    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />
    }
  
    if (error) {
      return <Text>Error: Error al cargar las canchas</Text>
    }

    if (!fields || fields.length === 0) {
      return (
        <View style={styles.container}>
          <Icon name="receipt-long" size={100} color="#ccc" />
          <Text style={styles.cartScreenTitle}>Sin canchas</Text>
        </View>
      )
    }

  return (
        <FlatList
          data={fields}
          keyExtractor={item => item.id.toString()}
          renderItem={renderFieldItem}
        />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cartScreenTitle: {
    fontSize: 18,
    color: '#333',
    marginVertical: 20,
  },
})