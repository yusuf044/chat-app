import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Modal, View, ViewProps, ModalBaseProps} from 'react-native';
import stylesWithOutColor from './style';
import {useTheme} from '@react-navigation/native';
type Props = {
  visible: boolean;
  onClose?: (visible: boolean) => void;
  children: React.ReactElement;
  style?: ViewProps['style'];
  modelBackStyle?: ViewProps['style'];
  modelStyle?: ViewProps['style'];
  animationType?: ModalBaseProps['animationType'];
  alignBottom?: boolean;
};

const ModalComponent = ({
  visible,
  onClose,
  children,
  style,
  modelBackStyle,
  modelStyle,
  animationType = 'slide',
  alignBottom = false,
}: Props) => {
  const {colors} = useTheme();
  const styles = stylesWithOutColor(colors);
  return (
    <View style={[styles.centeredView, style]}>
      <Modal
        animationType={animationType}
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onClose?.(!visible);
        }}>
        <View style={[styles.centeredView, modelBackStyle]}>
          {alignBottom && <View style={styles.modelView} />}
          <View style={[styles.modelBg, modelStyle]}>{children}</View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
