import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CompletedTask = ({ text, isCompleted }) => {
    return (
      <View style={[styles.task, isCompleted && styles.completedTask]}>
        <View style={[styles.taskIndicator, isCompleted && styles.completedTaskIndicator]}></View>
        <Text style={[styles.taskText, isCompleted && styles.completedTaskText]}>{text}</Text>
      </View>
    );
  };
  
const Task = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderradius: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
itemleft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square:{
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderradius: 5,
    marginRight: 15,
},
itemText:{
    maxWidth: '80%',
},
circular:{
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
},
task: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  completedTask: {
    opacity: 0.5, // Adjusted opacity for completed tasks
  },
  taskIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#55BCF6',
    marginRight: 15,
  },
  completedTaskIndicator: {
    backgroundColor: 'green', // You can use a different color for completed tasks
  },
  taskText: {
    fontWeight: 'bold',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray', // You can use a different color for completed task text
  },
});

export default Task;
