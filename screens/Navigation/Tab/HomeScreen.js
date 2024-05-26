import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.homeText}>HOME</Text>
        <Text style={styles.welcomeText}>Hello! My Admin</Text>
        <Image
          style={styles.avatar}
          source={require('../../../assets/dash.png')}
        />
      </View>
      
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}  onPress={() => navigation.navigate('book')}>
          <Text style={styles.menuButtonText}>Booked Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}  onPress={() => navigation.navigate('sched')}>
          <Text style={styles.menuButtonText}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('slot')}>
          <Text style={styles.menuButtonText}>Slots</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ana')}>
          <Text style={styles.menuButtonText}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.menuButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7F4',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#00BFA5',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  homeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 150,
    top: 60
  },
  welcomeText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginVertical: 10,
    marginRight: 150,
    top: 60
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    marginLeft: 200
  },
  menu: {
    width: '80%',
  },
  menuButton: {
    backgroundColor: '#00BFA5',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
