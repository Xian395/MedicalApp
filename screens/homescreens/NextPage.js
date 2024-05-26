import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Image } from 'react-native';

const NextPage = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderDaysOfWeek = () => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return days.map((day, index) => (
      <Text key={index} style={styles.dayOfWeek}>{day}</Text>
    ));
  };

  const renderDates = () => {
    const dates = Array(31).fill(null).map((_, index) => index + 1);
    const emptyDays = Array(1).fill(null);

    return [...emptyDays, ...dates].map((date, index) => (
      <TouchableOpacity key={index} onPress={() => setSelectedDate(date)} style={styles.dateContainer}>
        <Text style={[styles.date, selectedDate === date && styles.selectedDate]}>
          {date !== null ? date : ''}
        </Text>
      </TouchableOpacity>
    ));
  };

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('book');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.circleLarge}></View>
        <View style={styles.circleSmall}></View>
        <Text style={styles.title}>NEW APPOINTMENT</Text>
      </View>

      <View style={styles.calendar}>
        <Text style={styles.selectDateText}>Select appointment date</Text>
        <Text style={styles.monthText}>MAY</Text>
        <View style={styles.weekRow}>
          {renderDaysOfWeek()}
        </View>
        <View style={styles.datesContainer}>
          {renderDates()}
        </View>
      </View>

      <View style={styles.notes}>
        <Text>Notes:</Text>
        <TextInput style={styles.input} multiline />
      </View>

      <View style={styles.reminder}>
        <Text>Set a reminder:</Text>
        <TextInput style={styles.input} placeholder="Date" value={selectedDate ? `May ${selectedDate}, 2024` : ''} />
        <TextInput style={styles.input} placeholder="Time" />
        <TextInput style={styles.input} placeholder="Location" />
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>

      <Text style={styles.confirmDate}>{selectedDate ? `Selected Date: May ${selectedDate}, 2024` : 'No date selected'}</Text>

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
              onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  circleLarge: {
    position: 'absolute',
    top: -40,
    left: -40,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E0F7FA',
  },
  circleSmall: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
  },
  calendar: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectDateText: {
    fontSize: 16,
    marginBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dayOfWeek: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateContainer: {
    width: '14.28%',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    paddingVertical: 10,
  },
  selectedDate: {
    backgroundColor: '#00BFA5',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  notes: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  reminder: {
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#00C897',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  confirmDate: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
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

export default NextPage;
