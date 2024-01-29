import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Image} from 'react-native'
import { auth } from './firebase'
import { useNavigation } from '@react-navigation/native'

const Settings = () =>{
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
    <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profile}>
                <TouchableOpacity
                onPress={()=>{
                    //handleonPress
                }}>
                    <View style={styles.profileAvatarWrapper}>
                    <Image source={require('./pfp2.png')} style={styles.profilepicture} />
                    </View>
                </TouchableOpacity>
             <Text style={styles.email}>Email:{auth.currentUser?.email}</Text>
            </View>
            <TouchableOpacity
             onPress={handleSignOut}
             style={styles.button}
            >
        <Text style={styles.buttonText}>Sign out</Text>
     </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    
)
}

export default Settings;

const styles= StyleSheet.create({
    safeAreaViewContainer:{
        flex:1,
    justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#02020a',
    },

    profile:{
        padding: 24,
        alignItems:'center',
    },
profileAvatarWrapper:{
    height:100,
    width:100,
    alignItems:'center',
    marginBottom:10,
},
profileAvatar:{
    height:60,

},

container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    email:{
        color:'#fff',
    },
   
button:{
    backgroundColor:'#D55FFF',
    width:'70%',
    padding:10,
    borderRadius: 10,
    alignItems:'center',
},

buttonText:{
    color:'white',
    fontWeight: '300',
    fontSize: 16,
},

profilepicture:{
    width: 100,
    height: 100,
}

})