import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const notifications = [
  { id: '1', message: 'Appointment with Ian De Guzman confirmed for 3 PM tomorrow.' },
  { id: '2', message: 'New message from Vince Santos regarding his prescription.' },
  { id: '3', message: 'Reminder: Follow-up appointment with Trixie Garcia next week.' },
  { id: '4', message: 'Lab results for Sophie Gomez are now available.' },
];

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../../assets/notification.png')}
        />
        <Text style={styles.headerText}>Admin Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        )}
        style={styles.notificationsList}
      />
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
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#E0F7FA',
  },
  notificationText: {
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

export default Notification;
