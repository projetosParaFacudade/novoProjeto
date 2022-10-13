import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#66C3E2',
  },
  text: {
    fontSize: 30,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});