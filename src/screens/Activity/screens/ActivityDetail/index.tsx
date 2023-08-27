import React, {useState} from 'react';
import {View} from 'react-native';
import ScreenContainer from '../../../../shared/containers/ScreenContainer';
import {Path, Svg} from 'react-native-svg';
import {windowWidth} from '../../../../constants/sizes';
import {path_braces} from './mocks/braces';
import BracesStatusContainer from './containers/BracesStatus';
import DoctorSaidContainer from './containers/DoctorSaid';
import ReportInfoContainer from './containers/ReportInfo';

const ActivityScreenDetail = () => {
  const [braceSelected, setBraceSelected] = useState<string>();
  const handleBrace = (brace_index: string) => () => {
    setBraceSelected(brace_index);
  };
  return (
    <ScreenContainer scrollable>
      <Svg
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 456.69 595.28"
        width={windowWidth}
        height={500}>
        {path_braces.map(path => (
          <Path
            key={path.id}
            {...path}
            onPress={handleBrace(path.id)}
            fill={braceSelected == path.id ? '#0544FE' : '#D5E3FF'}
            stroke={'#708DCD'}
          />
        ))}
      </Svg>
      <View>
        <ReportInfoContainer />
        <DoctorSaidContainer />
        <BracesStatusContainer />
      </View>
    </ScreenContainer>
  );
};

export default ActivityScreenDetail;
