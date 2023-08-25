import React from 'react';
import ScreenContainer from '../../shared/containers/ScreenContainer';
import ScanContainer from './containers/Scan';

const ActivityScreen = () => {
  return (
    <ScreenContainer scrollable>
      <ScanContainer />
    </ScreenContainer>
  );
};

export default ActivityScreen;
