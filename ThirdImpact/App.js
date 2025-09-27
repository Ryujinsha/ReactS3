import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [expanded, setExpanded] = useState(null);

  const fruits = [
    { key: 'Apple', emoji: '🍎', desc: 'Buah apel segar dan manis, kaya vitamin C.', image: { require: './assets/Apel.png' } },
    { key: 'Banana', emoji: '🍌', desc: 'Pisang kaya kalium, baik untuk energi.', image: { uri: 'https://picsum.photos/100?2' } },
    { key: 'Orange', emoji: '🍊', desc: 'Jeruk penuh vitamin C, menyegarkan.', image: { uri: 'https://picsum.photos/100?3' } },
    { key: 'Mango', emoji: '🥭', desc: 'Mangga manis legit, favorit tropis.', image: { uri: 'https://picsum.photos/100?4' } },
    { key: 'Grapes', emoji: '🍇', desc: 'Anggur bisa dimakan langsung atau dijus.', image: { uri: 'https://picsum.photos/100?5' } },
    { key: 'Pineapple', emoji: '🍍', desc: 'Nanas rasa manis asam, segar di jus.', image: { uri: './assets/nanas.png' } },
  ];

  const toggleExpand = (itemKey) => {
    setExpanded(expanded === itemKey ? null : itemKey);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native Komponen Dasar</Text>
      </View>

      <Image
        source={{ uri: 'https://scontent.fcgk8-1.fna.fbcdn.net/v/t39.30808-6/427643642_944656950360997_8888780046731067025_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEJN5mgePOXI-wzeZgq-B6qJAd0yExWVPokB3TITFZU-jWSGXQiZDdyJEPVV_oYOD_M07EjnXhTqMzk_FXM9M2I&_nc_ohc=9FzRNtJng2IQ7kNvwGjZFq0&_nc_oc=AdnDzAqrglJ09vpd7iI7gEuSgqabQ4VV4pdXMxs6VvDcjyFS_ZVjjhsRNufIjvtqB4ftoXvdULKhTuY1jjrYCIWT&_nc_zt=23&_nc_ht=scontent.fcgk8-1.fna&_nc_gid=895_U3-o1Wctccrs9Z_2_A&oh=00_Afa5Q9EzJvQ4k_R7-jCYdz0EiyeftJOEjabuFXs1O0f8vA&oe=68DDA2E3' }}
        style={styles.image}
      />

      <Text style={styles.text}>
        Halo, selamat datang di aplikasi React Native menggunakan Expo!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama Anda"
        value={name}
        onChangeText={setName}
      />

      <Button
        title={message ? "Tutup Pesan" : "Tampilkan Pesan"}
        onPress={() => {
          setMessage(message ? '' : `Halo ${name || 'Kamu'}, selamat belajar React Native!`);
        }}
      />

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.subtitle}>Daftar Buah:</Text>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.key}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => toggleExpand(item.key)}
          >
            <Text style={styles.listItem}>{item.emoji} {item.key}</Text>
            {expanded === item.key && (
              <View style={styles.dropdown}>
                <Image source={item.image} style={styles.fruitImage} />
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.buttonCustom}
        onPress={() => alert('Tombol Custom ditekan!')}
      >
        <Text style={styles.buttonText}>Tombol Custom</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { backgroundColor: '#2196F3', padding: 15, borderRadius: 10, marginBottom: 15 },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  image: { width: 80, height: 80, borderRadius: 40, alignSelf: 'center', marginVertical: 15 },
  fruitImage: { width: 100, height: 100, borderRadius: 10, marginBottom: 5, alignSelf: 'center' },
  text: { fontSize: 16, marginVertical: 10, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10, borderRadius: 5, fontSize: 16 },
  message: { marginTop: 10, padding: 10, backgroundColor: '#e7f4e7', borderColor: 'green', borderWidth: 1, borderRadius: 5, fontSize: 16, color: 'green', fontWeight: 'bold', textAlign: 'center', overflow: 'hidden' },
  subtitle: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
  list: { marginBottom: 20 },
  listItemContainer: { backgroundColor: '#fff', padding: 15, marginVertical: 5, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  listItem: { fontSize: 17, fontWeight: 'bold' },
  desc: { marginTop: 5, fontSize: 14, color: '#555' },
  buttonCustom: { marginTop: 20, padding: 15, backgroundColor: '#007BFF', borderRadius: 8, alignItems: 'center', marginBottom: 40 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  dropdown: { marginTop: 10, alignItems: 'center' }
});
