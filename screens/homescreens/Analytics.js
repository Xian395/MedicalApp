import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const weeklyData = [
  { id: '1', title: 'Total Appointments', value: '30' },
  { id: '2', title: 'Completed Appointments', value: '28' },
  { id: '3', title: 'Pending Appointments', value: '2' },
  { id: '4', title: 'Total Revenue', value: '₱15,000' },
];

const monthlyData = [
  { id: '1', title: 'Total Appointments', value: '120' },
  { id: '2', title: 'Completed Appointments', value: '110' },
  { id: '3', title: 'Pending Appointments', value: '10' },
  { id: '4', title: 'Total Revenue', value: '₱70,000' },
];

const Analytics = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../assets/sched.png')}
        />
        <Text style={styles.headerText}>Analytics</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Weekly Analytics</Text>
          <FlatList
            data={weeklyData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.analyticsItem}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemValue}>{item.value}</Text>
              </View>
            )}
            contentContainerStyle={styles.analyticsList}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Monthly Analytics</Text>
          <FlatList
            data={monthlyData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.analyticsItem}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemValue}>{item.value}</Text>
              </View>
            )}
            contentContainerStyle={styles.analyticsList}
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
    marginLeft: '30%'
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
  analyticsList: {
    alignItems: 'center',
  },
  analyticsItem: {
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796B',
  },
  itemValue: {
    fontSize: 24,
    color: '#00796B',
  },
});

export default Analytics;
