import React, { useContext } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { CarrinhoContext } from '../../context/CarrinhoContext'

const Produto = ({ route, navigation }) => {
   const {
      id_produto,
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto
   } = route.params
   const { adicionarProduto } = useContext(CarrinhoContext)

   const handleAddProduto = () => {
      console.log('oi');

      adicionarProduto(
         sku,
         nome_produto,
         descricao_produto,
         preco_produto,
         imagem_produto
      )
   }

   return (
      <View style={styles.container}>
         <View style={styles.containerImagem}>
            <Text>Imagem</Text>
         </View>
         <View style={styles.containerProduto}>
            <Text>{ }</Text>
            <Text>{ }</Text>
            <TouchableOpacity onPress={() => handleAddProduto()}>
               <Text>COMPRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text>FAVORITAR</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#997AE5',
      padding: 16,
      alignItems: 'stretch',
      justifyContent: 'space-between',
      flexDirection: 'row'
   },

   containerImagem: {
      width: '50%'
   },

   containerProduto: {
      width: '50%'
   }
})

export default Produto;
