import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Chats, Home, Messages} from './screens';
import GlobalState from './context';
import {StatusBar} from 'react-native';

export type RootStackParamsList = {
  Home: undefined;
  Chats: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Routes = () => {
  return (
    <GlobalState>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
};

export default Routes;
// ------
