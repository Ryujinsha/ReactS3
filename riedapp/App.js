import React, { useState } from 'react';
import {
  View,Text,
  StyleSheet,FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isBioVisible, setIsBioVisible] = useState(false);

  const data = [
    { id: '1', title: 'JavaScript', image: 'https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/05/internship-rendi-cover-js-1024x768.png', desc :'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. Dibuat oleh Netscape pada tahun 1995'},
    { id: '2', title: 'Kotlin', image: 'https://us1.discourse-cdn.com/flex019/uploads/kotlinlang/original/2X/f/f440c5115af253e7b8dfdd241a45ccb8e494e8a6.png', desc :'Kotlin adalah sebuah bahasa pemrograman dengan pengetikan statis yang berjalan pada Mesin Virtual Java ataupun menggunakan kompiler LLVM'},
    { id: '3', title: 'Swift', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqn0EXPvwyHl9FUzPztEtWrrRqHc080zM2w&s', desc :'Swift adalah bahasa pemrograman sumber terbuka yang dibuat oleh Apple untuk mengembangkan aplikasi di berbagai platformnya seperti iOS, macOS, tvOS, dan watchOS.'},
  ];

  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const toggleBioVisibility = () => {
    setIsBioVisible(!isBioVisible);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => alert(`Anda menekan ${item.title}`)}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDesc}>{item.desc}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        );
      case 'Profile':
        return (
          <View style={styles.profileContainer}>
            <Image
              source={require('./assets/bahlil.jpeg')}
              style={styles.profileImage}
            />

            {isProfileVisible && (
              <View style={styles.profileInfoContainer}>
                <Text style={styles.profileName}>Muhammad Faried</Text>
              </View>
            )}

            {isBioVisible &&(
              <View style={styles.profileInfoContainer}>
                <Text style={styles.profileBio}>
                  Mahasigma Semester 3 | Suka Coding & Design
                </Text>
              </View>
            )}

            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={toggleProfileVisibility}
              >
                <Text style={styles.toggleButtonText}>
                  {isProfileVisible ? 'Sembunyikan' : 'Tampilkan'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.toggleButton}
                onPress={toggleBioVisibility}>
                <Text style={styles.toggleButtonText}>
                  {isBioVisible ? 'Sembunyikan' : 'Tampilkan'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'Settings':
        return (
          <View style={styles.settingsContainer}>
            <Text style={styles.settingsTitle}>⚙️ Pengaturan Aplikasi</Text>

            <TouchableOpacity style={styles.settingsButton} onPress={() => alert('Tombol Notifikasi ditekan!')}>
              <Text style={styles.settingsIcon}>🔔</Text>
              <Text style={styles.settingsButtonText}>Notifikasi</Text>
              <Text style={styles.settingsArrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsButton} onPress={() => alert('Tombol Mode Gelap ditekan!')}>
              <Text style={styles.settingsIcon}>🌙</Text>
              <Text style={styles.settingsButtonText}>Mode Gelap</Text>
              <Text style={styles.settingsArrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsButton} onPress={() => alert('Tombol Keamanan ditekan!')}>
              <Text style={styles.settingsIcon}>🔐</Text>
              <Text style={styles.settingsButtonText}>Keamanan</Text>
              <Text style={styles.settingsArrow}>›</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tugas Pertemuan 5</Text>
      </View>

      <View style={styles.content}>{renderContent()}</View>

      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          {[
            { key: 'Home', icon: '🏠' },
            { key: 'Profile', icon: '👤' },
            { key: 'Settings', icon: '⚙️' },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              style={styles.navButton}
            >
              <Text style={[styles.navIcon, activeTab === tab.key && styles.activeIcon]}>
                {tab.icon}
              </Text>
              <Text style={[styles.navText, activeTab === tab.key && styles.activeText]}>
                {tab.key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fb' },
  header: {
    padding: 20,
    backgroundColor: '#6c63ff',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  content: { flex: 1, padding: 15 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardTextContainer: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  profileInfoContainer: {
    alignItems: 'center',
  },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  profileName: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  profileBio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  toggleButton: {
    backgroundColor: '#6c63ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  navButton: { alignItems: 'center' },
  navIcon: { fontSize: 24, color: '#888' },
  navText: { fontSize: 12, color: '#888', marginTop: 3 },
  activeIcon: { color: '#6c63ff' },
  activeText: { color: '#6c63ff', fontWeight: '600' },
  settingsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
    color: '#333',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  settingsIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  settingsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    color: '#444',
  },
  settingsArrow: {
    fontSize: 20,
    color: '#ccc',
  },
});
