import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button,Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import dedinho from './assets/dedinho.gif';
import AppName from './index.js';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppName>Fala novato</AppName>
        <Text style={styles.textMaior}>Seja bem-vindo!</Text>
        <LinearGradient colors={['#5C6480', 'transparent']}
          style={styles.background}>
          <Text style={styles.texto}>Esta pronto para iniciar?!</Text>
          <Button title="Precione-me"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')} />
        </LinearGradient>
        <Image source={dedinho} style={{ width: 300, height: 300, }} ></Image>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    padding: '60px',
    fontSize: '40px',
    color: 'white',
    borderRadius: '20px',
  },
  textMaior: {
    fontSize: '35px',
  }
});