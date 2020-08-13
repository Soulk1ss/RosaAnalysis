import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryContext } from '../../src/context/Context_text'

export default function step1({ navigation }) {
    const context = useContext(CategoryContext)

    const nextPage = () => {
        if (context.score_a2 > 4 || context.score_a3 > 4 || context.score_a4 > 4) {
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
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'การปรับระดับความสูง'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <Image source={require('../../assets/image/step1.png')} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={[styles.cardBody, { height: '40%', marginTop: '5%', alignItems: 'flex-start' }]}>
                        <Text style={styles.font}>1. ปรับความสูงของเก้าอี้ให้ข้อมืออยู่ในระดับเดียวกับคีย์บอร์ดขณะพิมพ์</Text>
                        <Text style={styles.font}>2. หากปรับเก้าอี้สูงจนเท้าแตะไม่ถึงพื้นควรจัดให้มีที่พักเท้า</Text>
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
        width: '90%',
        height: '75%',
    },
    title: {
        width: '100%',
        height: '8%',
    },
    font: {
        fontSize: hp('2%'),
        fontFamily: 'Prompt-Regular',
        paddingTop: '5%',
    },
    body: {
        width: '100%',
        height: '90%',
        // marginTop: '5%',
        alignItems: 'center',

    },
    image: {
        width: '100%',
        height: '100%'
    },
    cardBody: {
        width: '100%',
        height: '60%',
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
