import React,{useState} from "react";
import {Text,View,StyleSheet,Button} from 'react-native';


function CounterScreen()
{
    const[counter,setCounter]=useState(0);
return (
     <View>
            <Button title="Up Counter" onPress={()=>{
                    setCounter(counter+1);             }}/>
                     
<Button title="Down Counter"
onPress={()=>{
    setCounter(counter-1);
}}
/>
<Text>Current Count: {counter}</Text>
      
</View>

);
}

export default CounterScreen;