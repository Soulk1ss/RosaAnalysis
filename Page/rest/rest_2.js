import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';

export default function rest_2({ navigation }) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'คอ'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <View style={{ width: '45%' }}>
                            <Image source={require('../../assets/image/rest_1_1.png')} style={styles.image} resizeMode='contain' />
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.font}>เอียงศีรษะไปด้านข้างค้างไว้ 5-10 วินาที</Text>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <View style={{ width: '45%' }}>
                            <Image source={require('../../assets/image/rest_1_2.png')} style={styles.image} resizeMode='contain' />
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.font}>ก้มและเงยศีรษะค้างไว้ท่าละ 5-10 วินาที</Text>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <View style={{ width: '45%' }}>
                            <Image source={require('../../assets/image/rest_1_3.png')} style={styles.image} resizeMode='contain' />
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.font}>หันศีรษะไปทางขวาหรือซ้ายทีละข้าง โดยค้างไว้ข้างละ 5-10 วินาที</Text>
                        </View>
                    </View>
                </View>
            </Card>
            <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('Rest_3')}>
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
        height: '75%',
    },
    title: {
        width: '100%',
        height: '8%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    font: {
        fontSize: 14,
        fontFamily: 'Prompt-Regular',
        paddingTop: '5%',
    },
    body: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        marginTop: '2%'
    },
    cardBody: {
        width: '100%',
        height: '33%',
        alignItems: 'center',
        marginHorizontal: '2%',
        flexDirection: 'row',
        marginTop : '2%'
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
