import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-web';
import { Feather } from '@expo/vector-icons';

export default function HeaderCadastro() {
    return(
        <View style={styles.container}>

            <View style={styles.logomarca}>
                <Image style={styles.logo}
                    source={require('../../assets/imgs/volante-azul.png')} />
                <Text style={styles.title}>Rentcar</Text>
            </View>
            
            <View style={styles.carLogin}>
                <Image style={styles.car2}
                    source={require('../../assets/imgs/car2.png')} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        paddingTop: 80,
    },
    logomarca: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Nunito_900Black_Italic',
        color: '#19779B',
    },
    logo: {
        width: 32,
        height: 32,
        marginRight: 6
    },
    carLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    car2: {
        width: 160,
        height: 105,
    },
    arrowBack: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 16,
        marginLeft: 20
    },
});