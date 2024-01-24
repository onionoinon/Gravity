import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
  
    tasksWrapper: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 20,
      padding: 10,
    },
  
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 0,
    },
  
    items: {
      marginTop: 20,
      flex: 1,
      marginBottom: 80,
    },
  
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
    },
  
    input: {
      flex: 1,
      padding: 15,
      backgroundColor: "#FFF",
      width: 250,
      borderRadius: 60,
      borderColor: "#C0C0C0",
      borderWidth: 1,
    },
  
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "#C0C0C0",
      borderWidth: 1,
    },
  
    addText: {
    },
  
    task: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#C0C0C0',
      paddingRight: 30,
      justifyContent:'space-between',
    },
  
    taskIndicator: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#55BCF6',
      marginRight: 15,
    },
  
    completedTaskIndicator: {
      backgroundColor: 'green',
    },
  
    taskText: {
      fontWeight: 'bold',
      width: '70%',
      marginRight: 10
    },
  
    completedTaskText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
  
    checkBox: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: '#000',
      marginRight: 10,
    },
  
    checkedBox: {
      backgroundColor: 'gray',
      borderColor:'gray',
    },
  
    logo1: {
      width: 20,
      height: 20,
      marginRight: 10,    
    },
  
    logo2: {
      width: 20,
      height: 20,
    },
  
    buttonContainer: {
      padding: 5,
      backgroundColor: '#fff',
      justifyContent:'space-between',
  
    },
  
    buttonWrapper: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent:'space-around',
    },
  
    ScheduleMyDayButton: {
      height: 40,
      width: '50%', 
      backgroundColor: '#55BCF6',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'space-around',
    },
  
    scheduleMyDayButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    AIScheduleButton: {
      height: 40,
      width: '45%', 
      backgroundColor: '#55BCF6',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'space-between',
    },
  
    AIScheduleButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    logoContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-between'
    },

    settingsButton:{
      height: 40,
      width: '50%', 
      backgroundColor: '#55BCF6',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'space-around',
      width:'20%',
    },
    headerWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
    }

    
  });
  

export default styles;
