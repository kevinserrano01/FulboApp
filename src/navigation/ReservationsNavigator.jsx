import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReservationsScreen from "../screens/ReservationsScreen";
import Header from "../components/Header";
import { colors } from "../global/colors";

const Stack = createNativeStackNavigator();

const ReservationsNavigator = () => {
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
            <Stack.Screen name="Mis Reservas" component={ReservationsScreen} />
        </Stack.Navigator>
    )
};

export default ReservationsNavigator;