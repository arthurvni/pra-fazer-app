import React, { useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default function CreateUser({navigation}) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    function validate() {
        if (nome == "") {
            setErrorCreateUser("Informe o seu nome")
        } else if (email == "") {
            setErrorCreateUser("Informe a seu e-mail")
        } else if (password == "") {
            setErrorCreateUser("Informe a sua senha")
        } else {
            setErrorCreateUser(null)
            CreateUser();
        }

    }


    const CreateUser = () => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Tabs')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorCreateUser(errorMessage);
                alert(error.message)
            });
    }

    return (
        <View style={styles.container}>
            {errorCreateUser != null && (
                <Text style={styles.alert}>{errorCreateUser}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='password'
                value={password}
                onChangeText={setpassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validate}

            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    )
}