import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// import navigasi utama sebagai layar yang akan diload saat aplikasi booting
import NavigatorUtama from './navigasi/NavigatorUtama';

// buat fungsi untuk memuat font yang diperlukan
const muatFont = () => {
  return Font.loadAsync({
    'eczar-regular': require('./aset/font/Eczar-Regular.ttf'),
    'eczar-bold': require('./aset/font/Eczar-Bold.ttf'),
    'roboto-regular': require('./aset/font/RobotoCondensed-Regular.ttf'),
    'roboto-bold': require('./aset/font/RobotoCondensed-Bold.ttf')
  });
};

export default function App() {
  // buat state untuk mengevaluasi apakah font sudah dimuat saat aplikasi boot
  const [fontDimuat, setFontDimuat] = useState(false);

  // jika font belum dimuat, start muatFont on finish, set fontDimuat state to true
  if (!fontDimuat) {
    return (
      <AppLoading
        startAsync={muatFont}
        onFinish={() => {
          setFontDimuat(true);
        }}
      />
    );
  }

  // memuat navigasi utama
  return <NavigatorUtama />;
}
