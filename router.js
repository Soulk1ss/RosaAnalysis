import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Page/home'
import Start from './Page/start'
import SelectTopic from './Page/SelectTopic'
import Topic_1 from './Page/topic_1'
import Topic_1_2 from './Page/topic1/topic_1_2'
import Topic_1_3 from './Page/topic1/topic_1_3'
import Topic_1_4 from './Page/topic1/topic_1_4'
import Topic_1_5 from './Page/topic1/topic_1_5'
import Topic_1_6 from './Page/topic1/topic_1_6'
import Topic_1_7 from './Page/topic1/topic_1_7'
import Topic_1_8 from './Page/topic1/topic_1_8'
import Topic_1_9 from './Page/topic1/topic_1_9'
import Topic_1_10 from './Page/topic1/topic_1_10'
import Topic_2 from './Page/topic_2'
import Topic_2_2 from './Page/topic2/topic_2_2'
import Topic_2_3 from './Page/topic2/topic_2_3'
import Topic_2_4 from './Page/topic2/topic_2_4'
import Topic_2_5 from './Page/topic2/topic_2_5'
import Topic_3 from './Page/topic_3'
import Topic_3_2 from './Page/topic3/topic_3_2'
import Topic_3_3 from './Page/topic3/topic_3_3'
import Topic_3_4 from './Page/topic3/topic_3_4'
import Topic_3_5 from './Page/topic3/topic_3_5'
import step1 from './Page/step/step1'
import step2 from './Page/step/step2'
import step3 from './Page/step/step3'
import step4 from './Page/step/step4'
import step5 from './Page/step/step5'
import rest_1 from './Page/rest/rest_1'
import rest_2 from './Page/rest/rest_2'
import rest_3 from './Page/rest/rest_3'
import rest_4 from './Page/rest/rest_4'
import rest_5 from './Page/rest/rest_5'
import rest_6 from './Page/rest/rest_6'
import result from './Page/showResult'
import { Context_text } from './src/context/Context_text'

const Stack = createStackNavigator();

function App() {
    return (
        <Context_text>
            <StatusBar backgroundColor="#00C6FB" barStyle={'light-content'} />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                    <Stack.Screen name="Start" component={Start} options={{
                        title: 'เริ่มต้นใช้งาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        // headerTintColor: '#FFFFFF'
                    }} />
                    <Stack.Screen name="SelectTopic" component={SelectTopic} options={{
                        title: 'หน้าหลัก',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF'
                    }} />
                    <Stack.Screen name="Topic_1" component={Topic_1} options={{
                        title: 'แบบประเมิน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_2" component={Topic_1_2} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_3" component={Topic_1_3} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_4" component={Topic_1_4} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_5" component={Topic_1_5} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_7" component={Topic_1_7} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_6" component={Topic_1_6} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_8" component={Topic_1_8} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_9" component={Topic_1_9} options={{
                        title: 'หมวด A กลุ่มเก้าอี้',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_1_10" component={Topic_1_10} options={{
                        title: 'แบบประเมิน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_2" component={Topic_2} options={{
                        title: 'แบบประเมิน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_2_2" component={Topic_2_2} options={{
                        title: 'หมวด B กลุ่มจอคอมพิวเตอร์ และโทรศัพท์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 16
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_2_3" component={Topic_2_3} options={{
                        title: 'หมวด B กลุ่มจอคอมพิวเตอร์ และโทรศัพท์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 16
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_2_4" component={Topic_2_4} options={{
                        title: 'หมวด B กลุ่มจอคอมพิวเตอร์ และโทรศัพท์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 16
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_2_5" component={Topic_2_5} options={{
                        title: 'หมวด B กลุ่มจอคอมพิวเตอร์ และโทรศัพท์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 16
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_3" component={Topic_3} options={{
                        title: 'แบบประเมิน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_3_2" component={Topic_3_2} options={{
                        title: 'หมวด C กลุ่มเม้าส์และแป้นพิมพ์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_3_3" component={Topic_3_3} options={{
                        title: 'หมวด C กลุ่มเม้าส์และแป้นพิมพ์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_3_4" component={Topic_3_4} options={{
                        title: 'หมวด C กลุ่มเม้าส์และแป้นพิมพ์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Topic_3_5" component={Topic_3_5} options={{
                        title: 'หมวด C กลุ่มเม้าส์และแป้นพิมพ์',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen
                        name="Result" component={result}
                        options={{
                            title: 'สรุปผลการประเมิน',
                            headerTitleStyle: {
                                alignSelf: 'center',
                                fontFamily: 'Prompt-Medium',
                                color: '#FFFFFF',
                                fontSize: 18
                            },
                            headerStyle: {
                                backgroundColor: "#00C6FB"
                            },
                            headerTintColor: '#FFFFFF',
                        }}
                    />
                    <Stack.Screen name="Rest_1" component={rest_1} options={{
                        title: 'ข้อแนะนำการพักขณะทำงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Rest_2" component={rest_2} options={{
                        title: 'ข้อแนะนำการพักขณะทำงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Rest_3" component={rest_3} options={{
                        title: 'ข้อแนะนำการพักขณะทำงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Rest_4" component={rest_4} options={{
                        title: 'ข้อแนะนำการพักขณะทำงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Rest_5" component={rest_5} options={{
                        title: 'ข้อแนะนำการพักขณะทำงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Rest_6" component={rest_6} options={{
                        title: 'ข้อแนะนำการพักขณะทำงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Step_1" component={step1} options={{
                        title: 'ข้อเสนอแนะในการจัดสถานีงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Step_2" component={step2} options={{
                        title: 'ข้อเสนอแนะในการจัดสถานีงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Step_3" component={step3} options={{
                        title: 'ข้อเสนอแนะในการจัดสถานีงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Step_4" component={step4} options={{
                        title: 'ข้อเสนอแนะในการจัดสถานีงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                    <Stack.Screen name="Step_5" component={step5} options={{
                        title: 'ข้อเสนอแนะในการจัดสถานีงาน',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontFamily: 'Prompt-Medium',
                            color: '#FFFFFF',
                            fontSize: 18
                        },
                        headerStyle: {
                            backgroundColor: "#00C6FB"
                        },
                        headerTintColor: '#FFFFFF',
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Context_text>

    );
}


export default App;