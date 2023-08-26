import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsRoute from './index.Bottom';
import NoBottomTabsRoute, {NoBottomStackParamList} from './index.NoBottom';
import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import LoginScreen from '../screens/Login';
import useAuth from '../hooks/useAuth';

export const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  BottomTabs: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  NoBottomTabs: NavigatorScreenParams<NoBottomStackParamList>;
};

export type RootNavigationProps = NavigationProp<RootStackParamList>;

const RootRoute = () => {
  const {user} = useAuth();
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <RootStack.Screen name="BottomTabs" component={BottomTabsRoute} />
          <RootStack.Screen name="NoBottomTabs" component={NoBottomTabsRoute} />
        </>
      ) : (
        <>
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="RegisterScreen" component={BottomTabsRoute} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootRoute;
