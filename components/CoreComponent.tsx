import React from "react";
import { View,Text,Button,TouchableOpacity } from "react-native";
import { useState} from "react";


const CoreComponent =  ()=> {
   const [showMessage,setShowMessage] = useState(false)

   const PressButton = () => {
    setShowMessage(true)
   }

    const pressButton =() => {
        console.log("Hello World!")
        alert("Hello World!")
    }
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontWeight:"bold",color:"seagreen"}}>Hello from Core Component</Text>
        
    </View>

    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Button title="Click Me for Alert!" onPress={pressButton}></Button>
    </View>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Button title="Click Me!" onPress={PressButton}></Button>
    </View>
    {showMessage && (
        <Text style={{position:"absolute",bottom:50,alignSelf:"center",fontWeight:"bold",fontSize:18}}>Hello World!</Text>
    )}
    
</View>
);
}


export default CoreComponent