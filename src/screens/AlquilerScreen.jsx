import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux';
import { useGetFieldQuery } from '../services/fieldsService';

const AlquilerScreen = () => {
    const fieldId = useSelector(state => state.fieldsReducer.value.fieldId);
    const { data: field, error, isLoading } = useGetFieldQuery(fieldId);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (error) {
        return <Text>Error: No es posible alquilar en este momento.</Text>;
    }

  return (
    <View>
        <Text>AlquilerScreen</Text>
        <Text>{field.id}</Text>
        <Text>{field.nombre}</Text>
    </View>
  )
}

export default AlquilerScreen

const styles = StyleSheet.create({})