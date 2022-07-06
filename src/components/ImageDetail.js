import React from "react";
import {Text,View,Image,StyleSheet} from "react-native";

function ImageDetail(props)
{
    console.log(props);
    return <View>
        <Image 
        style={{
            height:200,
            width:200,
        }}
        source={props.imageSource}/> 
        <Text>{props.istegebagliad} </Text>
                                    
    </View>;
}

const styles= StyleSheet.create({
text:{
fontSize:30,
},

}
);

export default ImageDetail;