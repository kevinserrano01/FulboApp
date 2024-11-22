import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Pressable, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useGetFieldQuery } from '../services/fieldsService';
import { colors } from '../global/colors';
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { addReservation } from '../features/reservations/reservationSlice';
import { usePostReservationMutation } from '../services/reservationsService';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'; // Generar ids unicos


const AlquilerScreen = ({navigation}) => {
    const fieldId = useSelector(state => state.fieldsReducer.value.fieldId);
    const { data: field, error, isLoading } = useGetFieldQuery(fieldId);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [triggerPost, result] = usePostReservationMutation();
    dispatch = useDispatch();

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (time) => {
        setSelectedTime(time.toLocaleTimeString());
        hideTimePicker();
    };

    const reservationData = {
        id: uuidv4(), // Genera un id unico para la reserva
        idField: fieldId,
        date: selectedDate,
        time: selectedTime,
        // idUser: idUser, // Falta implementar
    };

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (error) {
        return <Text>Error: No es posible alquilar en este momento.</Text>;
    }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.containerAlquiler}>
            <Text style={styles.title}>Elegir fecha y horario</Text>
            <View style={styles.containerLocation}>
                <Icon name="location-on" size={40} color={colors.Verde} />
                <Text style={styles.textLocation}>Ubicacion</Text>
            </View>
            <View style={styles.containerUbicacion}>
                <Text style={styles.textUbicacion}>{field.ubicacion}</Text>
            </View>
            <View style={styles.containerType}>
                <Icon name="sports-soccer" size={40} color={colors.Verde} />
                <Text style={styles.textType}>Tipo</Text>
            </View>
            <View style={styles.containerTipo}>
                <Text style={styles.textUTipo}>{field.tipo}</Text>
            </View>

            <View style={styles.containerDate}>
                <Icon name="date-range" size={40} color={colors.Verde} />
                <Text style={styles.textDate}>Fecha</Text>
            </View>
            <View style={styles.containerFecha}>
                <Text style={styles.textFecha}>{selectedDate}</Text>
            </View>
            <Calendar
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                    }}
                    markedDates={{
                        [selectedDate]: { selected: true, marked: true, selectedColor: 'green' }
                    }}
            />
            <View style={styles.containerHour}>
                <Icon name="schedule" size={40} color={colors.Verde} />
                <Text style={styles.textHour}>Hora</Text>
            </View>
            <View style={styles.containerHora}>
                <Text style={styles.textHora}>{selectedTime}</Text>
            </View>
            <View style={styles.containerButtonHour}>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirm}
                    onCancel={hideTimePicker}
                />
            </View>
            
            <View style={styles.containerButon}>
                <Pressable style={styles.button} onPress={() => {
                    triggerPost(reservationData);
                    dispatch(addReservation(reservationData));
                    navigation.navigate('Reservas');
                }}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    </ScrollView>
  )
}

export default AlquilerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerAlquiler: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.Blanco,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    containerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textLocation: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    containerType: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textType: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    containerDate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textDate: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    containerHour: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    textHour: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    containerButon: {
        width: '100%',
    },
    button: {
        backgroundColor: colors.Verde,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: colors.Blanco,
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerUbicacion: {
        marginBottom: 30,
        marginLeft: 60,
    },
    textUbicacion: {
        fontSize: 20,
    },
    containerTipo: {
        marginBottom: 30,
        marginLeft: 60,
    },
    textUTipo: {
        fontSize: 20,
    },
    containerFecha: {
        marginBottom: 10,
        marginLeft: 60,
    },
    textFecha: {
        fontSize: 20,
    },
    containerHora: {
        marginBottom: 10,
        marginLeft: 60,
    },
    textHora: {
        fontSize: 20,
    },
    containerButtonHour: {
        marginBottom: 40,
    }
})