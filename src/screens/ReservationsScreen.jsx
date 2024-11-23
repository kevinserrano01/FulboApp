import { FlatList, StyleSheet, Text, View, Button, Pressable, ActivityIndicator } from 'react-native'
import { colors } from '../global/colors'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import FlatCard from '../components/FlatCard'
import { useGetReservationsQuery } from '../services/reservationsService'
import { useDispatch, useSelector } from 'react-redux'
import { removeReservation } from '../features/reservations/reservationSlice'
import { useEffect } from 'react'

const ReservationsScreen = ({navigation}) => {
    const reservas = useSelector(state => state.reservationsReducer.value.reservations)
    const reservationLenght = useSelector(state => state.reservationsReducer.value.reservationLength)
    const localId = useSelector(state => state.authReducer.value.localId)
    const dispatch = useDispatch()
    // Obtener solo las reservas de este usuario logueado
    const userReservations = reservas.filter(reservation => reservation.idUser === localId)

  const renderReservationItem = ({item}) => {
    return (
      <FlatCard style={styles.receiptContainer}>
        <Text style={styles.title}>Tu reserva</Text>
        <Text style={styles.date}>Codigo reserva: {item.id}</Text>
        <Text style={styles.total}> Ubicacion:  </Text>
        <Text style={styles.total}>Dia: {item.date}</Text>
        <Text style={styles.total}> Hora: {item.time} </Text>
        <Pressable 
          style={styles.buttomRemoveReservation}
          onPress={() => dispatch(removeReservation(item.id))}
        >
          <Text style={styles.textRemoveReservation}>Cancelar reserva</Text>
        </Pressable>
      </FlatCard>
    )
  }

  return (
    <>
      {
        reservationLenght === 0 ? (
          <View style={styles.container}>
            <Icon name="receipt-long" size={100} color="#ccc" />
            <Text style={styles.cartScreenTitle}>Sin reservas</Text>
            <Button title="Explorar canchas" onPress={() => navigation.navigate('Explorar')} />
          </View>
        ) : (
          <FlatList
            data={userReservations}
            keyExtractor={item => item.id}
            renderItem={renderReservationItem}
          />
        )
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