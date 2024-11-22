import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/userService'
import { setProfileImage } from '../features/auth/authSlice'
import { useEffect } from 'react'

const MainNavigator = () => {
    const user = useSelector(state => state.authReducer.value.email)
    const localId = useSelector(state=>state.authReducer.value.localId)
    const {data:profileImage, error, isLoading} = useGetProfileImageQuery(localId)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      if(profileImage){
          dispatch(setProfileImage(profileImage.image))
      }
      
  },[profileImage])


  return (
    <NavigationContainer>
        {
            user ? <TabNavigator /> : <AuthNavigator />
        }
    </NavigationContainer>
  )
}

export default MainNavigator