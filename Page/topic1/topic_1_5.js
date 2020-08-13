import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Title from '../../src/component/title'
import { Card, CheckBox } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import { CategoryContext } from '../../src/context/Context_text'

export default function topic_1_3({ route, navigation }) {
    const [choice, setChoice] = useState({
        yes: false,
        no: false,
        point: ''
    })

    const { score } = route.params;


    const { yes, no, point } = choice

    return (
        <CategoryContext.Consumer>
            {
                (data) => <View style={styles.container}>
                    <View style={styles.title}>
                        <Title title={'ความลึกของเบาะเก้าอี้'} />
                    </View>
                    <View style={styles.body}>
                        <Card containerStyle={[styles.card, { height: '40%' }]}>
                            <Text style={styles.text}>ไม่สามารถปรับความลึกของเบาะเก้าอี้ได้</Text>
                            <View style={styles.bodyCard}>
                                <View style={[styles.bodyCheckbox, { width: '100%' }]}>
                                    <View style={styles.groupCheckbox}>
                                        <CheckBox
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            uncheckedColor="#00ACF7"
                                            checkedColor="#00ACF7"
                                            checked={yes}
                                            onPress={() => setChoice({ yes: true, no: false, point: 1 })}
                                            containerStyle={{ marginRight: 0 }}
                                        />
                                        <Text style={styles.text}>ใช่</Text>
                                    </View>
                                    <View style={styles.groupCheckbox}>
                                        <CheckBox
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            uncheckedColor="#00ACF7"
                                            checkedColor="#00ACF7"
                                            checked={no}
                                            onPress={() => setChoice({ yes: false, no: true, point: 0 })}
                                            containerStyle={{ marginRight: 0 }}
                                        />
                                        <Text style={styles.text}>ไม่ใช่</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </View>
                    <TouchableOpacity style={styles.btnNext} onPress={() => data.setScore_a2(score, point) ? navigation.navigate('Topic_1') : Alert.alert('กรุณาเลือกคำตอบ')}>
                        <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.btnlinearGradient}>
                            <Text style={[styles.fontBtn, { color: '#FFFFFF' }]}>บันทึกข้อมูล</Text>
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
        alignItems: 'center'
    },
    title: {
        width: '100%',
        paddingLeft: '10%',
        marginTop: '5%'
    },
    body: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '50%',
        alignItems: 'center'
    },
    bodyCard: {
        flexDirection: 'row',
        width: '100%',
        height: '90%',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    bodyImage: {
        height: '100%',
        width: '60%'
    },
    bodyCheckbox: {
        height: '100%',
        width: '40%',
        justifyContent: 'center'
    },
    groupCheckbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Prompt-Regular'
    },
    btnNext: {
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: '5%'
    },
    btnlinearGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontBtn: {
        fontSize: 18,
        fontFamily: 'Prompt-SemiBold'
    }
})
