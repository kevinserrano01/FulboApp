import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../global/colors';
import FieldsNavigator from './FieldsNavigator';
import ProfileNavigator from './ProfileNavigator';
import ReservationsNavigator from './ReservationsNavigator';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"; // Importa esta función


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    // Lógica para ocultar el BottomTab en Screen especificas
    const getTabBarStyle = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        // Ocultar el BottomTab en Donaciones
        if (routeName === "Donaciones" || routeName === "Acerca de" || routeName === "Reservar" || routeName === "Cancha") {
          return { display: "none" };
        }
        return styles.tabBar;
      };

  return (
    <Tab.Navigator
            initialRouteName="Explorar"
            screenOptions={({ route }) => ({
                headerShown: false, // Ocultar el header
                tabBarStyle: getTabBarStyle(route), // Lógica dinámica
                tabBarActiveTintColor: colors.Verde,
                tabBarInactiveTintColor: colors.Gris,
            })}
        >
            <Tab.Screen 
                name="Explorar"
                component={FieldsNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="sports-soccer" color={focused?colors.Verde:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Reservas"
                component={ReservationsNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="receipt-long" color={focused?colors.Verde:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Cuenta"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person" color={focused?colors.Verde:colors.Gris} size={32} />
                    )
                }}
            />
        </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        height: 80,
        fontFamily: 'Georgia',
        fontSize: 20,
    }
})