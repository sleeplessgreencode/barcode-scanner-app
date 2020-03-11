// Layar ini digunakan untuk pengembangan fitur penambahan pengguna
// untuk memastikan fungsi insert sqlite berjalan normal
// dalam memasukkan pengguna baru ke dalam tabel pengguna

import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import Warna from "../konstan/Warna";
import FontText from "../komponen/dasar/FontText";
import { FlatList } from "react-native-gesture-handler";

const LayarTest = () => {
  const penangananTombol = () => {
    return console.log("Tombol diklik!");
  };

  return (
    <View style={gaya.utama}>
      <View style={gaya.kontainerTesting}>
        <FontText>Nama Pengguna</FontText>
        <TextInput style={gaya.input} />
        <FontText>Password</FontText>
        <TextInput style={gaya.input} />
        {/* Akses Level ke depannya adalah drop down */}
        <FontText>Akses Level</FontText>
        <TextInput style={gaya.input} />
        <View style={gaya.kontainerTombol}>
          <Button
            title="Tambah Pengguna"
            style={gaya.tombol}
            onPress={penangananTombol}
          />
        </View>
      </View>
      {/* Kontainer untuk mencetak pengguna di tabel pengguna */}
      <View></View>
    </View>
  );
};

const gaya = StyleSheet.create({
  utama: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: Warna.utama
  },
  kontainerTesting: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  input: {
    backgroundColor: "white",
    width: 250,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "center"
  },
  kontainerTombol: {
    margin: 20
  }
});

export default LayarTest;
