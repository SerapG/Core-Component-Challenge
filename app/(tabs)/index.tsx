import React from "react";
import { SafeAreaView,StyleSheet,Text,View } from "react-native";
import ResponsiveButton from "@/components/ResponsiveButton";


const index = () => {

  const handlePress = () => {
    console.log('Butona Tiklandi')
  }
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello My Friend </Text>
        <ResponsiveButton title="Button" onPress={handlePress}/>
      </View>
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
export default index;