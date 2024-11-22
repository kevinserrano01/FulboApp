import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'
import { useSelector } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const MainNavigator = () => {
    const user = useSelector(state => state.authReducer.value.email)
    const localId = useSelector(state => state.authReducer.value.localId)
    console.log(user)
    console.log(localId)

  return (
    <NavigationContainer>
        {
            user ? <TabNavigator /> : <AuthNavigator />
        }
    </NavigationContainer>
  )
}

export default MainNavigator