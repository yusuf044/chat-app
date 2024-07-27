import {StyleSheet} from 'react-native';
const styles = () =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff99',
    },
    modelBg: {
      width: '90%',
      backgroundColor: '#FFF',
      borderRadius: 4,
      shadowColor: '#000',

      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
    modelView: {flex: 1},
  });

export default styles;
