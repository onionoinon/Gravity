import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Keyboard,
} from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native'


const MainPage = () => {
  const [task, setTask] = useState('');
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    const newTask = { id: Date.now(), text: task, isCompleted: false };

    if (!completedTasks.some((task) => task.id === newTask.id)) {
      setIncompleteTasks([...incompleteTasks, newTask]);
    } else {
      setCompletedTasks([...completedTasks, newTask]);
    }

    setTask('');
  };

  const toggleCompletion = (taskId) => {
    setIncompleteTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === taskId ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deleteTask = (taskId) => {
    // Filter out the task with the specified ID
    const updatedIncompleteTasks = incompleteTasks.filter((task) => task.id !== taskId);
    const updatedCompletedTasks = completedTasks.filter((task) => task.id !== taskId);

    setIncompleteTasks(updatedIncompleteTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  const navigation = useNavigation();

  const handleSettingsNav =()=>{
    navigation.replace('Settings')
}

  return (
    <View style={styles.container}>    
       <View style={styles.tasksWrapper}>
        <View style={styles.headerWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <TouchableOpacity
        style={styles.settingsButton}
        onPress={handleSettingsNav}
        >
        <Image source={require('./settings.png')} style={styles.logo1} />
       </TouchableOpacity>  
       </View>
       
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
        style={styles.ScheduleMyDayButton}
        onPress={() => handleAddTask()}
        >
        <Text style={styles.scheduleMyDayButtonText}>Schedule My Day</Text>
       </TouchableOpacity>
       <TouchableOpacity
        style={styles.AIScheduleButton}
        onPress={() => handleAddTask()}
        >
        <Text style={styles.AIScheduleButtonText}>AI Scheduler </Text>
       </TouchableOpacity>
       </View>

        <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.items}>
          {incompleteTasks.map((item) => (
            <TouchableOpacity
            key={item.id}
            onPress={() => toggleCompletion(item.id)}
            onDelete={() => deleteTask(item.id)} 
            >
              <View style={styles.task}>
                <View style={[styles.checkBox, item.isCompleted && styles.checkedBox]} />
                <Text style={[styles.taskText, item.isCompleted && styles.completedTaskText]}>
                  {item.text}
                </Text>
                <TouchableOpacity onPress={() => handleLogoClick(item.id)} style={[styles.taskContainer, styles.buttonContainer]}
>
                <Image source={require('./list2.png')} style={styles.logo1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Image source={require('./trash.png')} style={styles.logo2} />
      </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
export default MainPage;
