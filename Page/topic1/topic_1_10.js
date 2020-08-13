import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Card, CheckBox } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import { CategoryContext } from '../../src/context/Context_text'

export default function topic_1_10({ navigation }) {
    const [choice, setChoice] = useState({
        answer_1: false,
        answer_2: false,
        answer_3: false,
        point: '',
    })

    const { answer_1, answer_2, answer_3, point } = choice
    return (
        <CategoryContext.Consumer>
            {
                (data) =>
                    <View style={styles.container}>
                        <View style={styles.body}>
                            <Card containerStyle={styles.card}>
                                <Text style={styles.text}>ระยะเวลาการนั่งเก้าอี้ต่อวัน</Text>
                                <View style={styles.bodyCard}>
                                    <View style={[styles.bodyCheckbox, { width: '100%' }]}>
                                        <View style={styles.groupCheckbox}>
                                            <CheckBox
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                uncheckedColor="#00ACF7"
                                                checkedColor="#00ACF7"
                                                checked={answer_1}
                                                onPress={() => setChoice({ answer_1: true, answer_2: false, answer_3: false, point: -1 })}
                                                containerStyle={{ marginRight: 0 }}
                                            />
                                            <Text style={styles.text}>นั่งรวมน้อยกว่าวันละ 1 ชั่วโมง</Text>
                                        </View>
                                        <View style={styles.groupCheckbox}>
                                            <CheckBox
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                uncheckedColor="#00ACF7"
                                                checkedColor="#00ACF7"
                                                checked={answer_2}
                                                onPress={() => setChoice({ answer_1: false, answer_2: true, answer_3: false, point: 0 })}
                                                containerStyle={{ marginRight: 0 }}
                                            />
                                            <Text style={styles.text}>นั่งรวมวันละ 1 ถึง 4 ชั่วโมง</Text>
                                        </View>
                                        <View style={styles.groupCheckbox}>
                                            <CheckBox
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                uncheckedColor="#00ACF7"
                                                checkedColor="#00ACF7"
                                                checked={answer_3}
                                                onPress={() => setChoice({ answer_1: false, answer_2: false, answer_3: true, point: 1 })}
                                                containerStyle={{ marginRight: 0 }}
                                            />
                                            <Text style={styles.text}>นั่งรวมมากกว่าวันละ 4 ชั่วโมง</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <TouchableOpacity style={styles.btnNext} onPress={() => data.totalScore_category_a(point) ? navigation.navigate('SelectTopic') : Alert.alert('กรุณาเลือกคำตอบ')}>
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
        height: '60%',
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
