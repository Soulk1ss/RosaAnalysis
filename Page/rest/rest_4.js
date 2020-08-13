import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';

export default function rest_4({navigation}) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'หลังส่วนบน'} />
                </View>
                <View style={styles.body}>
                    <View style={{ width: '45%' }}>
                        <Image source={require('../../assets/image/rest_5_1.png')} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={{ width: '55%' }}>
                        <Text style={styles.font}>ประสานมือแล้วเหยียดแขนขึ้นไปเหนือศีรษะ ค้างไว้ 10 วินาที</Text>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'หลังส่วนล่าง'} />
                </View>
                <View style={styles.body}>
                    <View style={{ width: '45%' }}>
                        <Image source={require('../../assets/image/rest_6_1.png')} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={{ width: '55%' }}>
                        <Text style={styles.font}>วางมือด้านหลังบริเวณสะโพกจากนั้น เอนตัวไปข้างหลัง ค้างไว้ 2 วินาที ทำซ้ำ  5 ครั้ง</Text>
                    </View>
                </View>
            </Card>
            <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('Rest_5')}>
                <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.btnlinearGradient}>
                    <Text style={[styles.fontBtn, { color: '#FFFFFF' }]}>ถัดไป</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    card: {
        width: '90%',
        height: '40%',
    },
    title: {
        width: '100%',
        height: '8%',
    },
    font: {
        fontSize: 16,
        fontFamily: 'Prompt-Regular',
        paddingTop: '5%',
    },
    image: {
        width : '90%',
        height : '90%'
    },
    body: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        flexDirection :'row',
        marginTop : '2%'
    },
    cardBody: {
        width: '100%',
        height: '100%',
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
