import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
const TaskItem = ({ id, text, isCompleted, toggleCompletion, onDelete }) => {
    return (
      <TouchableOpacity onPress={() => toggleCompletion(id, isCompleted)} style={styles.task}>
        <View style={[styles.checkBox, isCompleted && styles.checkedBox]} />
        <Text style={[styles.taskText, isCompleted && styles.completedTaskText]}>{text}</Text>
      </TouchableOpacity>
    );
  };
  
export default TaskItem;