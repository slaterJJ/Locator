import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export const WithoutUser = ({userInput, handleChange, handlePress}) => (
  <View style={styles.container}>
    <View>
      <TextInput
        style={styles.formInput}
        onChangeText={handleChange}
        value={userInput} />
    </View>
    <View>
      <TouchableOpacity onPress={handlePress}
        style={styles.button} >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    height: 60,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#555555',
    width: 300,
    marginTop: 200
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    height: 50,
    marginTop: 100,
    width: 100
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
