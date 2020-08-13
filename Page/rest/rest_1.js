import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements'
import Title from '../../src/component/title'
import LinearGradient from 'react-native-linear-gradient';

export default function rest_1({navigation}) {
    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <View style={styles.title}>
                    <Title title={'ข้อแนะนำการพักขณะทำงาน'} />
                </View>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <Text style={styles.font}>1. ปรับเปลี่ยนกิจกรรมให้มีความหลากหลายในระหว่างวัน</Text>
                        <Text style={styles.font}>2. กำหนดเวลาพักที่แน่นอน เช่น การพักกลางวันพักทานอาหารว่าง</Text>
                        <Text style={styles.font}>3. การพักแบบไม่เป็นทางการ เช่น พูดคุยกับเพื่อนร่วมงาน, การเดินไปกดน้ำดื่ม</Text>
                        <Text style={styles.font}>4. หยุดพักชั่วคราวสำหรับการทำงานที่มีท่าทางซ้ำซาก ควรพัก 1-2 นาทีทุกๆครึ่งชั่วโมงและหลังจากทำงานมา 4 ชั่วโมง ควรพัก 30 นาที-1 ชั่วโมง</Text>
                    </View>
                </View>
            </Card>
            <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('Rest_2')}>
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
        height: '70%',
    },
    title: {
        width: '100%',
        height: '8%',
    },
    font: {
        fontSize: 16,
        fontFamily: 'Prompt-Regular',
        paddingTop: '5%',
    },
    body: {
        width: '100%',
        height: '90%',        
        alignItems: 'center',

    },    
    cardBody: {
        width: '100%',
        height: '100%',
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
