import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Text, View,Image } from 'react-native';

const Mutli_answers = (p) => {
  let A_correct=p.currentQuestion.A_correct;
  let id=p.currentQuestion.id
  let onNextQuestion= p.onNextQuestion
  let Q=p.currentQuestion.Q
  let A=p.currentQuestion.A
 let setSeconds=p.setSeconds

 
  function randomizeArray(arr) {
    var newArray = arr.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }
  const [answers, setTanswers] = useState(randomizeArray(p.currentQuestion.A));
if (p.currentQuestion.A!=answers )setTanswers(p.currentQuestion.A)

return (
    <View >
{
   answers.map((answer, index) => (
        <TouchableOpacity style={styles.btn} key={index} onPress={() => {
            onNextQuestion(id,answer==A_correct,Q,answer,A_correct);
        }}>
            <Text style={styles.btn_text}>{answer}</Text>
        </TouchableOpacity>
    ))
}


</View>

    
    )

}




const styles = StyleSheet.create({
    btn:{
        width:'100%',
        backgroundColor:'#EEEAE9',
        padding:15,
        borderRadius:12,
        marginBottom:12,
        shadowColor: '#000000',
        shadowOpacity:0.1,
        shadowOffset: {width:0, height:3},
        shadowRadius: 2, elevation:5,
    },

    
    btn_text: {
      fontSize:22,
      textAlign: 'center',
    },
    score:{
      fontSize:15,
      color:'#707070',
      marginBottom:30,
      paddingLeft:10,
      
    },
    questTitle: {
      fontSize:28,
      marginBottom:40,
      color:'#707070',
      margin:10,
      textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:50,
        margin:10
    },
    cat:{
        paddingLeft:10,
        alignItems: 'center',

    },
    header:{
        backgroundColor:'#0395E2',
        height:80,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerWin:{
        backgroundColor:'#7CB13F',
        height:80,
        justifyContent:'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    banner: {
        height:500,
        width:500,
      },
      bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:200,
      },
    logo: {
        width:50,
        height:50,
        marginRight:10,
    },
    headerText:{
        marginLeft:10,
        fontSize:20,
        fontWeight:"600",
        color:'#fff',
    },
    winContainer:{
        justifyContent: 'center',
        alignItems: 'center' 
    },
    winTitle:{
        fontSize:80,
        fontWeight: 'bold',
        color: '#7CB13F',
    },
    winPar:{
        fontSize:25,
    },
    faieldTitle:{
        fontSize:80,
        fontWeight: 'bold',
        color: '#B93B23',
    },
    faieldPar:{
        fontSize:25,
    },
    headerFaield:{
        backgroundColor:'#B93B23',
        height:80,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        padding:16,
        borderRadius:16,
        alignItems: 'center',
        marginBottom:10,
      },
      buttonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#707070',
      },
      catTitle:{
        fontSize:20,
        fontWeight:'bold',

      },
});

export default Mutli_answers;
