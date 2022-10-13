
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Button from '../components/button.js';

export default function Details() {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.innerTextTitle}>Bem vindo</Text>
          <Text style={styles.innerText}>Shalom Pereira dos santos</Text>
        </View>
        <View>
          {/* demais options */}
        </View>
        <View style={styles.buttonLocale}>
          <Button
            title="Voltar"
            onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#66C3E2',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66C3E2',
  },
  buttonLocale:{
    height: '700px',
    padding: '30px',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    backgroundColor: 'white',
  },
  innerTextTitle:{
    color: 'white',
    fontSize: '60px'
  },
  innerText:{
    color: 'white',
    fontSize: '30px'
  }
});