import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function home({ navigation }) {   
    const StartPage = CommonActions.reset({
        index: 0,
        routes: [
            {
                name: 'Start',
            },
        ],
    })
    const CategoryPage = CommonActions.reset({
        index: 0,
        routes: [
            {
                name: 'SelectTopic',
            },
        ],
    })
      
    const checkData = () => {
        AsyncStorage.getItem('data')
            .then((result) => {
                if (result) {
                    navigation.dispatch(CategoryPage)
                } else {
                    navigation.dispatch(StartPage)
                }
            })

    }
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
                <View style={{ height: '80%' }}>
                    <View style={{ height: '70%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/image/img_home.png')} style={{ width: '70%', height: '70%' }} resizeMode='contain' />
                    </View>
                    <View style={{ height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textTitle}>ROSA Analyzer</Text>
                        <Text style={styles.textBody}>การประเมินความเสี่ยงทางการยศาสตร์ของผู้ใช้คอมพิวเตอร์</Text>
                        <Text style={styles.textBody}>ด้วยวิธี Rapid Office Strain Assessment (ROSA)</Text>
                    </View>
                </View>
                <View style={{ height: '20%', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn} onPress={checkData}>
                        <Text style={styles.buttonText}>เริ่มต้นใช้งาน</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textTitle: {
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: '2%',
        fontFamily: 'Prompt-SemiBold',
        textAlign: 'center'
    },
    textBody: {
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'Prompt-SemiBold',
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'Prompt-SemiBold',
        textAlign: 'center',
        color: '#ffffff',
    },
    btn: {
        width: '90%',
        height: '40%',
        borderRadius: 40,
        backgroundColor: '#005BEA',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
