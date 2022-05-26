import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FFFFFF'
  },
  title: {
    color: '#121313',
    marginTop: Platform.OS === 'android' ? 55 : 80,
    fontSize: 28,
    fontWeight: 'bold'
  },
  subtitle: {
    marginBottom: 10,
    color: '#121212'
  },
  input: {
    color: '#121313',
    backgroundColor: '#E1E1E1',
    width: '90%',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 8,
    height: 50
  },
  buttonLogin: {
    width: '90%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 6
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 19
  },
  textCreateAccount: {
    color: '#121313'
  },
  containerCheckBox: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: 20,
    alignItems: "center"
  },
  checkBoxText: {
    color: '#12131380',
    fontWeight: 'bold'
  }

});

export default styles;