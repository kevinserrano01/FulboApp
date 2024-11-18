import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReservationsScreen from "../screens/ReservationsScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ReservationsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                header: ({route}) => <Header subtitle={route.name}/>
            }}
        >
            <Stack.Screen name="Mis Reservas" component={ReservationsScreen} />
        </Stack.Navigator>
    )
};

export default ReservationsNavigator;