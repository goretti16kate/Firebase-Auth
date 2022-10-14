import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }

        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, Password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Registered with", user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogIn = () => {
        auth
            .signInWithEmailAndPassword(email, Password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged In with ", user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height"
        >
            <View style={styles.inputContainers}>
                <TextInput placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input} />
                <TextInput placeholder='Password'
                    value={Password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry />

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
            {/* <Text>Login Screen</Text> */}
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainers: {
        width: '80%'
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'pink',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'pink',
        borderWidth: 2,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 16,
    },
    buttonOutlineText: {
        fontWeight: '500',
        fontSize: 16,
    },
})