import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../../context';
import {useNavigation} from '@react-navigation/native';

const ChatComponents = ({item}) => {
  const {message, setMessage} = useContext(GlobalContext);

  const navigation = useNavigation();
  useEffect(() => {
    setMessage(item?.message?.[item?.message?.length - 1]);
  }, []);

  const handelNavigateTOMessage = ({}) => {
    navigation.navigate('Messages', {
      currentGroupName: item.currentGroupName,
      currentGroupID: item.id,
    });
  };
  return (
    <Pressable style={styles.chat} onPress={handelNavigateTOMessage}>
      <View style={styles.circle}>
        <Text>ICon</Text>
      </View>

      <View style={styles.rightContinuer}>
        <View>
          <Text style={styles.userName}>{item.item.currentGroupName}</Text>
          <Text style={styles.message}>
            {message?.text ? message.text : 'Tap to start messaging'}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.time}>{message?.time ? message?.time : 'Now'}</Text>
      </View>
    </Pressable>
  );
};

export default ChatComponents;

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
