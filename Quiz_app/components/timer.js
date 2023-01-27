
import { StyleSheet, Text, View } from 'react-native';


const Finsh = (props) => {
    let {sp,runtimer}=props
   

    // 1E90FF
    if (runtimer<Math.floor(0.4*sp))
return (
    <View style={[styles.timer_drow,{borderColor:"#FF8C00"}]}>
    <View style={styles.timer2}>
    <Text style={[styles.tIMER_text,{fontSize:37,fontWeight:600,color:"#FF0000"}]}>
        {sp} : {runtimer} 
        </Text>
    </View>
    </View>
    )
    else
   { return (

    <View style={[styles.timer_drow]}>
    <View style={styles.timer2}>
    <Text style={[styles.tIMER_text,{color:"#1E90FF"}]}>
        {sp} : {runtimer} 
        </Text>
    </View>
    </View>
 
        )}

}


export default Finsh;

const styles = StyleSheet.create({
    timer_drow:{
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        borderRadius:180,
        width:150,
        height:150,
        borderColor:'0395E2',
        borderWidth:15,
        fontWeight: 'bold',
    },
    tIMER_text: {
        alignSelf:'center',
        justifyContent: 'center',
        fontSize:30,
        fontWeight:"500",
      },
    timer2:{
        alignSelf:'center',
        justifyContent: 'center',
        width:"100%",
        height:"100%",
        borderRadius:180,
    },
});




