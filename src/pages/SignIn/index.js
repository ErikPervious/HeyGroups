import React, { useEffect, useState } from 'react';
import { 
  Text, 
  TextInput, 
  SafeAreaView, 
  TouchableOpacity, 
  Keyboard, 
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import auth from '@react-native-firebase/auth';

import { AlreadyIn } from '../AlreadyIn';

import { onError } from '../../utils/onError';

import styles from './styles';

export function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false); // false is create new account and true is login;
  const [passwordIsInvisible, setPasswordIsInvisible] = useState(true);

  const navigation = useNavigation();

  const inputs = [
    {
      value: name,
      onChangeText: value => setName(value),
      placeholder: "Digite seu nome",
      isVisible: type ? false : true,
      inputType: 'name'
    },
    {
      value: email,
      onChangeText: value => setEmail(value),
      placeholder: "Digite seu email",
      isVisible: true,
      inputType: 'email'
    },
    {
      value: password,
      onChangeText: value => setPassword(value),
      placeholder: "Digite sua senha",
      isVisible: true,
      inputType: 'password'
    },
  ]

  function handleLogin() {
    Keyboard.dismiss();

    if(type) {
      if(email === '' || password === '') return;
      
      auth().signInWithEmailAndPassword(email, password)
      .then(() => navigation.goBack())
      .catch(error => onError(error));
      return;
    };
    if(name === '' || email === '' || password === '') return;

    auth().createUserWithEmailAndPassword(email, password)
    .then(snapshot => {
      snapshot.user.updateProfile({
        displayName: name
      })
      .then(() => navigation.goBack());
    })
    .catch(error => onError(error.code));
  };

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
  }, [type]); // clear inputs when changing type;

  if(auth().currentUser) return <AlreadyIn user={auth().currentUser} />
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
          secureTextEntry={item.inputType === 'password' && passwordIsInvisible}
        />
      ))}
      <View style={styles.containerCheckBox}>
        <CheckBox
          value={!passwordIsInvisible}
          onValueChange={newValue => setPasswordIsInvisible(!newValue)}
          tintColors={{true: '#57DD86'}}
        />
        <Text style={styles.checkBoxText}>
          {passwordIsInvisible ? 'Mostrar' : 'Ocultar'} Senha
        </Text>
      </View>

      <TouchableOpacity 
        style={[styles.buttonLogin, {
          backgroundColor: type ? '#57DD86' : '#F53745'
        }]}
        onPress={handleLogin}
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