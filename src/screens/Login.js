import { Image, StyleSheet, Text, View } from 'react-native';
import Conectar from '../components/Conectar';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

export default function Login() {
    return(
        <View style={styles.container}>
            <Header />
            <LoginForm />
            <Conectar />
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})