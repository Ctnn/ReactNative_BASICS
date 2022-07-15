import React from "react";
import { StyleSheet,View,Text } from "react-native";

const BoxScreen=()=>{
     return <View style={styles.ViewStyle}>
<Text style={styles.textStyle}>Box Screen</Text>
     </View>;
}

const styles=StyleSheet.create({
    ViewStyle:{
        borderWidth:1,
        borderColor:"black",

    },
    textStyle:{
        borderWidth:1,
        borderColor:"red",
        marginVertical:20,
        marginHorizontal:20,
    }
})


export default BoxScreen;