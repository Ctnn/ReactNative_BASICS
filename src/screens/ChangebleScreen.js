import React,{useState} from "react";
import {Text,Button,View,StyleSheet} from "react-native";

function ButtonSection(props)
{
    return <View>
<Button title={`More ${props.verilecekad}`} onPress={()=>props.onMore}/>
<Button title={`Less ${props.verilecekad}`} onPress={()=>props.onLess}/>
    </View>;
}

function ChangebleScreen()
{
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

return (<View>
<View>
    <Text style={styles.text}>Red Section</Text>
    <ButtonSection onMore={()=>setRed(red+1)} onLess={()=>setRed(red-1)} verilecekad="Red"/>

</View>
<View>
    <Text style={styles.text}>Green Section</Text>
    <ButtonSection onMore={()=>setGreen(green+1)}  onLess={()=>setGreen(green-1)} verilecekad="Green"/>

</View>
<View>
    <Text style={styles.text}>Blue Section</Text>
    <ButtonSection onMore={()=>setBlue(blue+1)} onLess={()=>setBlue(blue-1)} verilecekad="Blue"/>

</View>

<View style={{
    height:150, 
    width:150,
    backgroundColor:`rgb(${red},${green}),${blue}`}}/>
</View>);
}
const styles=StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:30,
    }
    });


export default ChangebleScreen;

