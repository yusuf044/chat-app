// import {
//   Alert,
//   FlatList,
//   Keyboard,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import React, {useContext, useEffect, useLayoutEffect} from 'react';
// import {GlobalContext} from '../../context';
// import MessageComponents from '../../components/messageComponents/messageComponents';
// import {socket} from '../../../utils';

// const Messages = ({route}) => {
//   const {currentGroupName, currentGroupID} = route?.params;

//   const {
//     allChatMessage,
//     setAllChatMessage,
//     currentUser,
//     currentChatMessage,
//     setCurrentChatMessage,
//   } = useContext(GlobalContext);

//   const handelAddNewMessage = () => {
//     const timeDate = {
//       hr:
//         new Date().getHours() < 10
//           ? `0${new Date().getHours()}`
//           : new Date().getHours(),
//       mins:
//         new Date().getMinutes() < 10
//           ? `0${new Date().getMinutes()}`
//           : new Date().getMinutes(),
//     };

//     if (currentUser) {
//       socket.emit('newChatMessage', {
//         currentChatMessage,
//         groupIdentifier: currentGroupID,
//         currentUser,
//         timeDate,
//       });

//       setCurrentChatMessage('');
//       Keyboard.dismiss();
//     } else {
//       console.log('errrrr---00000111212121212122121212');
//     }
//   };

//   useLayoutEffect(() => {
//     socket.emit('findGroup', currentGroupID);
//   }, []);
//   useEffect(() => {
//     socket.on('foundGroup', (allChats: any) => setAllChatMessage(allChats));
//   }, [socket]);

//   return (
//     <View style={styles.wrapper}>
//       <View
//         style={[
//           styles.wrapper,
//           {
//             paddingVertical: 15,
//             paddingHorizontal: 10,
//           },
//         ]}>
//         {/* {allChatMessage && allChatMessage ? ( */}
//         <FlatList
//           data={allChatMessage}
//           renderItem={item => (
//             // <MessageComponents item={item} currentUser={currentUser} />
//             <Text>hello</Text>
//           )}
//           keyExtractor={item => item.id}
//         />
//         {/* ) : (
//           <Text>rerr</Text>
//         )} */}
//       </View>

//       <View style={styles.messageInputContinuer}>
//         <TextInput
//           style={styles.messageINPUT}
//           value={currentChatMessage}
//           onChangeText={value => setCurrentChatMessage(value)}
//           placeholder="Enter your Message"
//         />
//         <Pressable onPress={handelAddNewMessage} style={styles.button}>
//           <View>
//             <Text style={styles.buttonText}>Send</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default Messages;

// const styles = StyleSheet.create({
//   wrapper: {backgroundColor: '#eee', flex: 1},
//   innerWrapper: {},
//   messageInputContinuer: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     paddingVertical: 30,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   messageINPUT: {
//     borderWidth: 1,
//     padding: 15,
//     flex: 1,
//     borderRadius: 50,
//     marginRight: 10,
//   },
//   button: {
//     width: '30%',
//     backgroundColor: '#703efe',

//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//   },
//   buttonText: {color: '#FFF', fontSize: 20},
// });

// new

import {useContext, useEffect, useLayoutEffect} from 'react';
import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {GlobalContext} from '../../context';
import {socket} from '../../../utils';
import MessageComponents from '../../components/messageComponents/messageComponents';

export default function Messages({navigation, route}) {
  const {currentGroupName, currentGroupID} = route.params;
  const {
    allChatMessages,
    setAllChatMessages,
    currentUser,
    currentChatMesage,
    setCurrentChatMessage,
  } = useContext(GlobalContext);

  function handleAddNewMessage() {
    const timeData = {
      hr:
        new Date().getHours() < 10
          ? `0${new Date().getHours()}`
          : new Date().getHours(),
      mins:
        new Date().getMinutes() < 10
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes(),
    };

    if (currentUser) {
      socket.emit('newChatMessage', {
        currentChatMesage,
        groupIdentifier: currentGroupID,
        currentUser,
        timeData,
      });

      setCurrentChatMessage('');
      Keyboard.dismiss();
    }
  }

  useEffect(() => {
    socket.emit('findGroup', currentGroupID);
    socket.on('foundGroup', allChats => setAllChatMessages(allChats));
  }, [socket]);

  return (
    <View style={styles.wrapper}>
      <View
        style={[styles.wrapper, {paddingVertical: 15, paddingHorizontal: 10}]}>
        {allChatMessages && allChatMessages[0] ? (
          <FlatList
            data={allChatMessages}
            renderItem={({item}) => (
              <MessageComponents item={item} currentUser={currentUser} />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}
      </View>
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          value={currentChatMesage}
          onChangeText={value => setCurrentChatMessage(value)}
          placeholder="Enter your message"
        />

        <Pressable onPress={handleAddNewMessage} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>SEND</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },
  messageInputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageInput: {
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
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
