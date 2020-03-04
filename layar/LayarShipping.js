import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Warna from '../konstan/Warna';

const LayarShipping = () => {
  return (
    <View style={gaya.utama}>
      <Text style={gaya.teks}>Halaman Shipping</Text>
    </View>
  );
};

const gaya = StyleSheet.create({
  utama: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna.utama
  },
  teks: {
    color: Warna.teks
  }
});

export default LayarShipping;
