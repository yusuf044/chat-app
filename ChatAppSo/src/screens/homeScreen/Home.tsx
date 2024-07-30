// import {
//   Alert,
//   ImageBackground,
//   Keyboard,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import React, {useContext, useEffect} from 'react';
// import {GlobalContext} from '../../context';
// import {useNavigation} from '@react-navigation/native';
// const image = require('../../assets/images/banner-image.webp');
// const Home = ({navigation}) => {
//   const {
//     showLoginView,
//     setShowLoginView,
//     currentUserName,
//     setCurrentUserName,
//     currentUser,
//     setCurrentUser,
//     allUsers,
//     setAllUsers,
//   } = useContext(GlobalContext);
//   //   const navigation = useNavigation();

//   function handelRegisterAndSignin(isLogin) {
//     if (currentUserName.trim() !== ' ') {
//       const index = allUsers.findIndex(
//         userItem => userItem === currentUserName,
//       );
//       if (isLogin) {
//         if (index === -1) {
//           Alert.alert('Please register first');
//         } else {
//           Alert.alert('JJJJ');
//           setCurrentUser(currentUserName);
//         }
//       } else {
//         if (index === -1) {
//           allUsers.push(currentUserName);
//           setAllUsers(allUsers);
//           setCurrentUser(currentUserName);
//         } else {
//           Alert.alert('Already  registered ! pls Login');
//         }
//       }
//       setCurrentUserName('');
//     } else {
//       Alert.alert('User Name fild is  empty');
//     }
//     Keyboard.dismiss();
//   }
//   useEffect(() => {
//     if (currentUserName.trim() !== ' ') navigation.navigate('Chats');
//   }, [currentUser]);

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         resizeMode="contain"
//         style={styles.imageBg}
//         source={image}
//       />
//       <View style={styles.content}>
//         {showLoginView ? (
//           <View style={styles.infoBlock}>
//             <View style={styles.loginInputContainer}>
//               <Text style={styles.heading}>Enter Your User Name</Text>
//               <TextInput
//                 autoCorrect={false}
//                 placeholder="Enter your user name"
//                 style={styles.loginInput}
//                 onChangeText={value => setCurrentUserName(value)}
//                 value={currentUserName}
//               />
//             </View>
//             <View style={styles.buttonWrapper}>
//               <Pressable
//                 onPress={() => handelRegisterAndSignin(false)}
//                 style={styles.button}>
//                 <Text style={styles.buttonText}>Register</Text>
//               </Pressable>
//               <Pressable
//                 onPress={() => handelRegisterAndSignin(true)}
//                 style={styles.button}>
//                 <Text style={styles.buttonText}>Login</Text>
//               </Pressable>
//             </View>
//           </View>
//         ) : (
//           <View style={styles.infoBlock}>
//             <Text style={styles.heading}>Connect, Grow and Inspire</Text>
//             <Text style={styles.subHeading}>
//               Connect people around the world for free
//             </Text>

//             <Pressable
//               onPress={() => setShowLoginView(true)}
//               style={styles.button}>
//               <Text style={styles.buttonText}>Get Started</Text>
//             </Pressable>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {flex: 1},
//   imageBg: {width: '100%', flex: 2.8, justifyContent: 'center'},
//   loginInputContainer: {
//     width: '80%',
//     alignItems: 'center',

//     // alignItems: 'center',
//   },
//   loginInput: {
//     borderRadius: 40,
//     // borderWidth: 0.4,
//     padding: 10,
//     backgroundColor: '#FFF',
//     elevation: 2,
//     width: '100%',
//   },
//   infoBlock: {width: '100%', alignItems: 'center', justifyContent: 'center'},
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 10,
//   },
//   subHeading: {
//     fontSize: 15,
//     color: '#acacac',
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: '#703efe',
//     padding: 12,
//     marginVertical: 10,
//     width: '36%',
//     elevation: 3,
//     borderRadius: 50,
//   },
//   buttonWrapper: {
//     flexDirection: 'row',
//     gap: 20,
//     marginTop: 10,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
// });

// new

import {
  Alert,
  ImageBackground,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useContext, useEffect} from 'react';
import {GlobalContext} from '../../context';

export default function Home({navigation}) {
  const {
    showLoginView,
    setShowLoginView,
    currentUserName,
    setCurrentUserName,
    currentUser,
    setCurrentUser,
    allUsers,
    setAllUsers,
  } = useContext(GlobalContext);
  const image = require('../../assets/images/banner-image.webp');

  function handleRegisterAndSignIn(isLogin) {
    if (currentUserName.trim() !== '') {
      const index = allUsers.findIndex(
        userItem => userItem === currentUserName,
      );

      if (isLogin) {
        if (index === -1) {
          Alert.alert('Please register first');
        } else {
          setCurrentUser(currentUserName);
        }
      } else {
        if (index === -1) {
          allUsers.push(currentUserName);
          setAllUsers(allUsers);
          setCurrentUser(currentUserName);
        } else {
          Alert.alert('Already registered ! Please login');
        }
      }

      setCurrentUserName('');
    } else {
      Alert.alert('User name field is empty');
    }

    Keyboard.dismiss();
  }

  useEffect(() => {
    if (currentUser.trim() !== '') navigation.navigate('Chats');
  }, [currentUser]);

  console.log(allUsers, currentUser);

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground source={image} style={styles.homeImage} />
      <View style={styles.content}>
        {showLoginView ? (
          <View style={styles.infoBlock}>
            <View style={styles.loginInputContainer}>
              <Text style={styles.heading}>Enter Your User Name</Text>
              <TextInput
                autoCorrect={false}
                placeholder="Enter your user name"
                style={styles.loginInput}
                onChangeText={value => setCurrentUserName(value)}
                value={currentUserName}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Pressable
                onPress={() => handleRegisterAndSignIn(false)}
                style={styles.button}>
                <View>
                  <Text style={styles.buttonText}>Register</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleRegisterAndSignIn(true)}
                style={styles.button}>
                <View>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.infoBlock}>
            <Text style={styles.heading}>Connect , Grow and Inspire</Text>
            <Text style={styles.subHeading}>
              Connect people around the world for free
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setShowLoginView(true)}>
              <View>
                <Text style={styles.buttonText}>Get Started</Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  homeImage: {
    width: '100%',
    flex: 3,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  infoBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 15,
    color: '#acacac',
    marginBottom: 15,
  },
  loginInput: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
  },
  button: {
    backgroundColor: '#703efe',
    padding: 15,
    marginVertical: 10,
    width: '34%',
    elevation: 1,
    borderRadius: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
