import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Title(props) {
    return (
        <View style={styles.container}>
            <View style={styles.outside}>
                <View style={styles.inside} />
            </View>
            <Text style={styles.font}>{props.title}</Text>
        </View>
    )
}

const Radius = 500
const width = height = 20

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',        
        alignItems : 'center'
    },
    outside: {
        width: width,
        height: height,
        borderRadius: Radius,
        backgroundColor: '#00C6FB',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    inside: {
        width: width / 1.5,
        height: height / 1.5,
        borderRadius: Radius / 2,
        backgroundColor: '#005BEA'
    },
    font: {
        fontSize: 18,
        fontFamily: 'Prompt-Medium',
        marginLeft : '5%'
    }
})
