import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import styles_ from '../style/styles'

const Finsh = (p) => {

    let grad=Math.round((p.score/p.HowMany)*100)
    let iswin=grad>=55
    let state = {
        tableHead: ["השאלה","תשובה שלך","התשובה הנכונה","❎"],
        tableData: p.result
      }
    

    console.log(p.result);
    console.log(state)
   if (iswin)
  return (
      
    <View style={styles.container}>
  <View style={styles.headerFaield}>
  <Image style={styles.logo} source={require("../assets/success_character.png")} resizeMode='contain'  />
      <Text style={styles.winTitle}>SUCCESS - Grade is :{grad}</Text>
  </View>
  <View style={styles.container}>

    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
      <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
      <Rows data={state.tableData} textStyle={styles.text}/>
    </Table>
    </View>

  </View>
)

    return (
      
        <View style={styles.container}>
      <View style={styles.headerFaield}>
      <Image style={styles.logo} source={require("../assets/failed_character.png")} resizeMode='contain'  />
          <Text style={styles.faieldTitle}>FAILD - Grade is :{grad}</Text>
      </View>
      <View style={styles.container}>

        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        </View>

      </View>
    )

};


export default Finsh;



const styles = StyleSheet.create(styles_)
