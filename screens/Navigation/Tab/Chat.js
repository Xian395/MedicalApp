import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const clients = [
  { id: '1', name: 'Client A', messages: [
      { id: '1', sender: 'doctor', text: 'Hi, how can I help you today?' },
      { id: '2', sender: 'client', text: 'I have a question about my prescription.' },
      { id: '3', sender: 'doctor', text: 'Sure, what do you need to know?' },
      { id: '4', sender: 'client', text: 'Can I take this medicine twice a day?' },
      { id: '5', sender: 'doctor', text: 'Yes, that’s fine. Just follow the prescribed dosage.' },
    ]
  },
  { id: '2', name: 'Client B', messages: [
      { id: '1', sender: 'doctor', text: 'Hello, how are you feeling?' },
      { id: '2', sender: 'client', text: 'I am feeling better, thank you.' },
    ]
  },
  // Add more clients as needed
];

const Chat = ({ navigation }) => {
  const [selectedClient, setSelectedClient] = useState(clients[0]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messenger</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.sidebar}>
          <FlatList
            data={clients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => setSelectedClient(item)} 
                style={[styles.clientButton, item.id === selectedClient.id && styles.selectedClientButton]}
              >
                <Text style={styles.clientName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.chatWindow}>
          <View style={styles.chatHeader}>
            <Image
              style={styles.headerIcon}
              source={require('../../../assets/chat.png')}
            />
            <Text style={styles.chatHeaderText}>Chat with {selectedClient.name}</Text>
          </View>
          <FlatList
            data={selectedClient.messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.messageContainer, item.sender === 'client' ? styles.clientMessage : styles.doctorMessage]}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
            style={styles.messagesList}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
            />
            <TouchableOpacity style={styles.sendButton}>
              <Image
                style={styles.sendIcon}
                source={require('../../../assets/chat.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const sidebarWidth = width * 0.25;
const headerHeight = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: headerHeight,
    backgroundColor: '#00796B',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginVertical: 20
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: sidebarWidth,
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
  },
  clientButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  selectedClientButton: {
    backgroundColor: '#E0F7FA',
  },
  clientName: {
    fontSize: 16,
    color: '#00796B',
  },
  chatWindow: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    width: 40,
    height: 40,
  },
  chatHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  messagesList: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '75%',
  },
  doctorMessage: {
    backgroundColor: '#E0F7FA',
    alignSelf: 'flex-start',
  },
  clientMessage: {
    backgroundColor: '#B2EBF2',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00BFA5',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  sendButton: {
    padding: 5,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
});

export default Chat;
