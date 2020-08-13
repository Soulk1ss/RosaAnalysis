import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import { CategoryContext } from '../../src/context/Context_text'
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function rest_6({ navigation }) {
    const Context = useContext(CategoryContext)
    const StartPage = CommonActions.reset({
        index: 0,
        routes: [
            {
                name: 'Start',
            },
        ],
    })

    const CategoryPage = CommonActions.reset({
        index: 0,
        routes: [
            {
                name: 'SelectTopic',
            },
        ],
    })
    
    const removeData = () => {
        console.log(Context.sendEmail)
        if (Context.sendEmail) {
            AsyncStorage.removeItem('data')
                .then(() => {
                    Context.removeData()
                    navigation.dispatch(StartPage)
                })
        } else {
            navigation.dispatch(CategoryPage)
        }
    }

    return (
        <CategoryContext.Consumer>
            {
                (data) =>
                    <View style={styles.container}>
                        <Card containerStyle={styles.card}>
                            <View style={styles.title}>
                                <Title title={'ปลายแขน'} />
                            </View>
                            <View style={[styles.body, { justifyContent: 'space-around' }]}>
                                <View style={{ flexDirection: 'row', height: '40%', width: '100%' }}>
                                    <View style={{ width: '40%' }}>
                                        <Image source={require('../../assets/image/rest_4_1.png')} style={styles.image} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '60%' }}>
                                        <Text style={styles.font}>เหยียดแขนตรง ใช้มืออีกข้างจับปลายนิ้วมือแล้วกดลง ค้างไว้ 10 วินาที</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', height: '40%' }}>
                                    <View style={{ width: '40%' }}>
                                        <Image source={require('../../assets/image/rest_4_1_2.png')} style={styles.image} resizeMode='contain' />
                                    </View>
                                    <View style={{ width: '60%' }}>
                                        <Text style={styles.font}>เหยียดแขนตรงกระกดข้อมือขึ้นแล้วใช้มืออีกข้างดึงปลายนิ้ว ค้างไว้ 10 วินาที</Text>
                                    </View>
                                </View>

                            </View>
                        </Card>
                        <Card containerStyle={[styles.card, { height: '35%' }]}>
                            <View style={styles.title}>
                                <Title title={'การบริหารตา'} />
                            </View>
                            <View style={[styles.body, { flexDirection: 'row' }]}>
                                <View style={{ width: '45%' }}>
                                    <Image source={require('../../assets/image/rest_7_1.png')} style={styles.image} resizeMode='contain' />
                                </View>
                                <View style={{ width: '55%' }}>
                                    <Text style={styles.font}>กรอกตาไปด้านซ้าย-ขวา, ขึ้น-ลง</Text>
                                </View>
                            </View>
                        </Card>
                        <TouchableOpacity style={styles.btnNext} onPress={removeData}>
                            <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.btnlinearGradient}>
                                <Text style={[styles.fontBtn, { color: '#FFFFFF' }]}>{data.sendEmail ? 'สิ้นสุดการประเมิน' : 'กลับหน้าหลัก'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
            }
        </CategoryContext.Consumer>

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
        height: '45%',
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
        width: '90%',
        height: '90%'
    },
    body: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        marginTop: '2%'
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
