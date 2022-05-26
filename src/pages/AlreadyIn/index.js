import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

import auth from '@react-native-firebase/auth';

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { onError } from "../../utils/onError";

export function AlreadyIn(props) {

  const user = props.user;
  const navigation = useNavigation();

  function signOut() {
    auth().signOut()
    .then(() => navigation.goBack())
    .catch(error => onError(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{user.displayName}</Text>
      <Text style={styles.subtitle}>{user.email}</Text>

      <TouchableOpacity 
        style={styles.buttonLogout}
        onPress={signOut}
      >
        <Text style={styles.buttonLogoutText}>DESCONECTAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}