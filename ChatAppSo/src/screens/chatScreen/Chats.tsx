// import {
//   FlatList,
//   Keyboard,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import React, {useCallback, useContext, useEffect} from 'react';
// import * as Icon from 'react-native-feather';
// import {GlobalContext} from '../../context';
// import ChatComponents from '../../components/chatComponents/chatComponents';
// import ModalComponent from '../../components/modalComponent';
// import {socket} from '../../../utils';
// import {useNavigation} from '@react-navigation/native';

// const Chats = ({}) => {
//   const {
//     allChatRooms,
//     setAllChatRooms,
//     modalVisible,
//     setModalVisible,
//     currentUser,
//     setCurrentUser,
//     currentGroupName,
//     setCurrentGroupName,
//     setShowLoginView,
//   } = useContext(GlobalContext);
//   console.log('currentGroupName', currentGroupName);

//   const navigation = useNavigation();
//   const handleCreateNewRoom = useCallback(() => {
//     socket.emit('createNewGroup', currentGroupName);
//     setModalVisible(false);
//     setCurrentGroupName('');
//     Keyboard.dismiss();
//   }, [currentGroupName]);

//   useEffect(() => {
//     socket.emit('getAllGroups');

//     socket.on('groupList', (groups: any) => {
//       console.log(groups);
//       setAllChatRooms(groups);
//     });
//   }, [socket]);

//   const handelLogout = ({}) => {
//     setCurrentUser(''), setShowLoginView(false);
//   };
//   useEffect(() => {
//     if (currentUser.trim() === '') navigation.navigate('Home');
//   }, [currentUser]);
//   return (
//     <View style={styles.mainWrapper}>
//       <View style={styles.topContainer}>
//         <View style={styles.header}>
//           <Text style={styles.heading}>Welcome {currentUser}</Text>
//           <Pressable
//             style={{
//               backgroundColor: 'red',
//               borderWidth: 2,
//               padding: 10,
//               borderRadius: 50,
//             }}
//             onPress={handelLogout}>
//             <Text>Log Out</Text>
//           </Pressable>
//         </View>
//       </View>

//       <View style={styles.listContainer}>
//         {allChatRooms && allChatRooms?.length > 0 ? (
//           <FlatList
//             data={allChatRooms}
//             renderItem={item => <ChatComponents item={item} />}
//             keyExtractor={item => item.id}
//           />
//         ) : null}
//       </View>

//       <ModalComponent
//         onClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//         modelStyle={styles.modelView}
//         animationType="slide"
//         visible={modalVisible}>
//         <View style={styles.modelSubView}>
//           <TextInput
//             autoCorrect={false}
//             placeholder="Enter Group Name"
//             style={styles.loginInput}
//             onChangeText={value => setCurrentGroupName(value)}
//             value={currentGroupName}
//           />
//           <View style={styles.buttonWrapperModel}>
//             <Pressable onPress={handleCreateNewRoom} style={styles.buttonModel}>
//               <Text style={styles.buttonText}>ADD</Text>
//             </Pressable>
//             <Pressable
//               onPress={() => setModalVisible(false)}
//               style={styles.buttonModel}>
//               <Text style={styles.buttonText}>CANCEL</Text>
//             </Pressable>
//           </View>
//         </View>
//       </ModalComponent>
//       <View style={styles.bottomContainer}>
//         <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
//           <View>
//             <Text style={styles.buttonText}>Create a new Group</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default Chats;

// const styles = StyleSheet.create({
//   mainWrapper: {
//     backgroundColor: '#eee',
//     flex: 1,
//   },
//   topContainer: {
//     backgroundColor: '#FFF',
//     height: 70,
//     width: '100%',
//     padding: 20,
//     justifyContent: 'center',
//     marginBottom: 15,
//     flex: 0.3,
//   },
//   heading: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listContainer: {flex: 3.4, paddingHorizontal: 10},
//   bottomContainer: {flex: 0.3, padding: 10},
//   button: {
//     backgroundColor: '#703efe',
//     padding: 12,
//     width: '100%',
//     elevation: 1,
//     borderRadius: 50,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   modelView: {width: '90%', backgroundColor: '#fff'},
//   modelSubView: {padding: 12, paddingBottom: 16},
//   loginInput: {borderRadius: 50, padding: 10, borderWidth: 0.5},
//   buttonModel: {
//     backgroundColor: '#703efe',
//     padding: 12,
//     marginVertical: 10,
//     width: '36%',
//     elevation: 3,
//     borderRadius: 50,
//   },
//   buttonWrapperModel: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
//   buttonTextModel: {
//     textAlign: 'center',
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
// });

// new

import {useContext, useEffect} from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {socket} from '../../../utils';
import ChatComponents from '../../components/chatComponents/chatComponents';
import ModalComponent from '../../components/modalComponent';
import NewGroupModal from '../../components/modalComponent';
import {GlobalContext} from '../../context';

export default function Chats({navigation}) {
  const {
    currentUser,
    allChatRooms,
    setAllChatRooms,
    modalVisible,
    setModalVisible,
    setCurrentUser,
    setShowLoginView,
  } = useContext(GlobalContext);

  useEffect(() => {
    socket.emit('getAllGroups');

    socket.on('groupList', groups => {
      console.log(groups, 'hhhhhhhhhhhhhhhhhhhhhhh');
      setAllChatRooms(groups);
    });
  }, [socket]);

  function handleLogout() {
    setCurrentUser('');
    setShowLoginView(false);
  }

  useEffect(() => {
    if (currentUser.trim() === '') navigation.navigate('Home');
  }, [currentUser]);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Welcome {currentUser}!</Text>
          <Pressable onPress={handleLogout}>
            <Text>!!out</Text>
            {/* <AntDesign name="logout" size={30} color={"black"} /> */}
          </Pressable>
        </View>
      </View>
      <View style={styles.listContainer}>
        {allChatRooms && allChatRooms.length > 0 ? (
          <FlatList
            data={allChatRooms}
            renderItem={({item}) => <ChatComponents item={item} />}
            keyExtractor={item => item.id}
          />
        ) : null}
      </View>
      <View style={styles.bottomContainer}>
        <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Create New Group</Text>
          </View>
        </Pressable>
      </View>
      {modalVisible && <NewGroupModal />}
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#eee',
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#fff',
    height: 70,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    marginBottom: 15,
    flex: 0.3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  listContainer: {
    flex: 3.4,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 0.3,
    padding: 10,
  },
  button: {
    backgroundColor: '#703efe',
    padding: 12,
    width: '100%',
    elevation: 1,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
