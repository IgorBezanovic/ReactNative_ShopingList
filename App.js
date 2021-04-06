import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import  GoalItem  from './components/GoalItem';
import GoalInput  from './components/GoalInput';

export default function App() {
  const [shoppingGoals, setShoppingGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setShoppingGoals(currentGoals => [
      ...shoppingGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setShoppingGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add shopping item" onPress={ () => setIsAddMode(true) }/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={ cancelGoalHandler }/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
        data={shoppingGoals} 
        renderItem={itemData => 
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value}
          />
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
