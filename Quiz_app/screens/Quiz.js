import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Finsh from '../components/finsh';
import QuestionItem from './QuestionItem.js';

const Quiz = (props) => {
  let Questions_Arr = [];
  let score=0;
  const [nowQuestion, setnowQuestion] = useState(0);
  const [TheScore, setTheScore] = useState(0);
  const [SpeedUpRate, setSpeedUpRate] = useState(0);
  const [saved_results, setSavedResults] = useState([])

let data=props.route.params.data
const mod=props.route.params.mod
//let timer_mod={ 'HARD': 10, 'EASY': 30, 'TIME': 20 }

let questionid=0;
data.forEach(question => {
      //make all answer key with random order
      question["all_answers"] = [...question.incorrect_answers]
      let where = Math.floor(Math.random() * question.incorrect_answers.length + 1)
      question.all_answers.splice(where, 0, question.correct_answer)
      const Question_NEW = {
        id: questionid++,
        type: question.type,
        category: question.category,
        difficulty: question.difficulty,
        Q: question.question,
        A: question.all_answers,
        A_correct: question.correct_answer,
        A_incorrect: question.incorrect_answers

      }
       Questions_Arr.push(Question_NEW);
    })


const [timer_mod, settimer_mod] =useState( {'HARD': 10, 'EASY': 30, 'TIME': Questions_Arr.length - SpeedUpRate })
const NextSpeedUpRate = () => {
  settimer_mod({ 'HARD': 10, 'EASY': 30, 'TIME': Questions_Arr.length - SpeedUpRate })
  setSpeedUpRate(SpeedUpRate => ++SpeedUpRate)
}


////    setSavedResults] = useState([{ "Q": "השאלה", "A_correct": "התשובה הנכונה", "A_": "התשובה " }])
    // next question
    const onNextQuestion = (Qnumber,is_true,Q,answered_one,true_answer) => {
      let results= saved_results
      console.log(Qnumber,is_true,Q,answered_one,true_answer)
      results.push( [Q ,(true_answer==answered_one?"🟢":"🔴")+answered_one, true_answer  ,true_answer==answered_one?"✅":"❌"])
      setSavedResults(results)
       score=TheScore
      if (is_true==true) setTheScore(++score)
      NextSpeedUpRate()
      setnowQuestion(Qnumber+1)
      
    }



    if (nowQuestion >= Questions_Arr.length-1 )
    return <Finsh
    result={saved_results}
      score={TheScore}
      HowMany={Questions_Arr.length}
     
    />
    

    

  return <QuestionItem
  questionItem={Questions_Arr[nowQuestion]}
  score={TheScore}
  HowMany={Questions_Arr.length}
  timer_SP={timer_mod[mod]}
  onNextQuestion={onNextQuestion}
/>







      }

   

  
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 50
  },
  loaddata: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default Quiz