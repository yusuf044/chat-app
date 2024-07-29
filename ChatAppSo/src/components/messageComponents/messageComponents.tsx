import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../../context';
import {useNavigation} from '@react-navigation/native';

const MessageComponents = ({item}) => {
  const {message, setMessage} = useContext(GlobalContext);

  return (
    <Pressable style={styles.chat}>
      <Text>MessageComponents</Text>
    </Pressable>
  );
};

export default MessageComponents;

const styles = StyleSheet.create({
  chat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 80,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  circle: {
    width: 50,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginRight: 10,
  },
  rightContinuer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  userName: {fontSize: 18, marginBottom: 5, fontWeight: 'bold', color: '#000'},
  message: {fontSize: 14, opacity: 0.8},
  time: {opacity: 0.6},
});
