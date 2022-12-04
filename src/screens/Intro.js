import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Intro({navigation}) {

    return (     
        <LinearGradient 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
                colors={['#19779B','#17B3A6']}>

            <View style={styles.logomarca}>
                <Image style={styles.logo}
                    source={require('../../assets/imgs/volante-branco.png')} />
                <Text style={styles.title} onPress={() => navigation.navigate('Login')}>
                    Rentcar
                </Text>
            </View>

            <StatusBar style="auto" />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    logomarca: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Nunito_900Black_Italic',
        color: '#fff',
    },
    logo: {
        width: 32,
        height: 32,
        marginRight: 6
    }
});
