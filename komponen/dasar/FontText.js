import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

import Warna from '../../konstan/Warna';

class FontText extends Component {
  render() {
    return <Text style={gaya.teks}>{this.props.children}</Text>;
  }
}

const gaya = StyleSheet.create({
  teks: {
    fontFamily: 'roboto-regular',
    color: Warna.teks
  }
});

export default FontText;
