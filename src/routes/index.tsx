import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeRoute from './index.Home'

export const RootStack = createNativeStackNavigator()

const RootRoute = () => {
  return (
    <RootStack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="HomeScreen" component={HomeRoute} />
      <RootStack.Screen name="LoginScreen" component={HomeRoute} />
      <RootStack.Screen name="RegisterScreen" component={HomeRoute} />
    </RootStack.Navigator>
  )
}

export default RootRoute