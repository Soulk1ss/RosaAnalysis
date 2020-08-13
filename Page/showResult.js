import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { Card } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Title from '../src/component/title'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryContext } from '../src/context/Context_text'

export default function showResult({ navigation }) {
    const context = useContext(CategoryContext)

    const nextPage = () => {
        if (context.score_a1 > 4) {
            navigation.navigate('Step_1')
        } else if (context.score_a2 > 4 || context.score_a3 > 4 || context.score_a4 > 4) {
            navigation.navigate('Step_2')
        } else if (context.score_c1 > 4 || context.score_c2 > 4) {
            navigation.navigate('Step_3')
        } else if (context.score_b1 > 4 || context.score_b2 > 4) {
            navigation.navigate('Step_4')
        } else if (context.rosa > 5) {
            navigation.navigate('Step_5')
        } else {
            navigation.navigate('Rest_1')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '100%' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.body}>
                        <Card containerStyle={styles.card} wrapperStyle={{ justifyContent: 'space-around' }}>
                            <View style={{ height: hp('25%'), justifyContent: 'center' }}>
                                <Title title='หมวด A กลุ่มเก้าอี้' />
                                <View style={[styles.Detail, { marginTop: '2%' }]}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>ความสูงของเก้าอี้</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_a1}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                                <View style={styles.Detail}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>ความลึกของเบาะเก้าอี้</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_a2}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                                <View style={styles.Detail}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>ที่พักแขน</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_a3}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                                <View style={[styles.Detail, { marginBottom: '2%' }]}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>พนักพิง</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_a4}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: hp('20%'), justifyContent: 'center' }}>
                                <Title title='หมวด B กลุ่มจอคอมพิวเตอร์และโทรศัพท์' />
                                <View style={[styles.Detail, { marginTop: '2%' }]}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>จอคอมพิวเตอร์</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_b1}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                                <View style={[styles.Detail, { marginBottom: '2%' }]}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>โทรศัพท์มือถือ</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_b2}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: hp('20%'), justifyContent: 'center' }}>
                                <Title title='หมวด C กลุ่มเม้าส์และแป้นพิมพ์' />
                                <View style={[styles.Detail, { marginTop: '2%' }]}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>เมาส์</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_c1}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                                <View style={styles.Detail}>
                                    <View style={styles.col_6}>
                                        <Text style={styles.font}>แป้นพิมพ์</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>{context.score_c2}</Text>
                                    </View>
                                    <View style={styles.col_2}>
                                        <Text style={styles.font}>คะแนน</Text>
                                    </View>
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.font, { fontFamily: 'Prompt-Medium', textAlign: 'center' }]}>คะแนนรวม ROSA {context.rosa} คะแนน</Text>
                                {
                                    context.rosa > 5 ?
                                        <Text style={[styles.font, { color: '#D05353', fontFamily: 'Prompt-Medium', textAlign: 'center' }]}>มีความเสี่ยง ควรปรับท่านั่งทำงาน</Text>
                                        :
                                        <Text />
                                }
                            </View>
                        </Card>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btn} onPress={nextPage}>
                            <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.linearGradient}>
                                <Text style={styles.textBtn}>ข้อเสนอแนะในการจัดสถานีงาน</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        alignItems: 'center'
    },
    btn: {
        width: '90%',
        height: '100%',

    },
    linearGradient: {
        height: '70%',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textBtn: {
        fontFamily: 'Prompt-SemiBold',
        fontSize: 18,
        color: '#ffffff',
    },
    card: {
        width: '95%',
        height: hp('75%'),
        paddingHorizontal: '5%',
        justifyContent: 'space-around'
    },
    body: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
    },
    footer: {
        height: hp('10%'),
        width: '100%',
        alignItems: 'center',
    },
    Detail: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: '2%',
    },
    col_6: {
        width: '60%',
    },
    col_2: {
        width: '20%',
        alignItems: 'center'
    },
    font: {
        fontFamily: 'Prompt-Regular',
        fontSize: 16
    },
    footerCard: {
        height: '15%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
