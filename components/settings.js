import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { auth } from './firebase'
import { useNavigation } from '@react-navigation/native'

const settings = () =>{
    const navigation = useNavigation()
    const handleSignOut = () => {
    auth
    .signOut()
    .then(()=>{
        navigation.replace('Login')
    })
    .catch(error=>alert(error.message))
}

return(
    <View style={styles.container}>
    <Text>Email:{auth.currentUser?.email}</Text>
    <TouchableOpacity
     onPress={handleSignOut}
     style={styles.button}
     >
        <Text style={styles.buttonText}>Sign out</Text>
     </TouchableOpacity>
     </View>
)
}

export default settings;

const styles= StyleSheet.create({
container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
button:{
    backgroundColor:'blue',
    width:'100%',
    padding:15,
    borderRadius: 10,
    alignItems:'center',
},

buttonText:{
    color:'white',
    fontWeight: '700',
    fontSize: 16,
},

})