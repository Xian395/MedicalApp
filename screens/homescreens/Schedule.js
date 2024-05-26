import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';

const doctors = [
  {
    id: '1',
    name: 'M.A.Asarden',
    specialty: "Children's Dentist",
    avatar: require('../../assets/doc1.png'),
  },
  {
    id: '2',
    name: 'S.Jone',
    specialty: 'Eye Surgeon',
    avatar: require('../../assets/doc2.png'),
  },
  {
    id: '3',
    name: 'M.Azam',
    specialty: 'Surgeon',
    avatar: require('../../assets/doc3.png'),
  },
  {
    id: '4',
    name: 'S.Sumail',
    specialty: 'Vascular Specialist',
    avatar: require('../../assets/doc4.png'),
  },
];

const Schedule = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../assets/sched.png')}
        />
        <Text style={styles.headerText}>DOCTOR'S TIME SCHEDULE</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/seach.png')}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Doctors name"
        />
      </View>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.doctorCard}>
            <Image source={item.avatar} style={styles.doctorAvatar} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{item.name}</Text>
              <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
            </View>
            <View style={styles.iconsContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/chat.png')}
              />
              <Image
                style={styles.icon}
                source={require('../../assets/calendar.png')}
              />
            </View>
          </View>
        )}
      />
      <View style={styles.homeIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('tab')}>
        <Image
          style={styles.homeIcon}
          source={require('../../assets/home.png')}
        />
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
    marginBottom: 40,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00BFA5',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00BFA5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#777777',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  homeIconContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  homeIcon: {
    width: 50,
    height: 50,
  },
});

export default Schedule;
