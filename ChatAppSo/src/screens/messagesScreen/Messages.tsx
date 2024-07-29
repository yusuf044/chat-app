import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {GlobalContext} from '../../context';
import MessageComponents from '../../components/messageComponents/messageComponents';
import {socket} from '../../../utils';

const Messages = ({navigation, route}) => {
  const {currentGroupName, currentGroupID} = route?.params;
  console.log(
    'currentGroupID============currentGroupName',
    currentGroupID,
    currentGroupName,
  );

  const {
    allChatMessage,
    setAllChatMessage,
    currentUser,
    currentChatMessage,
    setCurrentChatMessage,
  } = useContext(GlobalContext);

  const handelAddNewMessage = () => {
    const timeDate = {
      hr:
        new Date().getHours() < 10
          ? `0${new new Date().getHours()}`
          : new Date().getHours(),
      mins:
        new Date().getMinutes() < 10
          ? `0${new new Date().getMinutes()}`
          : new Date().getMinutes(),
    };
    if (currentUser) {
      socket.emit('newChatMessage', {
        currentChatMessage,
        groupIdentifier: currentGroupID,
        currentUser,
        timeDate,
      });
      setCurrentChatMessage('');
      Keyboard.dismiss();
    }
  };

  useLayoutEffect(() => {
    socket.emit('findGroup', currentGroupID);
  }, []);
  useEffect(() => {
    socket.emit('findGroup', currentGroupID);
    socket.on('foundGroup', allChats => {
      console.log('kiiiiiiiiiiii=====', JSON.stringify(allChats));
    });
  }, [socket]);

  return (
    <View style={styles.wrapper}>
      <View
        style={[styles.wrapper, {paddingVertical: 15, paddingHorizontal: 10}]}>
        {allChatMessage && allChatMessage[0] ? (
          <FlatList
            data={allChatMessage}
            renderItem={item => (
              <MessageComponents item={item} currentUser={currentUser} />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}
      </View>
      <View style={styles.messageInputContinuer}>
        <TextInput
          style={styles.messageINPUT}
          value={currentChatMessage}
          onChangeText={value => setCurrentChatMessage(value)}
          placeholder="Enter your Message"
        />
        <Pressable onPress={handelAddNewMessage} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#eee', flex: 1},
  innerWrapper: {},
  messageInputContinuer: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageINPUT: {
    borderWidth: 1,
    padding: 15,
    flex: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  button: {
    width: '30%',
    backgroundColor: '#703efe',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {color: '#FFF', fontSize: 20},
});
