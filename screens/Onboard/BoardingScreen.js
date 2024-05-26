import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BoardingScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>PEDIATRICIAN SCHEDULING AND QUEUING APP</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Make An Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  circle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#B0EACD',
    top: -150,
    left: -150,
  },
  circle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#B0EACD',
    top: 50,
    right: -75,
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 90
  },
  title: {
    fontSize: 30,
    color: '#000',
  },
  subtitle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    top: 40
  },
  button: {
    backgroundColor: '#00C897',
    padding: 15,
    width: 350,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
});

export default BoardingScreen;
