import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FieldsScreen from '../screens/FieldsScreen'
import FieldDetailsScreen from '../screens/FieldDetailsScreen'
import Header from '../components/Header'
import AlquilerScreen from '../screens/AlquilerScreen'
import { colors } from '../global/colors'

const Stack = createNativeStackNavigator()

const FieldsNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Canchas"
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.Verde,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}

    >
      <Stack.Screen name="Canchas" component={FieldsScreen} />
      <Stack.Screen name="Cancha" component={FieldDetailsScreen} />
      <Stack.Screen name="Reservar" component={AlquilerScreen} />
    </Stack.Navigator>
  )
}

export default FieldsNavigator