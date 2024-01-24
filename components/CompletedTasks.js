import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Task from './Task';

const CompletedTasks = ({ tasks }) => {
  return (
    <View>
      <Text>Completed Tasks</Text>
      <ScrollView>
        {tasks.map((task, index) => (
          <Task key={index} text={task.text} isCompleted={task.isCompleted} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CompletedTasks;
