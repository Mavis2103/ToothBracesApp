import React, {FC} from 'react';
import {Layout, LayoutProps, ViewPager} from '@ui-kitten/components';

const ScreenContainer: FC<LayoutProps> = ({children, style, ...props}) => {
  return (
    <ViewPager style={{flex: 1}}>
      <Layout style={Object.assign({flex: 1}, style)} {...props}>
        {children}
      </Layout>
    </ViewPager>
  );
};

export default ScreenContainer;
