import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsContainer} from '../shared/containers/BottomTabsContainer';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import NotificationScreen from '../screens/Notification';
import SettingScreen from '../screens/Setting';
import ActivityScreen from '../screens/Activity';

const {Navigator, Screen} = createBottomTabNavigator<HomeStackParamList>();

export type HomeStackParamList = {
  ProfileScreen: undefined;
  ActivityScreen: undefined;
  HomeScreen: undefined;
  NotificationScreen: undefined;
  SettingScreen: undefined;
};

const BottomTabsRoute = () => {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      tabBar={props => <BottomTabsContainer {...props} />}
      screenOptions={{headerShown: false}}>
      <Screen name="ProfileScreen" component={ProfileScreen} />
      <Screen name="ActivityScreen" component={ActivityScreen} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="NotificationScreen" component={NotificationScreen} />
      <Screen name="SettingScreen" component={SettingScreen} />
    </Navigator>
  );
};

export default BottomTabsRoute;
