import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryContext } from '../../src/context/Context_text'

export default function step2({ navigation }) {
    const context = useContext(CategoryContext)
    const nextPage = () => {
        if (context.score_c1 > 4 || context.score_c2 > 4) {
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
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'การปรับเก้าอี้'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <Image source={require('../../assets/image/step2.png')} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={[styles.cardBody, { width: '100%', alignItems: 'flex-start' }]}>
                        <Text style={styles.font}>1. ปรับให้พนักพิงรองรับตรงส่วนโค้งของหลังส่วนล่าง</Text>
                        <Text style={styles.font}>2. ตรวจสอบมุมของพนักพิงให้อยู่ในช่วง 90-95 องศา</Text>
                        <Text style={styles.font}>3. ตรวจสอบมุมของเก้าอี้ที่นั่งให้อยู่ในช่วง 90-95 องศา</Text>
                        <Text style={styles.font}>4. ตรวจสอบช่องว่างระหว่างขอบเก้าอี้กับช่วงขาด้านหลังจากข้อพับหัวเข่าควรมี ช่องว่างประมาณ 2-3 นิ้วมือ</Text>
                    </View>
                </View>
            </Card>
            <TouchableOpacity style={styles.btnNext} onPress={nextPage}>
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
        width: '95%',
        height: '80%'
    },
    title: {
        width: '100%',
        height: '5%',
    },
    font: {
        fontSize: hp('2%'),
        fontFamily: 'Prompt-Regular',
        marginTop: '2%'
    },
    body: {
        width: '100%',
        height: '95%',
        alignItems: 'center',
        paddingTop: '5%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    cardBody: {
        width: '55%',
        height: '50%',
        alignItems: 'center',
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
