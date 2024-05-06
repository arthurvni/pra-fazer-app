import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseApp } from '../../services/firebaseConfig';
import React, {useState} from 'react'
import styles from './style'

export default function Login({ navigation }) {
    let errorLogin = null
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const logarUsuario = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Tabs')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert
            });

    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo_pra_fazer.png')} />

            {errorLogin != null && (
                <Text style={styles.alert}>{errorLogin}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                onChangeText={setpassword}
            />

            <TouchableOpacity onPress={logarUsuario} style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCreate} onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.buttonCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}