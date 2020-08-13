import React from 'react'
import { StyleSheet, Text, View, Image, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Input } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import { CategoryContext } from '../src/context/Context_text'

export default function start({ navigation }) {
    const CategoryPage = CommonActions.reset({
        index: 0,
        routes: [
            {
                name: 'SelectTopic',
            },
        ],
    })

    return (
        <CategoryContext.Consumer>
            {
                (data) =>
                    <View style={styles.container}>
                        <View style={styles.body}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                                <Card containerStyle={[styles.card, { height: '30%' }]}>
                                    <View style={{ height: '50%', width: '100%' }}>
                                        <Text style={[styles.font, { marginTop: 0, fontFamily: 'Prompt-Medium' }]}>กรุณาระบุชื่อของคุณ</Text>
                                        <Card containerStyle={styles.bodyInput}>
                                            <Input placeholder='John Smith' onChangeText={text => data.setName(text)} inputContainerStyle={styles.textInput} />
                                        </Card>
                                    </View>
                                    <View style={{ height: '50%', width: '100%' }}>
                                        <Text style={[styles.font, { fontFamily: 'Prompt-Medium', marginTop: '2%' }]}>กรุณาระบุอีเมลของคุณ</Text>
                                        <Card containerStyle={styles.bodyInput}>
                                            <Input placeholder='example@email.com' onChangeText={text => data.setEmail(text)} value={data.email} inputContainerStyle={styles.textInput} />
                                        </Card>
                                    </View>

                                </Card>
                                <Card containerStyle={styles.card}>
                                    <Text style={[styles.font, { marginBottom: '2%', marginTop: 0 }]}>กรุณาระบุเพศของคุณ</Text>
                                    <View style={[styles.bodyCard, { flexDirection: 'row', justifyContent: 'space-around' }]}>
                                        <TouchableOpacity onPress={() => data.setGender('male')}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('../assets/image/male.png')} resizeMode="cover" style={{ opacity: data.gender === 'male' ? 1 : 0.2 }} />
                                                <Text style={[styles.font, { opacity: data.gender === 'male' ? 1 : 0.2 }]}>ชาย</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => data.setGender('female')}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('../assets/image/female.png')} style={{ opacity: data.gender === 'female' ? 1 : 0.2 }} resizeMode="cover" />
                                                <Text style={[styles.font, { opacity: data.gender === 'female' ? 1 : 0.2 }]}>หญิง</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                                <Card containerStyle={[styles.card, { height: '20%' }]}>
                                    <Text style={[styles.font, { marginBottom: '2%', marginTop: 0 }]}>กรุณาระบุอายุของคุณ</Text>
                                    <View style={[styles.bodyCard, { flexDirection: 'row', justifyContent: 'center' }]}>
                                        <Input placeholder='age' containerStyle={{ width: '25%' }}
                                            maxLength={2} onChangeText={text => data.setAge(text)} />
                                        <Text style={styles.font}>ปี</Text>
                                    </View>
                                </Card>
                                <View style={{ height: '10%', width: '100%', alignItems: 'center', marginTop: '5%' }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => data.getMissing() ? navigation.dispatch(CategoryPage) : Alert.alert('กรุณากรอกข้อมูลให้ครบถ้วน')}>
                                        <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.linearGradient}>
                                            <Text style={styles.textBtn}>ดำเนินการต่อ</Text>
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
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        borderBottomWidth: 0,
        height: '75%'
    }
    ,
    bodyInput: {
        margin: 0,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        marginTop: '5%',
        borderRadius: 5
    },
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    bodyCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: '90%',
    },
    font: {
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
        marginTop: '5%'
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
        width: '85%',
        height: '25%',
        alignSelf: 'center'
    },
})
