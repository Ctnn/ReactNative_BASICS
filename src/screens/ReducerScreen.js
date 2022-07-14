import React,{useReducer} from "react";
import {View,Text,StyleSheet} from "react-native";


function reducer(state,action)
{
//HowtoChangeStateObject mean action
// state==={red:number,green:number,blue:number};
// action==={colorToChange:'red}|| 'green , amount:15|-15}

switch (action.colorToChange)
{
    case 'red':

        //Never going to do:
                   // state.red=state.red-15;
        //Just to do:
        return {...state,red:state.red+action.amount};
        //...state==={red:0,green:0,blue:0,...};
r
    case 'green':
    case 'blue':
    default:
        return null;
}
}
function ReducerScreen()
{


    const[state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});
return null;
}

export default ReducerScreen;