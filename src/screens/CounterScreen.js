import React from "react";
import {Text,View,StyleSheet,Button} from 'react-native';


function ButtonComponent(props)
{
return <Button title={props.buttonname}/>
}

function CounterScreen()
{
return (
<ButtonComponent buttonname="Up Counter"/>
<ButtonComponent buttonname="Down Counter"/>
);
}

export default CounterScreen;