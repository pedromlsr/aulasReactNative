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
            <Text style={styles.nomeProduto}>{nome_produto}</Text>
            <Text style={styles.precoProduto}>R${preco_produto}</Text>
            <TouchableOpacity
               style={styles.botaoComprar}
               onPress={() => handleAddProduto()}
            >
               <Text style={styles.botaoComprarTexto}>COMPRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.botaoFavoritar}
            >
               <Text style={styles.botaoFavoritarTexto}>FAVORITAR</Text>
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
   },

   nomeProduto: {
      fontSize: 24,
      color: '#000',
      marginBottom: 20,
      fontWeight: 'bold'
   },

   precoProduto: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      marginBottom: 20
   },

   botaoComprar: {
      backgroundColor: '#000',
      padding: 10,
      width: '70%',
      marginBottom: 20
   },

   botaoComprarTexto: {
      color: '#fff',
      textAlign: 'center'
   },

   botaoFavoritar: {
      width: '70%',
      padding: 10,
      borderBottomWidth: 2,
      borderColor: '#000'
   },

   botaoFavoritarTexto: {
      color: '#000',
      textAlign: 'center'
   }
})

export default Produto;
