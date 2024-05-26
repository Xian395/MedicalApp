import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const AddAppointment = ({ navigation }) => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [reason, setReason] = useState('');
  const [physician, setPhysician] = useState('');
  const [timePreference, setTimePreference] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  

  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../assets/sched.png')}
        />
        <Text style={styles.headerText}>ADD APPOINTMENT</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Patient's Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Patient's Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Reason for Booking"
          value={reason}
          onChangeText={setReason}
        />
        <TextInput
          style={styles.input}
          placeholder="Child's Physician"
          value={physician}
          onChangeText={setPhysician}
        />
       
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('next')} >
        <Text style={styles.addButtonText}>Next</Text>
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00BFA5',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#00BFA5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  successImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#00BFA5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AddAppointment;
