import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../pages/SignIn';
import { ChatRoom } from '../pages/ChatRoom';
import { Messages } from '../pages/Messages';
import { Search } from '../pages/Search';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="ChatRoom"
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Faça Login' }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
      />
      <Stack.Screen
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  )
};