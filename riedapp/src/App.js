import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const data = [
    { id: '1', title: 'Item 1', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Item 2', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Item 3', image: 'https://via.placeholder.com/150' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            )}
          />
        );
      case 'Profile':
        return (
          <View style={styles.centerContent}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Deden Moh Alfiansyah</Text>
            <Text style={styles.profileBio}>
              📚 Mahasiswa Sistem Informasi | Suka Coding & Design
            </Text>
          </View>
        );
      case 'Settings':
        return (
          <View style={styles.centerContent}>
            <Text style={styles.settingsTitle}>⚙️ Pengaturan</Text>
            <Text style={styles.settingsText}>🔔 Notifikasi</Text>
            <Text style={styles.settingsText}>🌙 Mode Gelap</Text>
            <Text style={styles.settingsText}>🔐 Keamanan</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>🚀 My Cool App</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>{renderContent()}</View>

      {/* Floating Bottom Navigation */}
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
              <Text
                style={[
                  styles.navIcon,
                  activeTab === tab.key && styles.activeIcon,
                ]}
              >
                {tab.icon}
              </Text>
              <Text
                style={[
                  styles.navText,
                  activeTab === tab.key && styles.activeText,
                ]}
              >
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

  // Cards
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: { width: 120, height: 120, borderRadius: 12, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '600' },

  // Profile
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  profileName: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  profileBio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 30,
  },

  // Settings
  settingsTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  settingsText: { fontSize: 16, marginVertical: 6, color: '#444' },

  // Bottom Navigation
  bottomNavContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  navButton: { alignItems: 'center', marginHorizontal: 20 },
  navIcon: { fontSize: 20, color: '#888' },
  navText: { fontSize: 12, color: '#888', marginTop: 3 },
  activeIcon: { color: '#6c63ff' },
  activeText: { color: '#6c63ff', fontWeight: '600' },
});
