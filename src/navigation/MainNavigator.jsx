import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

const MainNavigator = () => {
    const [user, setUser] = useState("Kev");

  return (
    <NavigationContainer>
        {
            user ? <TabNavigator /> : <AuthNavigator />
        }
    </NavigationContainer>
  )
}

export default MainNavigator