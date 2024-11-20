import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
import FlatCard from '../components/FlatCard'
import { useGetFieldsQuery } from '../services/fieldsService'


const FieldsScreen = ({navigation}) => {
    const { data:fields, error, isLoading } = useGetFieldsQuery();

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
        {
            isLoading && <ActivityIndicator size="large" color="#0000ff" />
        }
        {
            error && <Text>Error: Error al cargar las canchas</Text>
        }
        <FlatList
          data={fields}
          keyExtractor={item => item.id.toString()}
          renderItem={renderFieldItem}
        />
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