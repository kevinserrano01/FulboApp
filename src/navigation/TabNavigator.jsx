import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../global/colors';
import FieldsNavigator from './FieldsNavigator';
import ProfileNavigator from './ProfileNavigator';
import ReservationsNavigator from './ReservationsNavigator';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
            initialRouteName="Explorar"
            screenOptions={{
                headerShown: false, // Quitar el header
                tabBarShowLabel: true, // Quitar el texto de las pestañas
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: colors.Naranja,
                tabBarInactiveTintColor: colors.Gris,
            }}
        >
            <Tab.Screen 
                name="Explorar"
                component={FieldsNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="sports-soccer" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Reservas"
                component={ReservationsNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="receipt-long" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Cuenta"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person" color={focused?colors.Naranja:colors.Gris} size={32} />
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