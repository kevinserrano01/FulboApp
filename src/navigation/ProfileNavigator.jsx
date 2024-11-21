import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../global/colors";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
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
        <Stack.Screen name="Perfil" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator