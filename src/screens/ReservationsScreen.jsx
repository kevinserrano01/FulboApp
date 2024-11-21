import { FlatList, StyleSheet, Text, View, Button, Pressable, ActivityIndicator } from 'react-native'
import { colors } from '../global/colors'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import FlatCard from '../components/FlatCard'
import { useGetReservationsQuery } from '../services/reservationsService'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservations/reservationSlice'

const ReservationsScreen = ({navigation}) => {
    const { data: reservations, error, isLoading } = useGetReservationsQuery();
    const dispatch = useDispatch()

  const renderReservationItem = ({item}) => {
    return (
      <FlatCard style={styles.receiptContainer}>
        <Text style={styles.title}>Reserva nro: {item.id}</Text>
        <Text style={styles.date}>Creado el {item.createdAt} Hs.</Text>
        <Text style={styles.total}> {item.items[0].name} </Text>
        <Text style={styles.total}> {item.items[0].location} </Text>
        <Text style={styles.total}> {item.items[0].type} </Text>
        <Text style={styles.total}> {item.items[0].day} </Text>
        <Pressable 
          style={styles.buttomRemoveReservation}
          onPress={() => dispatch(removeReservation(item.id))}
        >
          <Text style={styles.textRemoveReservation}>Eliminar reserva</Text>
        </Pressable>
      </FlatCard>
    )
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return <Text>Error: Error al cargar las Reservas</Text>
  }

  if (!reservations || reservations.length === 0) {
    <View style={styles.container}>
        <Icon name="receipt-long" size={100} color="#ccc" />
        <Text style={styles.cartScreenTitle}>Sin reservas</Text>
        <Button title="Explorar canchas" onPress={() => navigation.navigate('Explorar')} />
    </View>
  }

  return (
        <FlatList
          data={reservations}
          keyExtractor={item => item.id}
          renderItem={renderReservationItem}
        />
  )
}

export default ReservationsScreen

const styles = StyleSheet.create({
  receiptContainer: {
    padding: 20,
    justifyContent: "flex-start",
    margin: 16,
    gap: 10,
    height: 250,
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
  buttomRemoveReservation: {
    backgroundColor: colors.Rojo,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textRemoveReservation: {
    color: colors.Blanco,
    textAlign: 'center',
  },
})