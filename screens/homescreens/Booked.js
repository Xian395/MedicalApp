import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';

const appointments = [
  { id: '1', name: 'Ian De Guzman', age: 5, avatar: require('../../assets/login.png') },
  { id: '2', name: 'Vince Santos', age: 11, avatar: require('../../assets/login.png') },
  { id: '3', name: 'Trixie Garcia', age: 8, avatar: require('../../assets/login.png') },
  { id: '4', name: 'Sophie Gomez', age: 7, avatar: require('../../assets/login.png') },
];

const Booked = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const handleAddAppointment = () => {
    console.log('Add Appointment button pressed');
    // Navigate to Add Appointment screen
    navigation.navigate('AddAppointment');
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../assets/sched.png')}
        />
        <Text style={styles.headerText}>BOOKED APPOINTMENTS</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/seach.png')}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Patient's name"
        />
      </View>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <View style={styles.appointmentItem}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.appointmentDetails}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.ageText}>Age of {item.age}</Text>
              </View>
              <View style={styles.icons}>
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
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton}  onPress={() => navigation.navigate('add')}>
        <Text style={styles.addButtonText}>Add Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('tab')}>
        <Image
          style={styles.homeIcon}
          source={require('../../assets/home.png')}
        />
      </TouchableOpacity>
      
      {selectedAppointment && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Client Details</Text>
              <Image source={selectedAppointment.avatar} style={styles.modalAvatar} />
              <Text style={styles.modalName}>{selectedAppointment.name}</Text>
              <Text style={styles.modalAge}>Age: {selectedAppointment.age}</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
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
  appointmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  appointmentDetails: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ageText: {
    fontSize: 14,
    color: '#777777',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#00BFA5',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 120,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalAge: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#00BFA5',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Booked;
