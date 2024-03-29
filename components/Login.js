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

    {/*const handleSignUp=()=> {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log["Registeres with:",user.email]
        })
        .catch(error => console.error(error.message));
    }*/}

    const handleSignUpNav=()=> {
        navigation.replace('Register')
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
                    secureTextEntry
                    color="#fff"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress ={handleLogin}
                style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/*<TouchableOpacity
                onPress ={handleSignUp}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
    </TouchableOpacity>*/}
                <View style={styles.loginContainer}>
                    <Text style={styles.logindeftext}>Don't have an account? </Text>
                    <TouchableOpacity onPress ={handleSignUpNav} ><Text style={styles.registertext}>Register now</Text></TouchableOpacity>
                </View>
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
    },
buttonContainer:{
    width:'50%',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 20,

},

button:{
    backgroundColor:'#7B2CBF',
    width:'90%',
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
        fontSize: 35,
        fontWeight:'300',
        letterSpacing: 6,
        color: "#fff",
        textAlign: "center",
        marginBottom:15,
      },
      logindeftext:{
        color:'#605e6e',
    fontWeight: '300',
    fontSize: 15,
      },
registertext:{
    color:'#7B2CBF',

},
loginContainer:{
    display:'flex',
    flexDirection:'row',
    marginTop:10,
},
})