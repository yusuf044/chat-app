// import {createContext, useState} from 'react';
// export const GlobalContext = createContext(null);

// function GlobalState({children}) {
//   const [showLoginView, setShowLoginView] = useState(false);
//   const [currentUserName, setCurrentUserName] = useState('');
//   const [currentUser, setCurrentUser] = useState('');
//   const [allUsers, setAllUsers] = useState([]);
//   const [allChatRooms, setAllChatRooms] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [currentGroupName, setCurrentGroupName] = useState('');
//   const [message, setMessage] = useState({});
//   const [allChatMessage, setAllChatMessage] = useState([]);
//   const [currentChatMessage, setCurrentChatMessage] = useState('');
//   return (
//     <GlobalContext.Provider
//       value={{
//         showLoginView,
//         setShowLoginView,
//         currentUserName,
//         setCurrentUserName,
//         currentUser,
//         setCurrentUser,
//         allUsers,
//         setAllUsers,
//         allChatRooms,
//         setAllChatRooms,
//         modalVisible,
//         setModalVisible,
//         currentGroupName,
//         setCurrentGroupName,
//         message,
//         setMessage,
//         allChatMessage,
//         setAllChatMessage,
//         currentChatMessage,
//         setCurrentChatMessage,
//       }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }
// export default GlobalState;

// new

import {createContext, useState} from 'react';

export const GlobalContext = createContext(null);

function GlobalState({children}) {
  const [showLoginView, setShowLoginView] = useState(false);
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [allChatRooms, setAllChatRooms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentGroupName, setCurrentGroupName] = useState('');
  const [allChatMessages, setAllChatMessages] = useState([]);
  const [currentChatMesage, setCurrentChatMessage] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        showLoginView,
        setShowLoginView,
        currentUserName,
        setCurrentUserName,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        allChatRooms,
        setAllChatRooms,
        modalVisible,
        setModalVisible,
        currentGroupName,
        setCurrentGroupName,
        allChatMessages,
        setAllChatMessages,
        currentChatMesage,
        setCurrentChatMessage,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
