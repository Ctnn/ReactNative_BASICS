import React,{useState} from "react";
import { Text,View,StyleSheet,TextInput } from "react-native";

const InputScreen=()=>
{
    const [name,setName]=useState('');


    return <View>
       <TextInput
        style={styles.textinput}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=>setName(newValue)}
        />
        <Text>My Name Is {name}</Text>

    </View>
}

const styles=StyleSheet.create({
    textinput:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})

export default InputScreen;