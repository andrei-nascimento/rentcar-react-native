import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

export default function Login({navigation}) {
    return(
        <View style={styles.container}>
            <Header />
            <LoginForm />
            
            <View style={styles.conectar}>
                <View style={styles.connectText}>
                    <Text style={styles.connect}>
                        ou conecte-se com:
                    </Text>
                </View>

                <View style={styles.socialLogo}>

                    <TouchableOpacity style={styles.googleLogo}>
                        <Image style={styles.google} source={require('../../assets/imgs/search.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.faceLogo}>
                        <Image style={styles.face} source={require('../../assets/imgs/facebook.png')} />
                    </TouchableOpacity>

                </View>

                <View style={styles.cadastrarLink}>
                    <Text style={styles.cadastrar}>
                        Não possui uma conta?
                    </Text>
                    <Text style={styles.cadastrarConta} onPress={() => navigation.navigate('Cadastro')}>
                        Cadastre-se
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    conectar: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16,
    },
    connectText: {
        paddingTop: 2,
        paddingBottom: 28
    },
    connect: {
        color: '#7C7C8A',
        fontSize: 14
    },
    socialLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    googleLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#d9d9d9',
        marginRight: 14,
    },
    google: {
        width: 30,
        height: 30
    },
    faceLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#d9d9d9',
        marginLeft: 14,
    },
    face: {
        width: 36,
        height: 36,
    },
    cadastrarLink: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 28,
    },
    cadastrar: {
        color: '#7C7C8A',
        fontSize: 14
    },
    cadastrarConta: {
        color: '#17B3A6',
        fontSize: 14,
        marginLeft: 4
    },
})