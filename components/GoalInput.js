import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Modal,
  Button,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {
  const [userInput, setUserInput] = useState('')

  const userInputHandler = text => {
    setUserInput(text)
  }

  const addGoalHandler = () => {
    console.log(`userInput.length: ${userInput.length}\n`)
    if(userInput.trim() === '') {
      Alert.alert(
        'No Input',
        'Please enter a valid input',
        [
          { text: 'OK' }
        ]
      )
      setUserInput('')
    }
    else {
      props.onAddGoal(userInput)
      setUserInput('')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <Modal
        visible={props.visible}
        animationType='slide'
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter your goal'
            value={userInput}
            onChangeText={userInputHandler}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Add Goal'
            onPress={addGoalHandler}
          />
          <Button
            title='Close Modal'
            onPress={props.onCancel}
          />
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    width: 'auto',
    alignItems: 'center'
  },
  inputContainer: {
    paddingTop: 300,
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    textAlign: 'center'
  }
})

export default GoalInput
