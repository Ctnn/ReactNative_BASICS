import React from "react";
import {Text,View,Image,StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

function ImageScreen()
{
    return <View>

            <ImageDetail istegebagliad="Forest" imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail istegebagliad="Beach" imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail istegebagliad="Mountain"imageSource={require('../../assets/mountain.jpg')}/>

    </View>;
}

const styles= StyleSheet.create({
text:{
fontSize:30,
},

}
);

export default ImageScreen;