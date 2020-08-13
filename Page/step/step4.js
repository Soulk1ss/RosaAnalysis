import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryContext } from '../../src/context/Context_text'

export default function step4({ navigation }) {
    const context = useContext(CategoryContext)

    const nextPage = () => {
        if (context.rosa > 5) {
            navigation.navigate('Step_5')
        } else {
            navigation.navigate('Rest_1')
        }
    }
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'การจัดวางและปรับหน้าจอคอมพิวเตอร์'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <Image source={require('../../assets/image/step4.png')} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={[styles.cardBody, { width: '100%', alignItems: 'flex-start', height: '42%' }]}>
                        <Text style={styles.font}>1. จอคอมพิวเตอร์ควรอยู่ตรงกลางของร่างกาย</Text>
                        <Text style={styles.font}>2. ส่วนที่สูงที่สุดของจอคอมพิวเตอร์ควรอยู่ในระดับสายตาหรือสูงกว่าเล็กน้อย</Text>
                        <Text style={styles.font}>3. หน้าจอควรอยู่ห่างประมาณ 1 ช่วงแขน</Text>
                        <Text style={styles.font}>4. ควรวางจอคอมพิวเตอร์ในมุมที่เหมาะสมโดยพิจารณาจากแหล่งกำเนิดแสงเพื่อป้องกันแสงจ้าสะท้อนเข้าตาและควรระวังการหันหน้าจอเข้าหาหน้าต่างโดยตรง</Text>
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
