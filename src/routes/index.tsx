import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsRoute from './index.Bottom';
import NoBottomTabsRoute, {NoBottomStackParamList} from './index.NoBottom';
import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';

export const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  BottomTabs: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  NoBottomTabs: NavigatorScreenParams<NoBottomStackParamList>;
};

export type RootNavigationProps = NavigationProp<RootStackParamList>;

const RootRoute = () => {
  return (
    <RootStack.Navigator initialRouteName="BottomTabs" screenOptions={{headerShown: false}}>
      <RootStack.Screen name="BottomTabs" component={BottomTabsRoute} />
      <RootStack.Screen name="LoginScreen" component={BottomTabsRoute} />
      <RootStack.Screen name="RegisterScreen" component={BottomTabsRoute} />
      <RootStack.Screen name="NoBottomTabs" component={NoBottomTabsRoute} />
    </RootStack.Navigator>
  );
};

export default RootRoute;
