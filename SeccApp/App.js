import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [name, setName] = useState('');
    const [nim, setNim] = useState('');
    const [kelas, setKelas] = useState('');
    const [pesan, setPesan] = useState('');

  return (
    <View style={styles.container}>
      <Text>Nama : Muhammad Faried</Text>
      <Text>NIM : 4112755201240043</Text>
      <Text>Kelas : FICT 2-B</Text>
      <StatusBar style="auto" />

      <TextInput
              placeholder="Masukkan nama Anda"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
      
            <TextInput
              placeholder="Masukkan NIM Anda"
              value={nim}
              onChangeText={setNim}
              style={styles.input}
              keyboardType="numeric"
            />

            <TextInput
              placeholder="Masukkan Kelas Anda"
              value={kelas}
              onChangeText={setKelas}
              style={styles.input}
            />

            <Button
              title={pesan ? "Tutup Pesan" : "Tampilkan Pesan"}
              onPress={() => {
                setPesan(pesan ? '' : `Halo ${name}, NIM kamu ${nim}, Kelas kamu ${kelas}`);
              }}
            />
            {pesan ? <Text>{pesan}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
