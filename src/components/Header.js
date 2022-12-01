import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header() {
    return(
        <View style={styles.container}>
            
            <View style={styles.logomarca}>
                <Image style={styles.logo}
                    source={require('../../assets/imgs/volante-verde.png')} />
                <Text style={styles.title}>Rentcar</Text>
            </View>
            
            <View style={styles.carLogin}>
                <Image style={styles.car1}
                    source={require('../../assets/imgs/car1.png')} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        paddingTop: 64,
        paddingBottom: 12
    },
    logomarca: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Nunito_900Black_Italic',
        color: '#17B3A6',
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
    car1: {
        width: 160,
        height: 105,
    }
});