import {StyleSheet} from 'react-native';
import allStyle from './allStyle';

export default headerStyle = StyleSheet.create({
    container:{
        backgroundColor: "#464646"
    },
    contentContainer:{
        flexDirection:'row',
        justifyContent:"flex-start"
    },
    title:{
        ...allStyle.text,
        fontSize:17,
        textAlignVertical:"center",
        textAlign: "center",
        width: '100%'
    },
    icon:{
        fontSize:20,
        marginRight:10,
        alignItems:'center',
        textAlignVertical:"center",
        textAlign:'center',
        width:30,
        height:30
    },
    contentColor:{
        color:"#fff"
    }
})
