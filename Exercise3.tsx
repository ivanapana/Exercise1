import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>BIODATA SAYA</Text>

        <Image source={require('./myphoto.jpg')} style={styles.photo} />

        <View style={styles.infoBox}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.value}>Sondakh, Ivana Glory Mawar Sharon</Text>

          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>105022310032</Text>

          <Text style={styles.label}>No. Registrasi:</Text>
          <Text style={styles.value}>S22310210</Text>

          <Text style={styles.label}>Tempat Tinggal:</Text>
          <Text style={styles.value}>Outsider Jauh</Text>

          <Text style={styles.label}>Mata Kuliah:</Text>
          <Text style={styles.value}>Pengembangan Aplikasi Mobile</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1ccecff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#06244eff',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ecc6d8ff',
  },
  infoBox: {
    width: '100%',
    padding: 20,
    backgroundColor: '#e6cae6ff',
    borderRadius: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#353b48',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: '#2f3640',
  },
});
