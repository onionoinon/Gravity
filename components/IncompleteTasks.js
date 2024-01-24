import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Task from './Task';

const IncompleteTasks = ({ tasks, onCompleteTask }) => {
  return (
    <View>
      <Text>Today's Incomplete Tasks</Text>
      <ScrollView>
        {IncompleteTasks.map((task, index) => (
          <TouchableOpacity key={index} onPress={() => onCompleteTask(index)}>
            <Task text={task.text} isCompleted={task.isCompleted} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default IncompleteTasks;
