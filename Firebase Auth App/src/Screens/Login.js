import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigation } from '@react-navigation/native'



export default function Login() {
    const navigation = useNavigation()
    useEffect(() => {
        auth.onAuthStateChanged(user =>  {
            if(user){
                navigation.navigate('HomeScreen')
            }
        })
    }, [])
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = () => {
        auth.createUserWithEmailAndPassword(email, password).then(users => {
            const user = users.user
            console.log("Kullanıcı" + user.email)
        })
            .catch((error) => alert(error.message))
    }
    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(users => {
            const user = users.user
            console.log("Kullanıcı" + user.email)
        })
            .catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.Container}>
            <View style={styles.İnputContainer}>
                <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} placeholder='Set E Mail'></TextInput>
                <TextInput value={password} onChangeText={pass => setPassword(pass)} secureTextEntry style={styles.input} placeholder='Set Password'></TextInput>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.Button}>
                    <Text style={styles.ButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignup} style={[styles.Button, styles.outlineButton]}>
                    <Text style={styles.OutlineButtonText} >Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    İnputContainer: {
        width: "80%"
    },
    input: {
        borderWidth: 4,
        borderColor: "lightgray",
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 10,
        borderRadius: 10,
        fontSize:20
    },


    ButtonContainer: {
        width: "80%",
        marginTop: 40,

    },
    Button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 10

    },
    ButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    outlineButton: {
        backgroundColor: 'white',
        marginTop: 5,
        borderWidth: 2,
        borderColor: "lightgray"

    },
    OutlineButtonText: {
        color: "#0782F9",
        fontSize: 20
    }




})