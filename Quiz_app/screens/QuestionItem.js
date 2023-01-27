import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Timer from '../components/timer'
import Mutli_answers from '../components/mutianswers'
import Yes_no from '../components/yes_no'
import styles_ from '../style/styles'

const QuestionItem = props => {

    let score=props.score
    let currentQuestion = props.questionItem
    let Q = currentQuestion.Q
    let A_correct = currentQuestion.A_correct
    let HowMany = props.HowMany
    let timer_SP=props.timer_SP

    const [savedQ,setsavedQ]=useState(currentQuestion)
    const [seconds, setSeconds] = useState(timer_SP);
    let results = {}
    const levelColors = () => {
        switch (props.questionItem.difficulty) {
            case 'hard':
                return '#B93B23';
            case 'medium':
                return '#E9950E';
            case 'easy':
                return '#7CB13F';
            default:
                break;
        }
    }

    /////////////////////TIMER//////////////
    useEffect(() => {
        if (currentQuestion!=savedQ) {
            setSeconds(timer_SP);
            setsavedQ(currentQuestion)
        }
        
        const interval = setInterval(() => {
            setSeconds(seconds - 1);
    
            if ((seconds === 0)) {
                setSeconds(timer_SP);
                props.onNextQuestion(currentQuestion.id,false,Q,"הזמן עבר",A_correct);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);
    //////////////////////////////////////////////////



    return (
        // let currentQuestion = props.questionItem
        // let Q = currentQuestion.Q
        // let A_correct = currentQuestion.A_correct
        // let HowMany = props.HowMany
        // let timer_SP=props.timer_SP
        //type "multiple"
                <View>
                    
                    <View style={styles.headerItem}>
                        <Text style={styles.headerText}>Question:{currentQuestion.id + 1}/{HowMany}</Text>
                        <Image style={styles.logoItem} source={require("../assets/logo.png")} />
                    </View>
                    <View tyle={styles.containerItem}>
                        <View style={styles.cat} >
                            <Text style={styles.catTitle}>score: {score}</Text>
                            <Text style={styles.catTitle}>Level: <Text style={{ color: levelColors() }}>{(currentQuestion.difficulty).toUpperCase()}</Text></Text>
                        </View>
                        <Text style={styles.questTitle}>{Q}</Text>
            { currentQuestion.type=="multiple"?<Mutli_answers currentQuestion={currentQuestion} onNextQuestion={props.onNextQuestion} setSeconds={setSeconds}/>:<Yes_no currentQuestion={currentQuestion} onNextQuestion={props.onNextQuestion}/>}
                        <Timer sp={timer_SP} runtimer={seconds} />

                    </View>
                </View>
        )

};

                

const styles = StyleSheet.create(styles_)


export default QuestionItem

