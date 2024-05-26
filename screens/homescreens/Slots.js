import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const availableSlots = [
  { id: '1', dateTime: '2024-06-01 10:00 AM' },
  { id: '2', dateTime: '2024-06-01 02:00 PM' },
  { id: '3', dateTime: '2024-06-02 11:00 AM' },
];

const occupiedSlots = [
  { id: '1', dateTime: '2024-06-01 09:00 AM' },
  { id: '2', dateTime: '2024-06-01 11:00 AM' },
  { id: '3', dateTime: '2024-06-02 01:00 PM' },
];

const Slots = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../assets/sched.png')}
        />
        <Text style={styles.headerText}>Slots</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Available Slots</Text>
          <FlatList
            data={availableSlots}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.slotItem}>
                <Text style={styles.itemText}>{item.dateTime}</Text>
              </View>
            )}
            contentContainerStyle={styles.slotList}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Occupied Slots</Text>
          <FlatList
            data={occupiedSlots}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.slotItem}>
                <Text style={styles.itemText}>{item.dateTime}</Text>
              </View>
            )}
            contentContainerStyle={styles.slotList}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('tab')}>
        <Image
          style={styles.homeIcon}
          source={require('../../assets/home.png')}
        />
      </TouchableOpacity>
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
  homeButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  homeIcon: {
    width: 50,
    height: 50,
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
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 10,
    textAlign: 'center',
  },
  slotList: {
    alignItems: 'center',
  },
  slotItem: {
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#00796B',
  },
});

export default Slots;
