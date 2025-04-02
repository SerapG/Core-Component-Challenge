import { View, Text,SafeAreaView,Image,StyleSheet,ScrollView,Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get("window")

const Card = ({ }) => {
    return (
      <SafeAreaView style={styles.card}>
        <Image source={require("./../assets/images/rakun.jpg")} style={styles.image} />
        <Text style={styles.title}>Rakun Roka</Text>
        <Text style={styles.description}>Selam arkadaşlar Ben Rakun Roka! 13 yaşındayım. Yarışmayı severim ve etrafı koklamayı. Arkadaşlarım bana kokan rakun derler. Suyla aram pek iyi değil. Bu benim suçum değil. Herkesin travmaları olabilir. Saygı duymak lazım.</Text>
      </SafeAreaView>
    );
  };
  

const styles =StyleSheet.create ({
    card: {
        width: width * 0.8,
        marginBottom: height * 0.04,
        marginTop: height * 0.08,
        alignItems:"center",
        backgroundColor: "pink",
        borderWidth: 1,
        borderColor: "seagreen",
        borderRadius: 10, 
        padding: 15, 
        margin: 10, 
    },
    image: {
        width: "100%",
        height: height *0.4,
        borderRadius: 10,
        marginBottom:height *0.02
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:10,
        color:"seagreen"
    },
    description:{
        fontSize:14,
        color:"seagreen",
        marginTop:5,
        fontWeight:"bold",
    },
    
    
})

export default Card