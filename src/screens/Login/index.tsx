import {Image} from 'react-native';
import React from 'react';
import ScreenContainer from '../../shared/containers/ScreenContainer';
import {Button} from '@ui-kitten/components';
import useAuth from '../../hooks/useAuth';

const LoginScreen = () => {
  const {onLogin} = useAuth();
  return (
    <ScreenContainer style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/doctor.png')}
        resizeMode="contain"
        style={{width: 150}}
      />
      <Button onPress={onLogin}>Login with Google</Button>
    </ScreenContainer>
  );
};

export default LoginScreen;
