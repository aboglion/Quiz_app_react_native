import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Title from '../components/title'
import React, { useState, useEffect } from 'react';




const Home = ({navigation}) => {
  const [data, setdata] = useState([]);
  useEffect( () => {
  async function getdata(){
    const url = 'https://opentdb.com/api.php?amount=50&category=18';
    const response = await fetch(url, { method: 'get' });
    const response_data = await response.json();
    setdata(response_data.results)
  }
  if (data.length==0)  getdata() 

})

  
  if (data.length==0) 
      {  
        console.log('kk')
        return (
          <View>
            {
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25, margin: '20%' }} >מתחבר לשרת...</Text>
            }
          </View>
        );
      }
    
    
    return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
       <Image source={require("../assets/splash_logo.png")}  style={styles.banner} resizeMode='contain' />
        <Text style={styles.buttonText}>CHOOSE GAME MODE</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Quiz" ,
      {data:data.filter((question) => question.difficulty == "hard"),mod:"HARD"})} 
      style={[styles.button,{backgroundColor:"red"}]} >
        <Text style={styles.buttonText}>HARD</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Quiz" ,
      {data:data.filter((question) => question.difficulty == "easy"),mod:"EASY"})} 
      style={[styles.button,{backgroundColor:"green"}]} >
        <Text style={styles.buttonText}>EASY</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Quiz" ,
      {data:data.filter((question) => question.difficulty == "medium"),mod:"TIME"})}
       style={[styles.button,{backgroundColor:"#FF8C00"}]} >
        <Text style={styles.buttonText}>Time is running out</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#0395E2',
    paddingTop:4,
    paddingHorizontal:5,
    height:'100%',
  },
  banner: {
    height:500,
    width:500,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginBottom:200,
  },

  button:{
    width:'100%',
    backgroundColor:'#FFFFFF',
    padding:16,
    borderRadius:16,
    alignItems: 'center',
    marginBottom:40,
  },
  buttonText:{
    fontSize:24,
    fontWeight:'bold',
  }
})
