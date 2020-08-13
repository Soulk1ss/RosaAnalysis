import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function step5({navigation}) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'พื้นที่ว่างใต้โต๊ะ'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <Image source={require('../../assets/image/step5.png')} style={styles.image} resizeMode='contain'/>
                    </View>
                    <View style = {[styles.cardBody, {height: '30%', marginTop: '5%'}]}>
                        <Text style = {styles.font}>1. ควรมีพื้นที่ว่างใต้โต๊ะมากพอที่จะขยับขา</Text>                        
                    </View>
                </View>
            </Card>
            <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('Rest_1')}>
                <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.btnlinearGradient}>
                    <Text style={[styles.fontBtn, { color: '#FFFFFF' }]}>ข้อแนะนำการพักขณะทำงาน</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'space-around'
    },
    card: {
        width: '90%',
        height: '50%',
    },
    title: {
        width: '100%',
        height: '8%',
    },
    font: {
        fontSize: hp('2%'),
        fontFamily: 'Prompt-Regular',        
        paddingTop: '5%',
    },
    body: {
        width: '100%',
        height: '90%',
        marginTop: '3%',
        alignItems: 'center',
        
    },
    image: {
        width: '100%',
        height: '100%'
    },
    cardBody: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        marginHorizontal: '2%',        
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        zIndex: -99,
        justifyContent: 'center'
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    text: {
        fontFamily: 'Prompt-Regular',
        fontSize: 14,
    },
    btnlinearGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnNext: {
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: '2%'
    },
    fontBtn: {
        fontSize: 18,
        fontFamily: 'Prompt-SemiBold'
    }
})
