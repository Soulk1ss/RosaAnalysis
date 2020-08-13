import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native'
import Title from '../../src/component/title'
import { Card, CheckBox } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import { CategoryContext } from '../../src/context/Context_text'

export default function topic_1_9({ route, navigation }) {
    const { score } = route.params;

    const [choice1, setChoice1] = useState({
        yes1: false,
        no1: false,
        point_1: ''
    })

    const [choice2, setChoice2] = useState({
        yes2: false,
        no2: false,
        point_2: ''
    })

    const { yes1, no1, point_1 } = choice1
    const { yes2, no2, point_2 } = choice2


    return (
        <CategoryContext.Consumer>
            {
                data =>
                    <View style={styles.container}>
                        <View style={styles.title}>
                            <Title title={'พนักพิง'} />
                        </View>
                        <View style={styles.body}>
                            <Card containerStyle={styles.card}>
                                <Text style={styles.text}>พื้นโต๊ะทำงานสูงเกินไป (ไหล่ยกขึ้น)</Text>
                                <View style={styles.bodyCard}>
                                    <View style={styles.bodyImage}>
                                        <Image source={require('../../assets/stance/IMG_3125.png')} style={styles.image} resizeMode="center" />
                                    </View>
                                    <View style={styles.bodyCheckbox}>
                                        <View style={styles.groupCheckbox}>
                                            <CheckBox
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                uncheckedColor="#00ACF7"
                                                checkedColor="#00ACF7"
                                                checked={yes1}
                                                onPress={() => setChoice1({ yes1: true, no1: false, point_1: 1 })}
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
                                                checked={no1}
                                                onPress={() => setChoice1({ yes1: false, no1: true, point_1: 0 })}
                                                containerStyle={{ marginRight: 0 }}
                                            />
                                            <Text style={styles.text}>ไม่ใช่</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                            <Card containerStyle={[styles.card, { height: '40%' }]}>
                                <Text style={styles.text}>ไม่สามารถปรับได้</Text>
                                <View style={styles.bodyCard}>
                                    <View style={[styles.bodyCheckbox, { width: '100%' }]}>
                                        <View style={styles.groupCheckbox}>
                                            <CheckBox
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                uncheckedColor="#00ACF7"
                                                checkedColor="#00ACF7"
                                                checked={yes2}
                                                onPress={() => setChoice2({ yes2: true, no2: false, point_2: 1 })}
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
                                                checked={no2}
                                                onPress={() => setChoice2({ yes2: false, no2: true, point_2: 0 })}
                                                containerStyle={{ marginRight: 0 }}
                                            />
                                            <Text style={styles.text}>ไม่ใช่</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <TouchableOpacity style={styles.btnNext} onPress={() => data.setScore_a4(score, point_1, point_2) ? navigation.navigate('Topic_1') : Alert.alert('กรุณาเลือกคำตอบ')}>
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
