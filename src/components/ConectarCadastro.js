import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function ConectarCadastro() {
    return (
        <View style={styles.container}>
            
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

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 32,
    },
    connectText: {
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
})