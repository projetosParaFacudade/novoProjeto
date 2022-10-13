import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import profile from '../assets/profile.png';


export default function Home( {navigation} ) {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.innerTextTitle}>Welcome To</Text>
          <Text style={styles.innerText}>your workspace</Text>
        </View>
        <View style={styles.header}>
          <Image style={{ width: '150px', height: '150px' }}
            source={profile} />
        </View>
        <View style={styles.buttonLocale}>
          <Button
            title="Entrar"
            onPress={() => navigation.navigate('Details')} />
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
    height: '300px',
    padding: '50px',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
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