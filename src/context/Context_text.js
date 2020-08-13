import React from 'react'
import { category_a, category_b, category_c, joinCB, findRosa } from '../logic/app'
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';
import axios from 'axios'


const CategoryContext = React.createContext()

class Context_text extends React.Component {
    state = {
        user_id: 0,
        name: '',
        e_mail: '',
        gender: '',
        age: 0,
        category_A: false,
        category_B: false,
        category_C: false,
        score_category_a: 0,
        score_category_b: 0,
        score_category_c: 0,
        score_a1: 0,
        status_a1: false,
        score_a2: 0,
        status_a2: false,
        score_a3: 0,
        status_a3: false,
        score_a4: 0,
        status_a4: false,
        score_b1: 0,
        status_b1: false,
        score_b2: 0,
        status_b2: false,
        score_c1: 0,
        status_c1: false,
        score_c2: 0,
        status_c2: false,
        rosa: 0,
        isLoad: false,
        Loaded: 0,
        hasData: false,
        sendEmail: false
    }

    constructor() {
        super()
        // AsyncStorage.removeItem('data')
        AsyncStorage.getItem('data', (err, result) => {
            if (result != null) {
                console.log(JSON.parse(result))
                if (JSON.parse(result).name && JSON.parse(result).age && JSON.parse(result).gender) {
                    this.setState({
                        user_id: JSON.parse(result).user_id,
                        name: JSON.parse(result).name,
                        age: JSON.parse(result).age,
                        gender: JSON.parse(result).gender
                    })
                }
                if (JSON.parse(result).category_A) {
                    this.setState({
                        category_A: JSON.parse(result).category_A,
                        score_category_a: JSON.parse(result).score_category_a,
                        status_a1: true,
                        status_a2: true,
                        status_a3: true,
                        status_a4: true,
                        score_a1: JSON.parse(result).score_a1,
                        score_a2: JSON.parse(result).score_a2,
                        score_a3: JSON.parse(result).score_a3,
                        score_a4: JSON.parse(result).score_a4
                    })
                }
                if (JSON.parse(result).category_B) {
                    this.setState({
                        category_B: JSON.parse(result).category_B,
                        score_category_b: JSON.parse(result).score_category_b,
                        status_b1: true,
                        status_b2: true,
                        score_b1: JSON.parse(result).score_b1,
                        score_b2: JSON.parse(result).score_b2,
                    })
                }
                if (JSON.parse(result).category_C) {
                    this.setState({
                        category_C: JSON.parse(result).category_C,
                        score_category_c: JSON.parse(result).score_category_c,
                        status_c1: true,
                        status_c2: true,
                        score_c1: JSON.parse(result).score_c1,
                        score_c2: JSON.parse(result).score_c2,
                    })
                }
                if (JSON.parse(result).category_A && JSON.parse(result).category_B && JSON.parse(result).category_C) {
                    this.setState({
                        rosa: JSON.parse(result).rosa,
                    })
                }
            } else {
                return false
            }
        })
    }

    removeData = () => {
        this.setState({
            user_id: 0,
            name: '',
            e_mail: '',
            gender: '',
            age: 0,
            category_A: false,
            category_B: false,
            category_C: false,
            score_category_a: 0,
            score_category_b: 0,
            score_category_c: 0,
            score_a1: 0,
            status_a1: false,
            score_a2: 0,
            status_a2: false,
            score_a3: 0,
            status_a3: false,
            score_a4: 0,
            status_a4: false,
            score_b1: 0,
            status_b1: false,
            score_b2: 0,
            status_b2: false,
            score_c1: 0,
            status_c1: false,
            score_c2: 0,
            status_c2: false,
            rosa: 0,
            isLoad: false,
            Loaded: 0,
            hasData: false,
            sendEmail: false
        })
    }

    //--------------------------------------------------- get All ----------------------------------------------------------

    saveHistory = async () => {
        let userHistory = {
            user_id: uuid(),
            e_mail: this.state.e_mail,
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
        }
        await AsyncStorage.setItem('data', JSON.stringify(userHistory))
    }
    getEmail = () => {
        return this.state.e_mail
    }
    getMissing = () => {
        let { name, age, e_mail, gender } = this.state;
        if (name === '' || age === 0 || e_mail === '' || gender == '') {
            return false
        } else {
            this.saveHistory();
            return true
        }
    }

    get_all_status_a = () => {
        let { status_a1, status_a2, status_a3, status_a4 } = this.state
        if (status_a1 && status_a2 && status_a3 && status_a4) {
            return true
        } else {
            return false
        }
    }

    getCategory = () => {
        const { category_A, category_B, category_C } = this.state;
        if ((category_A && category_B && category_C) === true) {
            return true
        } else {
            return false
        }
    }
    get_all_status_b = () => {
        let { status_b1, status_b2 } = this.state
        if (status_b1 && status_b2) {
            return true
        } else {
            return false
        }
    }

    get_all_status_c = () => {
        let { status_c1, status_c2 } = this.state
        if (status_c1 && status_c2) {
            return true
        } else {
            return false
        }
    }

    getScore_rosa = () => {
        try {
            let { score_category_a, score_category_b, score_category_c, rosa } = this.state
            let cb = joinCB(score_category_c, score_category_b);
            let score_rosa = findRosa(cb, score_category_a)
            
            if (rosa !== score_rosa) {
                console.log('score change')
                let data = {
                    rosa: score_rosa
                }
                this.setState({ rosa: score_rosa})
                AsyncStorage.mergeItem('data', JSON.stringify(data))
                    .then(() => {
                        data = {
                            id: this.state.user_id,
                            name: this.state.name,
                            age: this.state.age,
                            e_mail: this.state.e_mail,
                            gender: this.state.gender,
                            score_a1: this.state.score_a1,
                            score_a2: this.state.score_a2,
                            score_a3: this.state.score_a3,
                            score_a4: this.state.score_a4,
                            score_b1: this.state.score_b1,
                            score_b2: this.state.score_b2,
                            score_c1: this.state.score_c1,
                            score_c2: this.state.score_c2,
                            score_rosa: score_rosa
                        }
                                                
                        axios.post('http://192.168.176.2:5000/api/', data)
                            .then((response) => {
                                console.log(response.status)
                                this.setState({sendEmail: true })
                            })
                    })

            }
            return true
        } catch (error) {
            console.log(error)
        }


    }
    //--------------------------------------------------- set All ----------------------------------------------------------

    setName = (name) => {
        this.setState({ name: name })
    }
    setGender = (gender) => {
        this.setState({ gender: gender })
    }
    setAge = (age) => {
        this.setState({ age: age })
    }
    setUserid = (uuid) => {
        this.setState({ user_id: uuid })
    }
    setEmail = (e_mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e_mail)) {
            this.setState({ e_mail: e_mail })
        }
        // 
    }
    setCategory = (category) => {
        if (category === 'A') {
            this.setState({ category_A: true })
        } else if (category === 'B') {
            this.setState({ category_B: true })
        } else {
            this.setState({ category_C: true })
        }
    }
    //------------------------------------------------------- seat pan height -----------------------------------------------
    setScore_a1 = (page_1, point_1, point_2) => {
        if (point_1 !== '' && point_2 !== '') {
            console.log(`seat pan height:  page1= ${page_1} page2= ${point_1 + point_2} total= ${page_1 + (point_1 + point_2)}`)
            this.setState({ score_a1: page_1 + (point_1 + point_2), status_a1: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- depth ---------------------------------------------------------
    setScore_a2 = (page_1, page_2) => {
        console.log(`depth page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
        if (page_2 !== '') {
            this.setState({ score_a2: page_1 + page_2, status_a2: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- Arm Rest ------------------------------------------------------
    setScore_a3 = (page_1, point_1, point_2, point_3) => {
        if (point_1 !== '' && point_2 !== '' && point_3 !== '') {
            let page_2 = point_1 + point_2 + point_3
            console.log(`Arm Rest page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
            this.setState({ score_a3: page_1 + page_2, status_a3: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- Back Support --------------------------------------------------
    setScore_a4 = (page_1, point_1, point_2) => {
        if (point_1 !== '' && point_2 !== '') {
            let page_2 = point_1 + point_2
            console.log(`Back Support page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
            this.setState({ score_a4: page_1 + page_2, status_a4: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- Monitor -------------------------------------------------------
    setScore_b1 = (page_1, point_1, point_2, point_3, point_4, point_5) => {
        if (point_1 !== '' && point_2 !== '' && point_3 !== '' && point_4 !== '' && point_5 !== '') {
            let page_2 = (point_1 + point_2 + point_3 + point_4) + point_5
            console.log(`Monitor page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
            this.setState({ score_b1: page_1 + page_2, status_b1: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- Phone --------------------------------------------------------
    setScore_b2 = (page_1, point_1, point_2, point_3) => {
        if (point_1 !== '' && point_2 !== '' && point_3 !== '') {
            let page_2 = (point_1 + point_2) + point_3
            console.log(`Phone page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
            this.setState({ score_b2: page_1 + page_2, status_b2: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- Mouse --------------------------------------------------------
    setScore_c1 = (page_1, point_1, point_2, point_3, point_4) => {
        if (point_1 !== '' && point_2 !== '' && point_3 !== '' && point_4 !== '') {
            let page_2 = (point_1 + point_2 + point_3) + point_4
            console.log(`Mouse page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
            this.setState({ score_c1: page_1 + page_2, status_c1: true })
            return true
        } else {
            return false
        }

    }
    //------------------------------------------------------- Keyboard ------------------------------------------------------
    setScore_c2 = (page_1, point_1, point_2, point_3, point_4, point_5) => {
        if (point_1 !== '' && point_2 !== '' && point_3 !== '' && point_4 !== '' && point_5 !== '') {
            let page_2 = (point_1 + point_2 + point_3 + point_4) + point_5
            console.log(`Keyboard page1 ${page_1} page2 ${page_2} total ${page_1 + page_2}`)
            this.setState({ score_c2: page_1 + page_2, status_c2: true })
            return true
        } else {
            return false
        }

    }

    set_statusCategory_b = () => {
        let { score_b1, score_b2 } = this.state;
        let score_category_b = category_b(score_b1, score_b2)
        //console.log(`category_b =  ${score_category_b}`)
        let data = {
            category_B: true,
            score_category_b: score_category_b,
            score_b1: score_b1,
            score_b2: score_b2
        }
        AsyncStorage.mergeItem('data', JSON.stringify(data))
            .then(() => { this.setState({ category_B: true, score_category_b: score_category_b }) })

        return true
    }

    set_statusCategory_c = () => {
        let { score_c1, score_c2 } = this.state;
        let score_category_c = category_c(score_c2, score_c1)
        let data = {
            category_C: true,
            score_category_c: score_category_c,
            score_c1: score_c1,
            score_c2: score_c2
        }
        AsyncStorage.mergeItem('data', JSON.stringify(data))
            .then(() => { this.setState({ category_C: true, score_category_c: score_category_c }) })
        //console.log(`category_c =  ${category_b(score_c1, score_c2)}`)
        return true
    }


    //--------------------------------------------------- sum All ----------------------------------------------------------
    totalScore = () => {
        let { score_a1, score_a2, score_a3, score_a4, score_b1, score_b2, score_c1, score_c2 } = this.state
        let sum = score_a1 + score_a2 + score_a3 + score_a4 + score_b1 + score_b2 + score_c1 + score_c2
        this.setState({ totalScore: sum })
    }

    totalScore_category_a = (params) => {
        let { score_a1, score_a2, score_a3, score_a4 } = this.state
        if (params !== '') {
            let score_category_a = category_a((score_a3 + score_a4), (score_a1 + score_a2)) + params;
            let data = {
                category_A: true,
                score_category_a: score_category_a,
                score_a1: score_a1,
                score_a2: score_a2,
                score_a3: score_a3,
                score_a4: score_a4
            }
            AsyncStorage.mergeItem('data', JSON.stringify(data))
                .then(() => { this.setState({ score_category_a: score_category_a, category_A: true }) })
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <CategoryContext.Provider
                value={{
                    category_a: this.state.category_A,
                    category_b: this.state.category_B,
                    category_c: this.state.category_C,
                    name: this.state.name,
                    gender: this.state.gender,
                    age: this.state.age,
                    e_mail: this.getEmail,
                    score_a1: this.state.score_a1,
                    score_a2: this.state.score_a2,
                    score_a3: this.state.score_a3,
                    score_a4: this.state.score_a4,
                    score_b1: this.state.score_b1,
                    score_b2: this.state.score_b2,
                    score_c1: this.state.score_c1,
                    score_c2: this.state.score_c2,
                    rosa: this.state.rosa,
                    status_a1: this.state.status_a1,
                    status_a2: this.state.status_a2,
                    status_a3: this.state.status_a3,
                    status_a4: this.state.status_a4,
                    status_b1: this.state.status_b1,
                    status_b2: this.state.status_b2,
                    status_c1: this.state.status_c1,
                    status_c2: this.state.status_c2,
                    sendEmail: this.state.sendEmail,
                    isLoad: this.state.isLoad,
                    hasData: this.state.hasData,
                    setUserid: this.setUserid,
                    get_all_status_a: this.get_all_status_a,
                    get_all_status_b: this.get_all_status_b,
                    get_all_status_c: this.get_all_status_c,
                    getMissing: this.getMissing,
                    getScore_rosa: this.getScore_rosa,
                    getCategory: this.getCategory,
                    setCategory: this.setCategory,
                    setScore_a1: this.setScore_a1,
                    setScore_a2: this.setScore_a2,
                    setScore_a3: this.setScore_a3,
                    setScore_a4: this.setScore_a4,
                    setScore_b1: this.setScore_b1,
                    setScore_b2: this.setScore_b2,
                    setScore_c1: this.setScore_c1,
                    setScore_c2: this.setScore_c2,
                    totalScore_category_a: this.totalScore_category_a,
                    set_statusCategory_b: this.set_statusCategory_b,
                    set_statusCategory_c: this.set_statusCategory_c,
                    setName: this.setName,
                    setAge: this.setAge,
                    setGender: this.setGender,
                    setEmail: this.setEmail,
                    removeData: this.removeData
                }}
            >
                {this.props.children}
            </CategoryContext.Provider>
        )
    }
}

export { Context_text, CategoryContext }

