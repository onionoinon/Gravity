import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#02020a',
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
      color:"white",
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
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft:'5%',
      paddingRight:'5%',

    },
  
    input: {
      flex: 1,
      padding: 15,
      width: 250,
      borderRadius: 10,
      borderWidth: 1,
      borderColor:"#8764A5",
      color:'#fff',
    },

    textInput: {
      color: '#fff',
     },
  
    addWrapper: {
      width: 60,
      height: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    addText: {
    },
  
    task: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#261F33',
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
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
  
    taskText: {
      fontWeight: 'bold',
      width: '70%',
      marginRight: 10,
      color:'#fff',
    },
  
    completedTaskText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
  
    checkBox: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: '#fff',
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
      backgroundColor: '#7B2CBF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'space-around',
    },
  
    scheduleMyDayButtonText: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
  
    AIScheduleButton: {
      height: 40,
      width: '45%', 
      backgroundColor: '#7B2CFB',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'space-between',
    },
  
    AIScheduleButtonText: {
      color: 'white',
      fontSize: 15,
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
    },

    addButton:{
      height: 30,
      width: 40, 
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent:'space-around',
    }

    
  });
  

export default styles;
