import React from "react";
import {Text,Button,View,StyleSheet} from "react-native";

function ButtonSection(props)
{
    return <Button title={props.verilecekad}/>
}

function ChangebleScreen()
{
return (<View>
<View>
    <Text style={styles.text}>Red Section</Text>
    <ButtonSection verilecekad="More Red"/>
    <ButtonSection verilecekad="Less Red"/>

</View>
<View>
    <Text style={styles.text}>Green Section</Text>
    <ButtonSection verilecekad="More Green"/>
    <ButtonSection verilecekad="Less Green"/>

</View>
<View>
    <Text style={styles.text}>Blue Section</Text>
    <ButtonSection verilecekad="More Blue"/>
    <ButtonSection verilecekad="Less Blue"/>

</View>
</View>);
}
const styles=StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:30,
    }
    });


export default ChangebleScreen;

