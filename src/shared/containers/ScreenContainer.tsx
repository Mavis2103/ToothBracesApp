import React, {FC} from 'react';
import {Layout, LayoutProps, ViewPager} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';

interface ScreenContainerProps extends LayoutProps {
  scrollable?: boolean;
}

const ScreenContainer: FC<ScreenContainerProps> = ({children, style, ...props}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {props?.scrollable ? (
        <ScrollView>
          <Layout style={Object.assign({flex: 1, backgroundColor: '#EDF5FF'}, style)} {...props}>
            {children}
          </Layout>
        </ScrollView>
      ) : (
        <Layout style={Object.assign({flex: 1, backgroundColor: '#EDF5FF'}, style)} {...props}>
          {children}
        </Layout>
      )}
    </SafeAreaView>
  );
};

export default ScreenContainer;
