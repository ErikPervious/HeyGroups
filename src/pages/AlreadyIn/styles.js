import { StyleSheet } from "react-native";

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
  buttonLogout: {
    width: '90%',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 8,
    height: 50,
    backgroundColor: '#F53745',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLogoutText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'
  }
});

export default styles;