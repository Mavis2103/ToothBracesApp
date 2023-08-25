import React, {
  useLayoutEffect,
  useMemo,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {BottomSheetModal, BottomSheetModalProps} from '@gorhom/bottom-sheet';

interface CustomBottomSheetModalProps extends Omit<BottomSheetModalProps, 'snapPoints'> {
  startFrom: string | number;
  children: React.JSX.Element;
  initEnable: boolean;
}

export interface CustomBottomSheetModalRef {
  onOpen: () => void;
}

const BottomSheetModalContainer = forwardRef<
  CustomBottomSheetModalRef,
  CustomBottomSheetModalProps
>(
  (
    {
      startFrom,
      children,
      index = 1,
      enableDismissOnClose = false,
      enablePanDownToClose = false,
      ...props
    },
    ref,
  ) => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => [startFrom, '100%'], []);
    const [backgroundStyle, setBackgroundStyle] = useState({
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    });
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
      if (snapPoints.length - 1) {
        setBackgroundStyle(old => ({
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }));
      }
    }, []);

    useLayoutEffect(() => {
      if (props?.initEnable) {
        requestAnimationFrame(() => bottomSheetRef.current?.present());
      }
    }, []);

    const onOpen = () => {
      requestAnimationFrame(() => bottomSheetRef.current?.present());
    };

    useImperativeHandle(ref, () => ({
      onOpen,
    }));

    return (
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={index}
        style={Object.assign({paddingHorizontal: 10}, props.style)}
        enableDismissOnClose={enableDismissOnClose}
        enablePanDownToClose={enablePanDownToClose}
        backgroundStyle={Object.assign(backgroundStyle, props.backgroundStyle)}
        onChange={handleSheetChanges}
        {...props}>
        {children}
      </BottomSheetModal>
    );
  },
);

export default BottomSheetModalContainer;
