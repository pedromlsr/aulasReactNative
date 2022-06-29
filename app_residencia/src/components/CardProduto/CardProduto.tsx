import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Card, Text } from "react-native-elements"

export const CardProduto = (props) => {

   return (
      <TouchableOpacity>
         <Card containerStyle={styles.cardContainer}>
            <Card.Image source={require('../../assets/spiritIsland.png')} style={styles.cardImage} />
            <Card.Divider />
            <Card.Title style={styles.cardText}>
               {props.produto.nomeProduto}
            </Card.Title>
            <Text style={styles.cardText}>{props.produto.nomeFornecedor}</Text>
         </Card>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   cardContainer: {
      backgroundColor: '#333',
      height: 250,
      width: 200,
      borderRadius: 10,
      alignItems: 'center'
   },

   cardImage: {
      width: 150,
      height: 150
   },

   cardText: {
      color: '#fff',
      textAlign: 'center'
   }
})