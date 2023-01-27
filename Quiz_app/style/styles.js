import StyleSheet  from 'react-native';

	const styles_ =() =>
(
	{
    container: { flex: 1, padding: 16, paddingTop: 30,backgroundColor:'#0395E2'},
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' },
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
	containerItem: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding:50,
		margin:10
	},
	headerItem:{
		backgroundColor:'#0395E2',
		height:80,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoItem: {
		width:50,
		height:50,
		marginRight:10,
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
    cat:{
        paddingLeft:10,
        alignItems: 'center',

    },
    header:{
        backgroundColor:'#0395E2',
        height:"25vh",
        width:"100vw",
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
        flix:1,
        width:200,
        height:340,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    headerText:{
        marginLeft:10,
        fontSize:15,
        color:'#fff',
    },
    timerText:{
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        borderRadius:180,
        width:150,
        height:150,
        backgroundColor:'#0395E2',
    },
    timer2:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:180,
        width:125,
        height:125,
        backgroundColor:'#F2F2F2',
    },
    winContainer:{
        justifyContent: 'center',
        alignItems: 'center' 
    },
    winTitle:{
        fontSize:25,
        fontWeight: 'bold',
        color: '#7CB13F',

    },
    winPar:{
        fontSize:25,
    },
    faieldTitle:{
        fontSize:25,
        fontWeight: 'bold',
        color: '#B93B23',

    },
    faieldPar:{
        fontSize:25,
    },
    headerFaield:{
        backgroundColor:'#0395E2',
        height:"25vh",
        width:"100vw",
        justifyContent:"center",
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

      }

	}
	)
  
  
  export default styles_();