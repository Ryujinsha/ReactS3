import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const saya = "Ryuujinsha ganteng";
  const [umur, setUmur] = useState('');
  const [pesan, setPesan] = useState('');
  const [showImage, setShowImage] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Pepatah mengatakan :</Text>
      <Text>"Tak Kenal maka kenalan!"</Text>
      <Text>Kenalan dulu le!</Text>
      <Text>Nama aku {saya}</Text>

      <TextInput
        placeholder="Masukkan nama Anda"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Masukkan Umur Anda"
        value={umur}
        onChangeText={setUmur}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button
        title={pesan ? "Tutup Pesan" : "Tampilkan Pesan"}
        onPress={() => {
          if (pesan) {
            setPesan('');
          } else {
            const umurNum = parseInt(umur, 10);
            if (!isNaN(umurNum) && umurNum > 20) {
              setPesan(`Halo ${name}, kamu sudah ${umur} ternyata dewasa`);
            } else {
              setPesan(`Halo ${name}, kamu masih ${umur} belum dewasa`);
            }
          }
        }}
      />
      <Text style={styles.pesan}>{pesan}</Text>
      <Button
        title={showImage ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
        onPress={() => setShowImage(!showImage)}
      />

      {showImage && (
        <Image
          source={require('./assets/4.jpg')}
          style={styles.image}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
  },
  pesan: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
