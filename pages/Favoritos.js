import * as React from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home() {
    return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <View style={styles.searchBar}>
                        <MaterialCommunityIcons name="magnify" color={'#CCDBD6'} size={40}/>
                        <Text style={styles.searchText}>Pesquisar</Text>
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <ScrollView>
                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                               <Image resizeMode='contain' style={styles.img} source={require('../assets/thunder_saga.png')}></Image>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.musicTitle}>
                                    Scylla
                                </Text>
                                <Text style={styles.musicP}>
                                    The Thunder Saga - 2:54
                                </Text>
                            </View>
                            <View style={styles.col3}>
                                <MaterialCommunityIcons name="cards-heart" color={'black'} size={40}/>
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                               <Image resizeMode='contain' style={styles.img} source={require('../assets/ithaca_saga.jpg')}></Image>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.musicTitle}>
                                    Would You Fall In Love With Me Again
                                </Text>
                                <Text style={styles.musicP}>
                                    The Ithaca Saga - 5:45
                                </Text>
                            </View>
                            <View style={styles.col3}>
                                <MaterialCommunityIcons name="cards-heart" color={'black'} size={40}/>
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                               <Image resizeMode='contain' style={styles.img} source={require('../assets/underworld_saga.png')}></Image>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.musicTitle}>
                                    The Underworld
                                </Text>
                                <Text style={styles.musicP}>
                                    The Underworld Saga - 4:16
                                </Text>
                            </View>
                            <View style={styles.col3}>
                                <MaterialCommunityIcons name="cards-heart" color={'black'} size={40}/>
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                               <Image resizeMode='contain' style={styles.img} source={require('../assets/vengeance_saga.jpg')}></Image>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.musicTitle}>
                                    Six Hundred Strike
                                </Text>
                                <Text style={styles.musicP}>
                                    The Vengeance Saga - 3:31
                                </Text>
                            </View>
                            <View style={styles.col3}>
                                <MaterialCommunityIcons name="cards-heart" color={'black'} size={40}/>
                            </View>
                        </View>

                        <View style={styles.textBox}>
                            <View style={styles.col1}>
                               <Image resizeMode='contain' style={styles.img} source={require('../assets/circe_saga.jpg')}></Image>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.musicTitle}>
                                    There Are Other Ways
                                </Text>
                                <Text style={styles.musicP}>
                                    The Circe Saga - 3:27
                                </Text>
                            </View>
                            <View style={styles.col3}>
                                <MaterialCommunityIcons name="cards-heart" color={'black'} size={40}/>
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
    titleContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 10,
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#81A69B',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 3,
        borderColor: '#CCDBD6'
    },
    searchText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#CCDBD6',
        marginLeft: 10,
    },
    col1: {
        width: 90,
    },
    col2: {
        width: 210,
    },
    col3: {
        width: 50,
        paddingRight: 10
    },
    musicTitle: {
        fontSize: 20,
        fontWeight: '800',
    },
    musicP: {
        fontSize: 13,
        fontWeight: '500',
    },
    img: {
        width: 80,
        height: 80,
        margin: 7,
        borderRadius: 10,
    }
});