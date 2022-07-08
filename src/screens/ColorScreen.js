import React,{useState} from  'react';
import { View,StyleSheet,Button } from 'react-native';

function ColorScreen(){

    const [colors,setColors]=useState([]); //Başlangıç parametrem color olsun.
   // console.log(colors);asd

  return (<View>
    <Button title="Add a Color" onPress={()=>{
        colors.push([...colors,randomRGB()]); //Setcolors'ı çağırmış oluyoruz.Ve 3 noktanın amacı array'in bütün içindekilere bak ve ona ekle
        console.log(randomRGB)
    }}/>

    <View style={{height:500,width:500,backgroundColor:randomRGB().toString() }}/>
  </View>);
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red}, ${green}, ${blue})`;
    
  };



export default ColorScreen;