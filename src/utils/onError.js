import { Alert } from "react-native";

export function onError(errorCode) {
  var message = 'Erro desconhecido, tente novamente mais tarde.'

  switch (errorCode) {
    case 'auth/invalid-email':
      message = `Email invalido, o email deve conter o formato do exemplo.\nEx: usuario@conta.com`
      break;
    case 'auth/user-not-found':
      message = `Não há usuário vinculado a esse email!`
      break;
    case 'auth/wrong-password':
      message = `O email ou a senha está incorreta.`
      break;
    case 'auth/weak-password':
      message = `A senha deve conter mais de 8 caracteres.`
      break;
    default:
      console.log(errorCode);
      break;
  }

  return Alert.alert('Algo deu Errado', message);
};