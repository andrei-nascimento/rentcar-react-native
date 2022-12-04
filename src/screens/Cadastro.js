import { Image, StyleSheet, Text, View } from 'react-native';
import CadastroForm from '../components/CadastroForm';
import ConectarCadastro from '../components/ConectarCadastro';
import HeaderCadastro from '../components/HeaderCadastro';


export default function Cadastro() {
    return (
        <View style={styles.container}>
            <HeaderCadastro />
            <CadastroForm />
            <ConectarCadastro />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})