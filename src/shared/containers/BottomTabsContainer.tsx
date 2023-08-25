import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
  IconProps,
} from '@ui-kitten/components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const PersonIcon = (props: IconProps): IconElement => <Icon {...props} name="person-outline" />;

const BellIcon = (props: IconProps): IconElement => <Icon {...props} name="bell-outline" />;

const ActivityIcon = (props: IconProps): IconElement => <Icon {...props} name="activity-outline" />;

const HomelIcon = (props: IconProps): IconElement => <Icon {...props} name="home-outline" />;

const SettinglIcon = (props: IconProps): IconElement => <Icon {...props} name="settings-outline" />;

export const BottomTabsContainer: React.FC<BottomTabBarProps> = ({navigation, state, ...props}) => {
  const onSelect = (index: number) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <BottomNavigation selectedIndex={state.index} onSelect={onSelect} {...props}>
      <BottomNavigationTab icon={PersonIcon} />
      <BottomNavigationTab icon={ActivityIcon} />
      <BottomNavigationTab icon={HomelIcon} />
      <BottomNavigationTab icon={BellIcon} />
      <BottomNavigationTab icon={SettinglIcon} />
    </BottomNavigation>
  );
};
