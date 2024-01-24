import React, {useContext, useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import {auth} from './firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Login = ()=> {
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

    const handleLogin=()=> {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log["Logged in with:", user.email]
        })
        .catch(error => console.error(error.message));
    }

    return(
        <KeyboardAvoidingView
        style={styles.container}
        >
            <View style={styles.InputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text) }
                    style={styles.Input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.Input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress ={handleLogin}
                style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress ={handleSignUp}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainer:{
        width:'80%',
    },
    Input:{
        backgroundColor:"#fff",
        paddingHorizontal:15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
buttonContainer:{
    width:'60%',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:40,
},

button:{
    backgroundColor:'blue',
    width:'100%',
    padding:15,
    borderRadius: 10,
    alignItems:'center',
},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor:'blue',
    borderWidth: 2,
},

buttonText:{
    color:'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText:{
    color:'blue',
    fontWeight: '700',
    fontSize: 16,},
})