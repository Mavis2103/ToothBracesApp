import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScanScreen from '../screens/ScanScreen';

const {Navigator, Screen} = createNativeStackNavigator<NoBottomStackParamList>();

export type NoBottomStackParamList = {
  ScanScreen: undefined;
};

const NoBottomTabsRoute = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ScanScreen" component={ScanScreen} />
    </Navigator>
  );
};

export default NoBottomTabsRoute;
