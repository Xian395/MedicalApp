import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>

      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePicture}
          source={require('../../../assets/dash.png')}
        />
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.roleText}>Admin</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsHeader}>Contact Information</Text>
        <Text style={styles.detailsText}>Email: john.doe@example.com</Text>
        <Text style={styles.detailsText}>Phone: (123) 456-7890</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsHeader}>Account Settings</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  circle1: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E0F7F4',
  },
  circle2: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#B2EBF2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  roleText: {
    fontSize: 18,
    color: '#777777',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#00BFA5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  homeButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  homeIcon: {
    width: 50,
    height: 50,
  },
});

export default Profile;
