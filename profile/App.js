import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";

// Ambil ukuran layar untuk responsivitas
const { width } = Dimensions.get("window");

export default function App() {
  const [pesan1, setPesan1] = useState("");
  const [pesan2, setPesan2] = useState("");

  const handleContact = () => {
    Alert.alert(
      "Contact Me",
      "Anda bisa menghubungi saya melalui email: kadal.berenang@outlook.co.id"
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.name}>Halo, Kenalkan Aku</Text>

        {/* Foto Profil */}
        <Image source={require("./assets/diddy.png")} style={styles.profileImage} />

        {/* Nama Lengkap */}
        <Text style={styles.name}>Muhammad Faried</Text>

        {/* Tombol Siapa Aku */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (pesan1) {
              setPesan1("");
            } else {
              setPesan1(
                "Halo, saya Muhammad Faried, seorang pengembang aplikasi mobile yang bersemangat dan berdedikasi."
              );
            }
          }}
        >
          <Text style={styles.buttonText}>
            {pesan1 ? "Sudah Kenal Ya" : "Siapa Aku?"}
          </Text>
        </TouchableOpacity>

        {pesan1 !== "" && <Text style={styles.pesanText}>{pesan1}</Text>}

        {/* Tombol Apa Minatku */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (pesan2) {
              setPesan2("");
            } else {
              setPesan2(
                "Aku berminat dalam pengembangan aplikasi mobile menggunakan React Native dan memiliki pengalaman dalam membangun aplikasi yang responsif dan user-friendly."
              );
            }
          }}
        >
          <Text style={styles.buttonText}>
            {pesan2 ? "Keren Kan" : "Apa Minatku?"}
          </Text>
        </TouchableOpacity>

        {pesan2 !== "" && <Text style={styles.pesanText}>{pesan2}</Text>}

        {/* Tombol Contact Me */}
        <TouchableOpacity style={styles.button} onPress={handleContact}>
          <Text style={styles.buttonText}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#f0f4f8", // Warna background lembut
  },
  container: {
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#007AFF",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  pesanText: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#007AFF",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
