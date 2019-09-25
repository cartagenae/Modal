import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

const GoalItem = props => {
  console.log(`props.id: ${props.id}`)
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#ccc',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10
  }
})

export default GoalItem
