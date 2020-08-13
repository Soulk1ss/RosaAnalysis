import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import Title from '../src/component/title'
import LinearGradient from 'react-native-linear-gradient';
import { CategoryContext } from '../src/context/Context_text'

export default function topic_2({ navigation }) {    
    return (
        <CategoryContext.Consumer>
            {
                (data) =>
                    <View style={styles.container}>
                        <Card containerStyle={styles.card}>
                            <View style={styles.title}>
                                <Title title={'หมวด B กลุ่มจอคอมพิวเตอร์และโทรศัพท์'} />
                            </View>
                            <View style={styles.image}>
                                <Image source={require('../assets/stance/IMG_3107.png')} style={{ width: '100%', height: '100%' }} resizeMode="center" />
                            </View>
                            <View style={styles.body}>
                                <Text style={styles.font}>กรุณาตอบให้ครบทุกหัวข้อเพื่อดำเนินการต่อ</Text>
                                <View style={styles.groupBtn}>
                                    <TouchableOpacity style={[styles.btn, { backgroundColor: data.status_b1 ? '#74D45B' : '#E4E4E4' }]} onPress={() => navigation.navigate('Topic_2_2')}>
                                        <Text style={[styles.font, { color: data.status_b1 ? '#FFFFFF' : '#2A2A2A', fontSize: 16, paddingTop: 0 }]}>จอคอมพิวเตอร์</Text>
                                        <Icon name='chevron-thin-right' type='entypo' iconStyle={{ color: data.status_b1 ? '#FFFFFF' : '#2A2A2A' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btn, { backgroundColor: data.status_b2 ? '#74D45B' : '#E4E4E4' }]} onPress={() => navigation.navigate('Topic_2_4')}>
                                        <Text style={[styles.font, { color: data.status_b2 ? '#FFFFFF' : '#2A2A2A', fontSize: 16, paddingTop: 0 }]}>โทรศัพท์มือถือ</Text>
                                        <Icon name='chevron-thin-right' type='entypo' iconStyle={{ color: data.status_b2 ? '#FFFFFF' : '#2A2A2A' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card>
                        {
                            data.get_all_status_b() ?
                                <TouchableOpacity style={styles.btnNext} onPress = {()=> data.set_statusCategory_b() === true ? navigation.navigate('SelectTopic') : ''}>
                                    <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.linearGradient}>
                                        <Text style={[styles.fontBtn, { color: '#FFFFFF' }]}>ดำเนินการต่อ</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.btnNext} disabled={true}>
                                    <View style={[styles.linearGradient, { backgroundColor: '#C4C4C4' }]}>
                                        <Text style={styles.fontBtn}>ดำเนินการต่อ</Text>
                                    </View>
                                </TouchableOpacity>
                        }

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
    card: {
        width: '90%',
        height: '85%'
    },
    title: {
        width: '95%',
        height: '10%',
    },
    image: {
        width: '100%',
        height: '35%',
        marginTop: '5%'
    },
    body: {
        width: '100%',
        height: '50%',
    },
    font: {
        fontSize: 12,
        fontFamily: 'Prompt-Regular',
        color: 'red',
        paddingTop: '5%',
    },
    btn: {
        width: '100%',
        height: '18%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderRadius: 10,
        marginTop: '5%'
    },
    groupBtn: {
        height: '100%',
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
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
