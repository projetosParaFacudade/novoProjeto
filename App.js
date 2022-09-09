import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import dedinho from './assets/dedinho.gif';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image source={dedinho} style={{width: 300, height: 300,}} ></Image>
        <Text style={styles.texto}>Dedinho</Text>
        <Text style={styles.texto}>pra cima</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE376',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    backgroundColor: 'grey',
    padding: '50px',
    fontSize: '40px',
    color: 'white',
    borderRadius: '20px',
  },
  photo:{

  }
});