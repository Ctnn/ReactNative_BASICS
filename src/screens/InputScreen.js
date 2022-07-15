import React,{useState} from "react";
import { Text,View,StyleSheet,TextInput } from "react-native";

const InputScreen=()=>
{
    const [password,setPassword]=useState('');


    return <View>
       <TextInput
        style={styles.textinput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue)=>setPassword(newValue)}
        />
        {password.length<4 ? <Text>Password must be longer than 5 characters.</Text> : <Text>That was correct</Text>}

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