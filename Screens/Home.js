import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home( {navigation} ) {
  return (
    <>
      <Text>Home</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Details"
          onPress={() => navigation.navigate('Details')} />
      </View>
    </>
  );
}