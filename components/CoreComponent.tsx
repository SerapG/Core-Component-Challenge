import React from "react";
import { View,Text,Button,TouchableOpacity } from "react-native";

const CoreComponent =  ()=> {
    const pressButton =() => {
        console.log("Hello World!")
        alert("Hello World!")
    }
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Button title="Click Me!" onPress={pressButton}></Button>
    <Text>
        <Text style={{fontWeight:"bold"}}>Hello from Core Component</Text>
    </Text>
    
</View>
);
}


export default CoreComponent