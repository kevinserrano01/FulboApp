import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
            header: ({route}) => <Header subtitle={route.name}/>
        }}
    >
        <Stack.Screen name="Perfil" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator