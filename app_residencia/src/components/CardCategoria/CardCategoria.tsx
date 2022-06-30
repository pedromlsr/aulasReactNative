import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements"

export const CardCategoria = (props) => {

   return (
      <TouchableOpacity style={styles.botaoCategoria}>
         <View style={styles.cardItensCategoria}>
            <Text style={styles.textoNomeCategoria}>{props.categoria.nomeCategoria}</Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   cardItensCategoria: {
      width: 100,
      height: 70,
      backgroundColor: '#333',
      justifyContent: 'center',
      borderRadius: 10,
      borderStyle: 'solid',
      borderColor: '#fff',
      borderWidth: 1
   },

   botaoCategoria: {
      alignItems: 'center',
      paddingRight: 10
   },

   textoNomeCategoria: {
      color: '#fff',
      textAlign: 'center'
   }
})