import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const LoginScreen = ( {navigation} ) => {
  const [activeTab, setActiveTab] = useState('LOGIN');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.header}>
        <Image source={require('../../assets/login.png')} style={styles.image} />
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => handleTabPress('LOGIN')}>
          <Text style={activeTab === 'LOGIN' ? styles.activeTab : styles.inactiveTab}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('APPOINTMENT')}>
          <Text style={activeTab === 'APPOINTMENT' ? styles.activeTab : styles.inactiveTab}>APPOINTMENT</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'LOGIN' ? (
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('tab')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgotten your password?</Text>
          <TouchableOpacity style={styles.googleButton}>
            <Image source={require('../../assets/gog.png')} style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          <TextInput style={styles.input2} placeholder="Full Name" />
          <TextInput style={styles.input2} placeholder="Contact Number" />
          <TextInput style={styles.input2} placeholder="Patient's Age" />
          <TextInput style={styles.input2} placeholder="Gender" />
          <TextInput style={styles.input2} placeholder="Reason for Booking" />
          <TextInput style={styles.input2} placeholder="Child's Physician" />
          <TextInput style={styles.input2} placeholder="Appointment Time Preference" />
          <TouchableOpacity style={styles.submit1} onPress={handleSubmit}>
            <Text style={styles.submit2}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.email}>
          <Text style={styles.contact}>pediamedical@gmail.com / 821-5829</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.successText}>Successfully</Text>
            <Text style={styles.successText}>Booked!</Text>
            <Image source={require('../../assets/succ.png')} style={styles.successImage} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  circle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#B0EACD',
    top: -100,
    left: -100,
  },
  circle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#B0EACD',
    top: 0,
    right: -75,
  },
  header: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 50
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C897',
    marginRight: 20,
  },
  inactiveTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 20,
    fontSize: 16,
  },
  input2: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00C897',
    padding: 15,
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
    marginVertical: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#000',
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
  },
  appointmentText: {
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
  },
  contact: {
    color: 'white',
    textAlign: 'center'
  },
  email: {
    backgroundColor: '#00C897',
    padding: 15,
    width: 500,
    top: 20
  },
  submit2: {
    color: 'white',
    textAlign: 'center'
  },
  submit1: {
    backgroundColor: '#00C897',
    padding: 15,
    width: 200,
    top: 10,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
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
    backgroundColor: '#00C897',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
