import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

// import konstan warna dan bahasa
import Warna from "../konstan/Warna";
import FontText from "../komponen/dasar/FontText";

// import komponen layar
import LayarPacking from "../layar/LayarPacking";
import LayarGoodReceipt from "../layar/LayarGoodReceipt";
import LayarShipping from "../layar/LayarShipping";
import LayarFQRolls from "../layar/LayarFQRolls";
import LayarOther from "../layar/LayarOther";

// setting header default pada setiap halaman
const opsiStandarNavigasi = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Warna.hitam
  },
  headerTitleStyle: {
    fontFamily: "roboto-bold"
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
    initialRouteName: "Packing",
    contentOptions: {
      activeTintColor: Warna.hijau,
      activeBackgroundColor: Warna.hitam,
      inactiveTintColor: Warna.teks
    },
    drawerType: "slide",
    drawerBackgroundColor: Warna.utama,
    contentComponent: props => KomponenDrawerCustom(props)
  }
);

const KomponenDrawerCustom = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={gaya.kontainer}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={gaya.header}>
          <FontText style={gaya.logo}>LOGO/FOTO</FontText>
          <FontText>userAktifSaatIni</FontText>
        </View>
        <DrawerItems {...props} />
        <View style={gaya.kontainerLogout}>
          <Button style={gaya.keluar} title="LOG OUT" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const gaya = StyleSheet.create({
  kontainer: {
    flex: 1
  },
  header: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontSize: 30
  },
  kontainerLogout: {
    width: "85%",
    paddingLeft: "15%"
  },
  keluar: {
    alignSelf: "stretch"
  }
});

// export appContainer (wrapper) yang akan diload di App.js
export default createAppContainer(NavigatorUtama);
