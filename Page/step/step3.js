import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryContext } from '../../src/context/Context_text'

export default function step3({ navigation }) {
    
    const context = useContext(CategoryContext)

    const nextPage = () => {
        if (context.score_b1 > 4 || context.score_b2 > 4) {
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
                    <Title title={'การจัดวางคีย์บอร์ดและเม้าส์'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <Image source={require('../../assets/image/step3.png')} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={[styles.cardBody, { width: '100%', alignItems: 'flex-start', height: '42%' }]}>
                        <Text style={styles.font}>1. จัดให้ส่วนที่เป็นตัวอักษรบนคีย์บอร์ดอยู่ตรงกลางด้านหน้าของร่างกาย</Text>
                        <Text style={styles.font}>2. เมาส์ควรวางใกล้คีย์บอร์ด ไม่ควรวางไกลจนต้องเอื้อมมือเพื่อใช้งาน</Text>
                        <Text style={styles.font}>3. ตรวจสอบมุมของข้อศอกเมื่อใช้เม้าส์และคีย์บอร์ด ควรจัดให้เป็นมุม 90 องศาและไม่ยกข้อศอกสูงเกินหัวไหล่</Text>
                        <Text style={styles.font}>4. ตรวจสอบมุมของข้อมือขณะใช้คีย์บอร์ดและ เม้าส์ ข้อมือควรตรง ไม่บิดเอียงไปทางอื่น</Text>
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
    },
    font: {
        fontSize: hp('2%'),
        fontFamily: 'Prompt-Regular',
        marginTop: '2%'
    },
    body: {
        width: '100%',
        height: '92%',
        alignItems: 'center',

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
