import React, { useContext } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Card, Icon } from 'react-native-elements'
import { CategoryContext } from '../src/context/Context_text'
import { CommonActions } from '@react-navigation/native';


export default function SelectTopic({ navigation }) {
    const context = useContext(CategoryContext)

    const Result = CommonActions.reset({
        index: 0,
        routes: [
            {
                name: 'Result',
            },
        ],
    })   
    const nextPage = () =>{
        context.getScore_rosa()
        navigation.dispatch(Result)
    }

    return (
        
        <CategoryContext.Consumer>
            
            {
                (check) =>
                    <View style={styles.container}>
                        <StatusBar backgroundColor="#00C6FB" barStyle={'light-content'} />
                        <View style={styles.body}>
                            <TouchableOpacity style={{ height: '25%', width: '100%' }} onPress={() => navigation.navigate('Topic_1')}>
                                <Card containerStyle={{ height: '100%' }}>
                                    <View style={styles.bodyCard}>
                                        <View style={styles.image}>
                                            <Image source={require('../assets/stance/IMG_3028.png')} style={{ width: '100%', height: '100%' }} resizeMode="center" />
                                        </View>
                                        <View style={styles.bodyText}>
                                            <Text style={styles.text}>หมวด A กลุ่มเก้าอี้</Text>
                                            <View style={{ width: '50%', height: '40%', backgroundColor: check.category_a ? '#74D45B' : '#D05353', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                                <Text style={{ color: 'white', fontFamily: 'Prompt-Medium' }}>{check.category_a ? 'สำเร็จ' : 'ไม่สำเร็จ'}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.icon}>
                                            <Icon name='chevron-thin-right' type='entypo' />
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            {/* Card two */}
                            <TouchableOpacity style={{ height: '30%', width: '100%', marginVertical: '3%' }} onPress={() => navigation.navigate('Topic_2')}>
                                <Card containerStyle={{ height: '100%' }}>
                                    <View style={styles.bodyCard}>
                                        <View style={styles.image}>
                                            <Image source={require('../assets/stance/IMG_3107.png')} style={{ width: '95%', height: '100%' }} resizeMode="center" />
                                        </View>
                                        <View style={styles.bodyText}>
                                            <Text style={styles.text}>หมวด B กลุ่มจอคอมพิวเตอร์และโทรศัพท์</Text>
                                            <View style={{ width: '50%', height: '40%', backgroundColor: check.category_b ? '#74D45B' : '#D05353', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                                <Text style={{ color: 'white', fontFamily: 'Prompt-Medium' }}>{check.category_b ? 'สำเร็จ' : 'ไม่สำเร็จ'}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.icon}>
                                            <Icon name='chevron-thin-right' type='entypo' />
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                            {/* Card three */}
                            <TouchableOpacity style={{ height: '30%', width: '100%' }} onPress={() => navigation.navigate('Topic_3')}>
                                <Card containerStyle={{ height: '100%' }}>
                                    <View style={styles.bodyCard}>
                                        <View style={styles.image}>
                                            <Image source={require('../assets/stance/IMG_3151.png')} style={{ width: '100%', height: '100%' }} resizeMode="center" />
                                        </View>
                                        <View style={styles.bodyText}>
                                            <Text style={styles.text}>หมวด C กลุ่มเม้าส์และแป้นพิมพ์</Text>
                                            <View style={{ width: '50%', height: '40%', backgroundColor: check.category_c ? '#74D45B' : '#D05353', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                                <Text style={{ color: 'white', fontFamily: 'Prompt-Medium' }}>{check.category_c ? 'สำเร็จ' : 'ไม่สำเร็จ'}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.icon}>
                                            <Icon name='chevron-thin-right' type='entypo' />
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer}>
                            {
                              check.getCategory() ?
                                    <TouchableOpacity style={styles.btn} onPress = {nextPage}>
                                        <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.linearGradient}>
                                            <Text style={styles.textBtn}>สรุปผลการประเมิน</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.btn} disabled={true}>
                                        <View style={[styles.linearGradient, { backgroundColor: '#C4C4C4' }]}>
                                            <Text style={styles.textBtn}>สรุปผลการประเมิน</Text>
                                        </View>
                                    </TouchableOpacity>
                            }
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Rest_1')}>
                                <LinearGradient colors={['#FFD02C', '#EDAB47']} style={styles.linearGradient}>
                                    <Text style={styles.textBtn}>การยืดเหยียดและออกกำลังกาย</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>                        
                    </View>
            }

        </CategoryContext.Consumer>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        height: '80%',
        paddingTop: '3%',
    },
    footer: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btn: {
        width: '90%',
        height: '40%',
    },
    linearGradient: {
        height: '100%',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontFamily: 'Prompt-SemiBold',
        fontSize: 18,
        color: '#ffffff',
    },
    bodyCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyText: {
        flex: 3,
        paddingLeft: '5%'
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Prompt-Medium',
        marginBottom: '5%'
    },
    indicator: {
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})
