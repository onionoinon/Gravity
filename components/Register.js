import React, {useContext, useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import {auth} from './firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Register = ()=> {
    const navigation = useNavigation();

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace('Home')
            }
        })
        return unsubscribe
        }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp=()=> {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log["Registeres with:",user.email]
        })
        .catch(error => console.error(error.message));
    }

    const handleLogInNav=()=> {
        navigation.replace('Login')
    }

    {/*const handleLogin=()=> {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log["Logged in with:", user.email]
        })
        .catch(error => console.error(error.message));
    }*/}

    return(
        <KeyboardAvoidingView
        style={styles.container}
        >
            <Text style={styles.gravity}>GRAVITY.</Text>

            <View style={styles.InputContainer}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#605e6e"
                    value={email}
                    onChangeText={text => setEmail(text) }
                    style={styles.Input}
                    color="#fff"
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#605e6e" 
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.Input}
                    color="#fff"
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress ={handleSignUp}
                style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

                {/*<TouchableOpacity
                onPress ={handleSignUp}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
    </TouchableOpacity>*/}
                <View style={styles.registerContainer}>
                    <Text style={styles.registerdeftext}>Already have an account? </Text>
                    <TouchableOpacity onPress ={handleLogInNav} ><Text style={styles.registertext}>Log in</Text></TouchableOpacity>
                </View>
            
        </KeyboardAvoidingView>
    )
}

export default Register

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#02020a',

    },
    InputContainer:{
        width:'80%',        
    },
    Input:{
        paddingHorizontal:15,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 5,
        borderWidth:0.3,
        borderColor: '#605e6e',
        color:"fff",
    },
buttonContainer:{
    width:'40%',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 20,
},

button:{
    backgroundColor:'#7B2CBF',
    width:'100%',
    padding:15,
    borderRadius: 30,
    alignItems:'center',
},
buttonOutline:{
    backgroundColor:'#02020a',
    marginTop:5,
    borderColor:'#7B2CBF',
    borderWidth: 0.1,
},

buttonText:{
    color:'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText:{
    color:'#7B2CBF',
    fontWeight: '700',
    fontSize: 16,},

    gravity: {
        top: "28.5%",
        left: "28%",
        fontSize: 35,
        fontWeight:'300',
        letterSpacing: 6,
        color: "#fff",
        textAlign: "center",
        position: "absolute",
      },
      registerdeftext:{
        color:'#605e6e',
    fontWeight: '300',
    fontSize: 16,
      },
registertext:{
    color:'#7B2CBF',

},
registerContainer:{
    display:'flex',
    flexDirection:'row',
    marginTop:10,
    width:'100%',
    justifyContent:'center',

},
})