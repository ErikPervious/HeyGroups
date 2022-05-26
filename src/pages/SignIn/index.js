import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';

import styles from './styles';

export function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false); // false is create new account and true is login;

  const inputs = [
    {
      value: name,
      onChangeText: value => setName(value),
      placeholder: "Digite seu nome",
      isVisible: type ? false : true
    },
    {
      value: email,
      onChangeText: value => setEmail(value),
      placeholder: "Digite seu email",
      isVisible: true
    },
    {
      value: password,
      onChangeText: value => setPassword(value),
      placeholder: "Digite sua senha",
      isVisible: true
    },
  ]

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
  }, [type]); // clear inputs when changing type;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HeyGroups</Text>
      <Text style={styles.subtitle}>Ajude, colabora, faça networking!</Text>

      {inputs.map((item, index) => item.isVisible && (
        <TextInput
          key={index}
          style={styles.input}
          value={item.value}
          onChangeText={item.onChangeText}
          placeholder={item.placeholder}
          placeholderTextColor="#999999"
        />
      ))}

      <TouchableOpacity 
        style={[styles.buttonLogin, {
          backgroundColor: type ? '#57DD86' : '#F53745'
        }]}
      >
        <Text style={styles.buttonText}>
          {type ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setType(!type)}
      >
        <Text style={styles.textCreateAccount}>
          {type ? 'Criar uma nova conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}