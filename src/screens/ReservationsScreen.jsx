import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import { colors } from '../global/colors'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import FlatCard from '../components/FlatCard'
import reservas from '../data/reservas.json'

const ReservationsScreen = ({navigation}) => {

  const renderReservationItem = ({item}) => {
    // dateOptions ={
    //   year: 'numeric',
    //   month: '2-digit', 
    //   day: '2-digit',     
    //   hour: '2-digit',      
    //   minute: '2-digit', 
    //   hour12: false       
    // };

    return (
      <FlatCard style={styles.receiptContainer}>
        <Text style={styles.title}>Reserva nro: {item.id}</Text>
        {/* <Text style={styles.date}>Creado el {new Date(item.createdAt).toLocaleString('es-Ar',dateOptions)} Hs.</Text> */}
        <Text style={styles.date}>Creado el {item.createdAt} Hs.</Text>
        <Text style={styles.total}> {item.items[0].name} </Text>
        <Text style={styles.total}> {item.items[0].location} </Text>
        <Text style={styles.total}> {item.items[0].type} </Text>
        <Text style={styles.total}> {item.items[0].day} </Text>

      </FlatCard>
    )
  }

  return (
    <>
      {
        reservas.length > 0 ? 
          <FlatList
          data={reservas}
          keyExtractor={item => item.id}
          renderItem={renderReservationItem}
        />
        :
        <View style={styles.container}>
            <Icon name="receipt-long" size={100} color="#ccc" />
            <Text style={styles.cartScreenTitle}>Sin reservas</Text>
            <Button title="Explorar canchas" onPress={() => navigation.navigate('Explorar')} />
        </View>
      }
    </>
    
    
  )
}

export default ReservationsScreen

const styles = StyleSheet.create({
  receiptContainer: {
    padding: 20,
    justifyContent: "flex-start",
    margin: 16,
    gap: 10,
    height: 200,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grisOscuro,
  },
  total: {
    fontSize: 16,
    fontWeight: '700'
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