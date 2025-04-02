import React from "react";
import { SafeAreaView,StyleSheet,Text,View } from "react-native";
import Card from "@/components/Card";
import ResponsiveButton from "@/components/ResponsiveButton";



const card = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Card/>
        </SafeAreaView>
      )
}
 

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#FFFFFF"
  },
  text:{
    fontSize:38,
    fontWeight:"bold",
    color:"pink"
  }
})
export default card;