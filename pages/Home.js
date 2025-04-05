import * as React from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home() {
    return (
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <ScrollView>
                        <Text style={styles.titulo}>
                            Epic: The Musical
                        </Text>
                        <View style={styles.row}>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/troy_saga.jpg')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Troy Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/cyclops_saga.png')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Cyclops Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                        </View>

                        <View style={styles.row}>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/ocean_saga.jpg')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Ocean Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/circe_saga.jpg')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Circe Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                        </View>

                        <View style={styles.row}>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/underworld_saga.png')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Underworld Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/thunder_saga.png')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Thunder Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                        </View>

                        <View style={styles.row}>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/wisdom_saga.jpg')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Wisdom Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/vengeance_saga.jpg')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Vengeance Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                        </View>

                        <View style={styles.row}>

                            <View style={styles.textBox}>
                                <Image resizeMode='contain' style={styles.img} source={require('../assets/ithaca_saga.jpg')}></Image>
                                <Text style={styles.musicTitle}>
                                    The Ithaca Saga
                                </Text>
                                <View style={styles.icons}>
                                    <MaterialCommunityIcons name="play-circle-outline" color={'#0B0C0D'} size={40}/>
                                    <MaterialCommunityIcons name="dots-vertical-circle-outline" color={'#0B0C0D'} size={40}/>
                                </View>
                            </View>

                        </View>
                        
                    </ScrollView>
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
    mainContainer: {
        flex: 1,
        marginTop: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textBox: {
        justifyContent: 'center',
        backgroundColor: '#81A69B',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
        width: 170,
        margin: 10,
    },
    titulo: {
        margin: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#CCDBD6'
    },
    musicTitle: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center'
    },
    img: {
        width: 140,
        height: 140,
        marginTop: 15,
        borderRadius: 10,
    },
    icons: {
        flexDirection: 'row',
        marginBottom: 10,
    }
});