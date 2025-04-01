import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundContent: 'center',
        backgroundColor: '#b8393',
        padding: 10,
    },
    titulo: {
        margin: 20,
        fontSize: 20,
        textAlign: 'center',
    }
});