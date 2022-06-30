import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Card, Text } from "react-native-elements"

export const CardDestaque = (props) => {

   return (
      <TouchableOpacity>
         <Card containerStyle={styles.cardContainer}>
            <Card.Image source={require('../../assets/spiritIsland.png')} style={styles.cardImage} />
            <Card.Divider />
            <Card.Title style={styles.cardText}>
               Teste
            </Card.Title>
            <Text style={styles.cardText}>Teste</Text>
         </Card>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   cardContainer: {
      backgroundColor: '#333',
      height: 290,
      width: 350,
      borderRadius: 10,
      alignItems: 'center',
      alignSelf: 'center',
      padding: 0,
      marginBottom: 30
   },

   cardImage: {
      width: 350,
      height: 200,
      borderRadius: 10
   },

   cardText: {
      color: '#fff',
      textAlign: 'left',
      paddingLeft: 10
   }
})