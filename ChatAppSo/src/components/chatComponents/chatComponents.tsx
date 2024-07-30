// import {Pressable, StyleSheet, Text, View} from 'react-native';
// import React, {useContext, useEffect} from 'react';
// import {GlobalContext} from '../../context';
// import {useNavigation} from '@react-navigation/native';

// const ChatComponents = ({item}) => {
//   console.log('itemm ChatCOmponents======', JSON.stringify(item));

//   // const {message, setMessage} = useContext(GlobalContext);

//   const navigation = useNavigation();
//   // useEffect(() => {
//   //   setMessage(item?.message?.[item?.message?.length - 1]);
//   // }, []);

//   const handelNavigateTOMessage = ({}) => {
//     navigation.navigate('Messages', {
//       currentGroupName: item.currentGroupName,
//       currentGroupID: item.id,
//     });
//   };
//   return (
//     <Pressable style={styles.chat} onPress={handelNavigateTOMessage}>
//       <View style={styles.circle}>
//         <Text>ICon</Text>
//       </View>

//       <View style={styles.rightContinuer}>
//         <View>
//           <Text style={styles.userName}>{item.item.currentGroupName}</Text>
//           <Text style={styles.message}>
//             {item && item.message && item.message.length
//               ? item.message[item?.message?.length - 1].text
//               : 'Tap to start messaging'}
//           </Text>
//         </View>
//       </View>

//       <View>
//         <Text style={styles.time}>
//           {item && item.message && item.message.length
//             ? item.message[item?.message?.length - 1].time
//             : 'Now'}
//         </Text>
//       </View>
//     </Pressable>
//   );
// };

// export default ChatComponents;

// const styles = StyleSheet.create({
//   chat: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 5,
//     padding: 10,
//     height: 80,
//     marginBottom: 10,
//     backgroundColor: '#FFF',
//   },
//   circle: {
//     width: 50,
//     borderRadius: 50,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 2,
//     marginRight: 10,
//   },
//   rightContinuer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flex: 1,
//   },
//   userName: {fontSize: 18, marginBottom: 5, fontWeight: 'bold', color: '#000'},
//   message: {fontSize: 14, opacity: 0.8},
//   time: {opacity: 0.6},
// });

// new

import {Pressable, StyleSheet, Text, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';
import {useContext, useEffect} from 'react';
import {GlobalContext} from '../context';
import {useNavigation} from '@react-navigation/native';

export default function ChatComponents({item}) {
  const navigation = useNavigation();

  console.log(item.messages[item.messages.length - 1]);

  function handleNavigateToMessageScreen() {
    navigation.navigate('Messages', {
      currentGroupName: item.currentGroupName,
      currentGroupID: item.id,
    });
  }

  return (
    <Pressable style={styles.chat} onPress={handleNavigateToMessageScreen}>
      <View style={styles.circle}>
        <Text>!!Out</Text>
        {/* <FontAwesome name="group" size={24} color={'black'} /> */}
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.userName}>{item.currentGroupName}</Text>
          <Text style={styles.message}>
            {item && item.messages && item.messages.length
              ? item.messages[item.messages.length - 1].text
              : 'Tap to start messaging'}
          </Text>
        </View>
        <View>
          <Text style={styles.time}>
            {item && item.messages && item.messages.length
              ? item.messages[item.messages.length - 1].time
              : 'Now'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    height: 80,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    opacity: 0.8,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  time: {
    opacity: 0.6,
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
});
