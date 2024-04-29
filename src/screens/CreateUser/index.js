import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function CreateUser() {  
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    function validate(){
        if (nome == ""){
        setErrorCreateUser("Informe o seu nome")
        } else if (email == ""){
            setErrorCreateUser ("Informe a seu e-mail")
        } else if (senha == ""){
            setErrorCreateUser ("Informe a sua senha")
        } else {
            setErrorCreateUser (null)
        }

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
                placeholder='Senha'
                value={senha} 
                onChangeText={setSenha}
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