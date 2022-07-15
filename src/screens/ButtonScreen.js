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

             <Button 
            onPress={()=>
                props.navigation.navigate('List')
              }
            title="Go to ListScreen"/>

             <Button 
            onPress={()=>
                props.navigation.navigate('Image')
              }
            title="Go to ImageScreen"/>

                <Button 
            onPress={()=>
                props.navigation.navigate('Counter')
              }
            title="Go to CounterScreen"/>

            <Button 
            onPress={()=>
                props.navigation.navigate('Color')
              }
            title="Go to ColorScreen"/>

<Button 
            onPress={()=>
                props.navigation.navigate('Changeble')
              }
            title="Go to ChangebleScreen"/>

<Button 
            onPress={()=>
                props.navigation.navigate('Input')
              }
            title="Go to InputScreen"/>

<Button 
            onPress={()=>
                props.navigation.navigate('Box')
              }
            title="Go to BoxScreen"/>

    </View>
    );
}

const styles=StyleSheet.create({
text:{
    fontSize:30,
}
});
export default ButtonScreen;