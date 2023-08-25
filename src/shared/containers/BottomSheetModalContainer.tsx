import React, {useState, useLayoutEffect, useMemo, useRef, FC, ReactNode, useCallback} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {HEIGHT_ANALYTICS_COMPONENT} from '../../screens/Home/constants';

interface BottomSheetScrollProps {
  children: ReactNode;
}

const BottomSheetModalContainer: FC<BottomSheetScrollProps> = ({children}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  console.log(HEIGHT_ANALYTICS_COMPONENT);
  const snapPoints = useMemo(() => [HEIGHT_ANALYTICS_COMPONENT, '100%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(() => bottomSheetRef.current?.present());
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enableDismissOnClose={false}
      enablePanDownToClose={false}
      style={{
        paddingHorizontal: 10,
      }}
      backgroundStyle={{
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
      }}
      onChange={handleSheetChanges}>
      {children}
    </BottomSheetModal>
  );
};

export default BottomSheetModalContainer;
