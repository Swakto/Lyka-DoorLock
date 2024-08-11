import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

// Correct the server URL
const serverUrl = 'http://192.168.43.35:5000';

export default function App() {
  const sendUnlockCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/unlock`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error unlocking door:', error);
      Alert.alert('Error', 'Error unlocking door');
    }
  };

  const sendLockCommand = async () => {
    try {
      const response = await axios.post(`${serverUrl}/lock`);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Log the error to the console for debugging
      console.error('Error locking door:', error);
      Alert.alert('Error', 'Error locking door');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>Locks-a-Lot Doorlock</Text>
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={sendUnlockCommand}>
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sendLockCommand}>
          <Text style={styles.buttonText}>Lock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#FF9190',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFCAD4',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0B0742',
    fontSize: 18,
    fontWeight: '600',
  },
});
