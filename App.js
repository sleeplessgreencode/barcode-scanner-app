import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.selamatDatang}>Selamat datang di aplikasi barcode-scanner!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393E46',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selamatDatang: {
    color: '#EEEEEE'
  }
});
