import React, {createContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import ScreenContainer from '../../../../shared/containers/ScreenContainer';
import {Path, Svg} from 'react-native-svg';
import {windowWidth} from '../../../../constants/sizes';
import {path_braces} from './mocks/braces';
import BracesStatusContainer from './containers/BracesStatus';
import DoctorSaidContainer from './containers/DoctorSaid';
import ReportInfoContainer from './containers/ReportInfo';
import {getFile} from '../../../../services/common/firebase.service';

export const ActivityDetailContext = createContext(null);

const fillColorWithBraceStatus: string = (status: string) => {
  switch (status) {
    case 'working':
      return '#ECEE81';
    case 'done':
      return '#A2FF86';
    default:
      return '#D5E3FF';
  }
};

const ActivityScreenDetail = ({navigation, route}) => {
  const [braceSelected, setBraceSelected] = useState<string>();
  const handleBrace = (brace_index: string) => () => {
    setBraceSelected(brace_index);
  };
  const [detail, setDetail] = useState<{}>(route.params);

  useEffect(() => {
    getFile(route.params.media_path).then(data => {
      setDetail(d => ({...d, image: data}));
    });
  }, []);

  return (
    <ScreenContainer scrollable>
      <ActivityDetailContext.Provider value={detail}>
        <Svg
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 456.69 595.28"
          width={windowWidth}
          height={500}>
          {path_braces.map(path => (
            <>
              <Path
                key={path.id}
                {...path}
                onPress={handleBrace(path.id)}
                fill={fillColorWithBraceStatus(detail?.braces?.[path.id]?.status)}
                // fill={braceSelected == path.id ? '#0544FE' : '#D5E3FF'}
                stroke={'#708DCD'}
                strokeWidth={2}
              />
            </>
          ))}
        </Svg>
        <View>
          <ReportInfoContainer />
          <DoctorSaidContainer />
          <BracesStatusContainer />
        </View>
      </ActivityDetailContext.Provider>
    </ScreenContainer>
  );
};

export default ActivityScreenDetail;
