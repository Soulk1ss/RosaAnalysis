import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import { Card, CheckBox } from 'react-native-elements';
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';

export default function topic_1_2({ navigation }) {
    const [choice, setChoice] = useState({
        choice1: false,
        choice2: false,
        choice3: false,
        choice4: false,
        score: 0
    })
    
    const toggle = (params) => {
        if (params == 1) {
            setChoice({
                choice1: true,
                choice2: false,
                choice3: false,
                choice4: false,
                score: 1
            })
        }
        else if (params == 2) {
            setChoice({
                choice1: false,
                choice2: true,
                choice3: false,
                choice4: false,
                score: 2
            })
        } else if (params == 3) {
            setChoice({
                choice1: false,
                choice2: false,
                choice3: true,
                choice4: false,
                score: 2
            })
        } else {
            setChoice({
                choice1: false,
                choice2: false,
                choice3: false,
                choice4: true,
                score: 3
            })
        }
    }
    const { choice1, choice2, choice3, choice4, score } = choice


    const answer = () => {
        if ((choice1 || choice2 || choice3 || choice4)) {
            navigation.navigate('Topic_1_3', {
                score: score
            })
        } else {
            Alert.alert('กรุณาเลือกคำตอบ')
        }
    }

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'ความสูงของเก้าอี้'} />
                    <Text style={styles.font}>เลือกตามลักษณะการนั่งเก้าอี้</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <LinearGradient colors={['#FFFFFF', '#DDDDDD']} style={[styles.linearGradient, styles.shadows]}>
                            <Image source={require('../../assets/stance/IMG_3028.png')} style={styles.image} resizeMode="center" />
                            <Text style={styles.text}>หัวเข่าทำมุม</Text>
                            <Text style={styles.text}>90 องศา</Text>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={choice1}
                                uncheckedColor="#00ACF7"
                                checkedColor="#00ACF7"
                                onPress={() => toggle(1)}
                                containerStyle={{ marginTop: 0 }}
                            />
                        </LinearGradient>
                    </View>
                    <View style={styles.cardBody}>
                        <LinearGradient colors={['#FFFFFF', '#DDDDDD']} style={[styles.linearGradient, styles.shadows]}>
                            <Image source={require('../../assets/stance/IMG_3029.png')} style={styles.image} resizeMode="center" />
                            <Text style={styles.text}>ต่ำเกิน-หัวเข่าทำมุม</Text>
                            <Text style={styles.text}>น้อยกว่า 90 องศา</Text>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={choice2}
                                uncheckedColor="#00ACF7"
                                checkedColor="#00ACF7"
                                onPress={() => toggle(2)}
                                containerStyle={{ marginTop: 0 }}
                            />
                        </LinearGradient>
                    </View>
                </View>
                <View style={[styles.body, { marginTop: '5%' }]}>
                    <View style={styles.cardBody}>
                        <LinearGradient colors={['#FFFFFF', '#DDDDDD']} style={[styles.linearGradient, styles.shadows]}>
                            <Image source={require('../../assets/stance/IMG_3030.png')} style={styles.image} resizeMode="center" />
                            <Text style={styles.text}>สูงเกิน-หัวเข่าทำมุม</Text>
                            <Text style={styles.text}>มากว่า 90 องศา</Text>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={choice3}
                                uncheckedColor="#00ACF7"
                                checkedColor="#00ACF7"
                                onPress={() => toggle(3)}
                                containerStyle={{ marginTop: 0 }}
                            />
                        </LinearGradient>
                    </View>
                    <View style={styles.cardBody}>
                        <LinearGradient colors={['#FFFFFF', '#DDDDDD']} style={[styles.linearGradient, styles.shadows]}>
                            <Image source={require('../../assets/stance/IMG_3031.png')} style={styles.image} resizeMode="center" />
                            <Text style={styles.text}>เท้าแตะไม่ถึงพื้น</Text>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={choice4}
                                uncheckedColor="#00ACF7"
                                checkedColor="#00ACF7"
                                onPress={() => toggle(4)}
                                containerStyle={{ marginTop: 0 }}
                            />
                        </LinearGradient>
                    </View>
                </View>
            </Card>
            <TouchableOpacity style={styles.btnNext} onPress={answer}>
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
        alignItems: 'center'
    },
    card: {
        width: '90%',
        height: '85%',
    },
    title: {
        width: '100%',
        height: '8%',
    },
    font: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        color: 'red',
        paddingTop: '5%',
    },
    body: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        marginTop: '10%'
    },
    image: {
        width: '100%',
        height: '50%'
    },
    cardBody: {
        width: '45%',
        height: '100%',
        alignItems: 'center',
        marginHorizontal: '2%'
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
