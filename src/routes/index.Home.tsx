import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabsContainer } from '../shared/containers/BottomTabsContainer'
import HomeScreen from '../screens/Home'
import PersonalScreen from '../screens/Personal'
import ActivityScreen from '../screens/Activity'
import NotificationScreen from '../screens/Notification'
import SettingScreen from '../screens/Setting'

const { Navigator, Screen } = createBottomTabNavigator()

const HomeRoute = () => {
  return (
    <Navigator
      initialRouteName="IndexScreen"
      tabBar={props => <BottomTabsContainer {...props} />}
      screenOptions={{ headerShown: false }}>
      <Screen name='PersonalScreen' component={PersonalScreen} />
      <Screen name='ActivityScreen' component={ActivityScreen} />
      <Screen name='IndexScreen' component={HomeScreen} />
      <Screen name='NotificationScreen' component={NotificationScreen} />
      <Screen name='SettingScreen' component={SettingScreen} />
    </Navigator>
  )
}

export default HomeRoute