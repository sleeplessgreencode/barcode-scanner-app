import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

// import konstan warna dan bahasa
import Warna from '../konstan/Warna';

// import komponen layar
import LayarPacking from '../layar/LayarPacking';
import LayarGoodReceipt from '../layar/LayarGoodReceipt';
import LayarShipping from '../layar/LayarShipping';
import LayarFQRolls from '../layar/LayarFQRolls';
import LayarOther from '../layar/LayarOther';

// setting header default pada setiap halaman
const opsiStandarNavigasi = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Warna.hitam
  },
  headerLeft: () => (
    <Ionicons
      name="md-menu"
      size={24}
      color={Warna.hijau}
      style={{ paddingLeft: 20 }}
      // toggleDrawer untuk menampilkan drawer
      onPress={() => navigation.toggleDrawer()}
    />
  ),
  headerBackTitleStyle: {},
  headerTintColor: Warna.hijau
});

// Stack untuk halaman terkait aktivitas packing
const StackPacking = createStackNavigator(
  {
    Packing: LayarPacking
    // Tambahan layar dalam menu stacking dapat ditambahkan di dalam object ini
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons name="md-cube" size={23} color={drawerConfig.tintColor} />
      )
    },
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

// Stack untuk halaman terkait aktivitas good receipt
const StackGoodReceipt = createStackNavigator(
  {
    GoodReceipt: LayarGoodReceipt
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons name="md-log-in" size={23} color={drawerConfig.tintColor} />
      )
    },
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

// Stack untuk halaman terkait aktivitas shipping
const StackShipping = createStackNavigator(
  {
    Shipping: LayarShipping
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons name="md-log-out" size={23} color={drawerConfig.tintColor} />
      )
    },
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

// Stack untuk halaman terkait aktivitas fq rolls
const StackFQRolls = createStackNavigator(
  {
    FQRolls: LayarFQRolls
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons name="md-repeat" size={23} color={drawerConfig.tintColor} />
      )
    },
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

// Stack untuk halaman terkait aktivitas other
const StackOther = createStackNavigator(
  {
    Other: LayarOther
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons name="md-options" size={23} color={drawerConfig.tintColor} />
      )
    },
    defaultNavigationOptions: opsiStandarNavigasi
  }
);

// NAVIGATOR UTAMA
// Merupakan drawer yang mengandung lebih dari satu stack
// Masing - masing stack dapat memiliki lebih dari 1 halaman
// Konfigurasi stack dilakukan di masing - masing createStackNavigator terkait
const NavigatorUtama = createDrawerNavigator(
  {
    Packing: StackPacking,
    GoodReceipt: StackGoodReceipt,
    Shipping: StackShipping,
    FQRolls: StackFQRolls,
    Other: StackOther
  },
  {
    initialRouteName: 'Packing',
    contentOptions: {
      activeTintColor: Warna.hijau
    }
  }
);

// export appContainer (wrapper) yang akan diload di App.js
export default createAppContainer(NavigatorUtama);
