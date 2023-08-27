import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityScreen from '../screens/Activity';
import ActivityScreenDetail from '../screens/Activity/screens/ActivityDetail';
import {NavigationProp} from '@react-navigation/native';

const {Navigator, Screen} = createNativeStackNavigator<ActivityStackParamList>();

export type ActivityStackParamList = {
  ActivityScreen: undefined;
  ActivityScreenDetail: undefined;
};
export type ActivityNavigationProps = NavigationProp<ActivityStackParamList>;

const ActivityRoute = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ActivityScreen" component={ActivityScreen} />
      <Screen name="ActivityScreenDetail" component={ActivityScreenDetail} />
    </Navigator>
  );
};

export default ActivityRoute;
