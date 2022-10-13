
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function Details() {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.innerTextTitle}>Go work</Text>
        </View>
        <View style={styles.buttonLocale}>
          <Button
            title="Back"
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
    height: '400px',
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