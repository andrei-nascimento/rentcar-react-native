import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function LoginForm() {
    return(
        <View style={styles.container}>
            
            <View style={styles.tituloLogin}>
                <Text style={styles.titulo}>Faça login com seus dados</Text>
            </View>

            <View style={styles.inputEmail}>
                <TextInput style={styles.input} placeholder='Insira seu e-mail'/>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name='eye' size={20}/>
                </TouchableOpacity>
            </View>

            <View style={styles.inputSenha}>
                <TextInput style={styles.input} placeholder='Insira sua senha'/>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name='eye' size={20}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 48,
    },
    tituloLogin: {
        
    },
    titulo: {
        fontSize: 16
    },
    inputSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 264,
        height: 46,
    },
    input: {
        fontSize: 20
    },
})