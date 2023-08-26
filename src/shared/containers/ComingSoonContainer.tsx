import React from 'react';
import ScreenContainer from './ScreenContainer';
import {Image} from 'react-native';

const ComingSoonContainer = () => {
  return (
    <ScreenContainer style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/coming_soon.png')}
        resizeMode="contain"
        style={{width: 150}}
      />
    </ScreenContainer>
  );
};

export default ComingSoonContainer;
