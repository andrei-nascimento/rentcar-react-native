import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function LoginForm() {
    return(
        <View style={styles.container}>
            
            <View style={styles.tituloLogin}>
                <Text style={styles.titulo}>Faça login com seus dados</Text>
            </View>

            <View style={styles.inputEmail}>
                <TextInput style={styles.input} placeholder='E-mail'/>
            </View>

            <View style={styles.inputSenha}>
                <TextInput style={styles.input} placeholder='Senha'/>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name='eye' size={18} color='#696969'/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 48,
    },
    tituloLogin: {
        marginBottom: 28
    },
    titulo: {
        fontSize: 18
    },
    inputEmail: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 264,
        height: 46,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#d9d9d9'
    },
    inputSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 264,
        height: 46,
        marginBottom: 24,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#d9d9d9'
    },
    input: {
        fontSize: 16,
        backgroundColor: '#fff',
        marginLeft: 12
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
        marginEnd: 12,
    },
    buttonLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 264,
        height: 46,
        backgroundColor: '#17B3A6',
        borderRadius: 8,
    
    },
    button: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})