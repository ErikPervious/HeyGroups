import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

export function ChatRoom() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>ChatRoom</Text>
      <Button title="Login" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}