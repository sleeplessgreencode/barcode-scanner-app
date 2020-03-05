import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Warna from '../konstan/Warna';
import FontText from '../komponen/dasar/FontText';

const LayarOther = () => {
  return (
    <View style={gaya.utama}>
      <FontText>Halaman Other</FontText>
    </View>
  );
};

const gaya = StyleSheet.create({
  utama: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna.utama
  }
});

export default LayarOther;
