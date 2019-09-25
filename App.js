import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([])
  const [inputVisible, setInputVisible] = useState(false)
  const [isCourseGoals, setIsCourseGoals] = useState(false)

  const cancelInputHandler = () => {
    setInputVisible(false)
  }

  const addGoalHandler = newGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: newGoal }
    ])
    setIsCourseGoals(true)
    setInputVisible(false)
  }

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      currentGoals.map(goal => {
        console.log(`goalId: ${goalId}`)
        console.log(`goal.id: ${goal.id}`)
      })
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  useEffect(() => {
    console.log(
      courseGoals.length > 0 ?
        'There are goals\n'
       :
        'There are no goals\n'
      )
    courseGoals.map(goal => console.log(goal.value))
  }, [courseGoals])

  const addButton = (
    <Button
      title='Enter Input'
      onPress={() => {
        setInputVisible(true)
      }}
    />
  )

  const noInputContainer = (
    <View style={styles.noInputContainer}>
      <GoalInput
        visible={inputVisible}
        onCancel={cancelInputHandler}
        onAddGoal={addGoalHandler}
      />
      <Text style={{fontSize: 20, paddingBottom: 20}}>No input yet</Text>
      {addButton}
    </View>
  )

  const inputContainer = (
    <View style={styles.inputContainer}>
      <GoalInput
        visible={inputVisible}
        onCancel={cancelInputHandler}
        onAddGoal={addGoalHandler}
      />
      {addButton}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  )

  return (
    courseGoals.length === 0 ? noInputContainer : inputContainer
  )
}

const styles = StyleSheet.create({
  noInputContainer: {
    flex: 1,
    paddingTop: 350,
    alignItems: 'center'
  },
  inputContainer: {
    padding: 50,
  }
})

export default App
