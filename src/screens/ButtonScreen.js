import React from "react";
import { Text,View,StyleSheet,Button,TouchableOpacity } from "react-native";

function ButtonScreen(props)
{
    return (
    <View>
        <Text
            style={styles.text}>Bu Buton Ekranıdır.
        </Text>

        <Button 
            onPress={()=>
                props.navigation.navigate('Home')
              }
            title="Go to HomeScreen"/>
        <TouchableOpacity onPress={()=>props.navigation.navigate("List")}>
            <Text>
                Go to ListScreen   
            </Text>
        </TouchableOpacity>
    </View>
    );
}

const styles=StyleSheet.create({
text:{
    fontSize:30,
}
});
export default ButtonScreen;