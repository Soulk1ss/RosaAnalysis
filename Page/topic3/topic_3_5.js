import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import Title from '../../src/component/title'
import { Card, CheckBox } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import { CategoryContext } from '../../src/context/Context_text'

export default function topic_3_5({ route, navigation }) {
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

    const [choice3, setChoice3] = useState({
        yes3: false,
        no3: false,
        point_3: ''
    })

    const [choice4, setChoice4] = useState({
        yes4: false,
        no4: false,
        point_4: ''
    })

    const [choice5, setChoice5] = useState({
        ans_1: false,
        ans_2: false,
        ans_3: false,
        point_5: ''
    })

    const { yes1, no1, point_1 } = choice1
    const { yes2, no2, point_2 } = choice2
    const { yes3, no3, point_3 } = choice3
    const { yes4, no4, point_4 } = choice4
    const { ans_1, ans_2, ans_3, point_5 } = choice5
    return (
        <CategoryContext.Consumer>
            {
                (data) =>
                    <View style={styles.container}>
                        <View style={styles.body}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                                <View style={styles.title}>
                                    <Title title={'แป้นพิมพ์'} />
                                </View>
                                <Card containerStyle={styles.card}>
                                    <Text style={styles.text}>ในขณะพิมพ์มือเบี่ยงออกจากกัน</Text>
                                    <View style={styles.bodyCard}>
                                        <View style={styles.bodyImage}>
                                            <Image source={require('../../assets/stance/IMG_3157.png')} style={styles.image} resizeMode="center" />
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
                                <Card containerStyle={styles.card}>
                                    <Text style={styles.text}>คีย์บอร์ดสูงเกิน-ไหล่ยกขึ้น</Text>
                                    <View style={styles.bodyCard}>
                                        <View style={styles.bodyImage}>
                                            <Image source={require('../../assets/stance/IMG_3158.png')} style={styles.image} resizeMode="center" />
                                        </View>
                                        <View style={styles.bodyCheckbox}>
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
                                <Card containerStyle={styles.card}>
                                    <Text style={styles.text}>เอื้อมมือไปถึงเหนือศีรษะ</Text>
                                    <View style={styles.bodyCard}>
                                        <View style={styles.bodyImage}>
                                            <Image source={require('../../assets/stance/IMG_3159.png')} style={styles.image} resizeMode="center" />
                                        </View>
                                        <View style={styles.bodyCheckbox}>
                                            <View style={styles.groupCheckbox}>
                                                <CheckBox
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    uncheckedColor="#00ACF7"
                                                    checkedColor="#00ACF7"
                                                    checked={yes3}
                                                    onPress={() => setChoice3({ yes3: true, no3: false, point_3: 1 })}
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
                                                    checked={no3}
                                                    onPress={() => setChoice3({ yes3: false, no3: true, point_3: 0 })}
                                                    containerStyle={{ marginRight: 0 }}
                                                />
                                                <Text style={styles.text}>ไม่ใช่</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Card>
                                <Card containerStyle={styles.card}>
                                    <Text style={styles.text}>ไม่สามารถปรับได้</Text>
                                    <View style={styles.bodyCard}>
                                        <View style={[styles.bodyCheckbox, { width: '100%' }]}>
                                            <View style={styles.groupCheckbox}>
                                                <CheckBox
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    uncheckedColor="#00ACF7"
                                                    checkedColor="#00ACF7"
                                                    checked={yes4}
                                                    onPress={() => setChoice4({ yes4: true, no4: false, point_4: 1 })}
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
                                                    checked={no4}
                                                    onPress={() => setChoice4({ yes4: false, no4: true, point_4: 0 })}
                                                    containerStyle={{ marginRight: 0 }}
                                                />
                                                <Text style={styles.text}>ไม่ใช่</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Card>
                                <Card containerStyle={[styles.card, {height: '18%'}]}>
                                    <Text style={styles.text}>ระยะเวลาการใช้จอคอมพิวเตอร์ต่อวัน</Text>
                                    <View style={styles.bodyCard}>
                                        <View style={[styles.bodyCheckbox, { width: '100%' }]}>
                                            <View style={styles.groupCheckbox}>
                                                <CheckBox
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    uncheckedColor="#00ACF7"
                                                    checkedColor="#00ACF7"
                                                    checked={ans_1}
                                                    onPress={() => setChoice5({ ans_1: true, ans_2: false, ans_3: false, point_5: -1 })}
                                                    containerStyle={styles.checkbox}
                                                />
                                                <Text style={styles.text}>ใช้งานรวมน้อยกว่าวันละ 1 ชั่วโมง</Text>
                                            </View>
                                            <View style={styles.groupCheckbox}>
                                                <CheckBox
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    uncheckedColor="#00ACF7"
                                                    checkedColor="#00ACF7"
                                                    checked={ans_2}
                                                    onPress={() => setChoice5({ ans_1: false, ans_2: true, ans_3: false, point_5: 0 })}
                                                    containerStyle={styles.checkbox}
                                                />
                                                <Text style={styles.text}>ใช้งานรวมวันละ 1 ถึง 4 ชั่วโมง</Text>
                                            </View>
                                            <View style={styles.groupCheckbox}>
                                                <CheckBox
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    uncheckedColor="#00ACF7"
                                                    checkedColor="#00ACF7"
                                                    checked={ans_3}
                                                    onPress={() => setChoice5({ ans_1: false, ans_2: false, ans_3: true, point_5: 1 })}
                                                    containerStyle={styles.checkbox}
                                                />
                                                <Text style={styles.text}>ใช้งานรวมมากกว่าวันละ 4 ชั่วโมง</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Card>
                                <View style={{ height: '5%', width: '100%', alignItems: 'center', marginTop: '2%' }}>
                                    <TouchableOpacity style={styles.btnNext} onPress={() => data.setScore_c2(score, point_1 ,point_2, point_3, point_4, point_5) ? navigation.navigate('Topic_3') : Alert.alert('กรุณาเลือกคำตอบ')}>
                                        <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.btnlinearGradient}>
                                            <Text style={[styles.fontBtn, { color: '#FFFFFF' }]}>บันทึกข้อมูล</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
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
        height: '5%',
        justifyContent: 'flex-end',
    },
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '15%',
        alignItems: 'center'
    },
    bodyCard: {
        flexDirection: 'row',
        width: '100%',
        height: '90%',
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    bodyImage: {
        height: '60%',
        width: '50%',
        justifyContent: 'center'
    },
    bodyCheckbox: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
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
        width: '95%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
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
    },
    checkbox: {
        margin: '2%',
        padding: 0,
    }
})
