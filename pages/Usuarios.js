import * as React from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home() {
    return (
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Image resizeMode='contain' style={styles.img} source={require('../assets/user.png')}></Image>
                    <Text style={styles.titulo}>
                        Bem vindo, Usuário!
                    </Text>
                    <View style={styles.textBox}>
                        <MaterialCommunityIcons name="account" color={'#0B0C0D'} size={30}/>
                        <Text style={styles.p}>
                            Conta
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <MaterialCommunityIcons name="cog" color={'#0B0C0D'} size={30}/>
                        <Text style={styles.p}>
                            Configurações
                        </Text>
                    </View>
                    <View style={styles.textBox}>
                        <MaterialCommunityIcons name="alert-circle-outline" color={'#0B0C0D'} size={30}/>
                        <Text style={styles.p}>
                            Sobre
                        </Text>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundContent: 'center',
        backgroundColor: '#0B0C0D',
        padding: 10,
    },
    titleContainer: {
        flex: 2,
    },
    mainContainer: {
        flex: 10,
        alignItems: 'center'
    },
    textBox: {
        backgroundColor: '#81A69B',
        borderRadius: 5,
        padding: 4,
        width: 300,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo: {
        margin: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#CCDBD6'
    },
    p: {
        marginVertical: 10,
        marginHorizontal: 4,
        fontSize: 20,
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    img: {
        width: 230,
        height: 230,
        marginVertical: 10,
        borderWidth: 4,
        borderColor: '#CCDBD6',
        borderRadius: 250,
    }
});