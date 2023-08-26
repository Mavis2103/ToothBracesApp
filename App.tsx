import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import RootRoute from './src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '262077225849-iolufo641595o06abl0sbf21rbeas5jh.apps.googleusercontent.com',
});

export default (): React.ReactElement => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <GestureHandlerRootView style={StyleSheet.absoluteFill}>
          <RootRoute />
        </GestureHandlerRootView>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
