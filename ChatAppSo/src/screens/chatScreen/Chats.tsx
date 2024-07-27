import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import * as Icon from 'react-native-feather';
import {GlobalContext} from '../../context';
import ChatComponents from '../../components/chatComponents/chatComponents';
import ModalComponent from '../../components/modalComponent';

const Chats = () => {
  const {allChatRooms, setAllChatRooms, modalVisible, setModalVisible} =
    useContext(GlobalContext);
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Welcome..</Text>
          {/* <Pressable>
            <Icon.LogOut width={18} height={18} />
          </Pressable> */}
        </View>
      </View>

      <View style={styles.listContainer}>
        {allChatRooms && allChatRooms.length > 0 ? (
          <FlatList
            data={allChatRooms}
            renderItem={item => <ChatComponents item={item} />}
            keyExtractor={({item}) => item.id}
          />
        ) : null}
      </View>

      <ModalComponent
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
        modelStyle={styles.modelView}
        animationType="slide"
        visible={modalVisible}>
        <View style={styles.modelSubView}>
          <Text>HELOO</Text>
        </View>
      </ModalComponent>
      <View style={styles.bottomContainer}>
        <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Create a new Group</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#eee',
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#FFF',
    height: 70,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    marginBottom: 15,
    flex: 0.3,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {flex: 3.4, paddingHorizontal: 10},
  bottomContainer: {flex: 0.3, padding: 10},
  button: {
    backgroundColor: '#703efe',
    padding: 12,
    width: '100%',
    elevation: 1,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modelView: {width: '90%', backgroundColor: '#fff'},
  modelSubView: {padding: 12, paddingBottom: 16},
});
