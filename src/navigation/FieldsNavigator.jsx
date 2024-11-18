import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FieldsScreen from '../screens/FieldsScreen'
import FieldDetailsScreen from '../screens/FieldDetailsScreen'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const FieldsNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Canchas"
    screenOptions={{
      headerShown: true,
      header: ({route}) => <Header subtitle={route.name}/>
    }}
    >
      <Stack.Screen name="Canchas" component={FieldsScreen} />
      <Stack.Screen name="Cancha" component={FieldDetailsScreen} />
    </Stack.Navigator>
  )
}

export default FieldsNavigator