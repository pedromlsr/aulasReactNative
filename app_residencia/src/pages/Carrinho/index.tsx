import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Carrinho = () => {
   const { listarProdutos } = useContext(CarrinhoContext)

   const [carrinho, setCarrinho] = useState()

   useEffect(() => {
      getDadosCarrinho()
   }, [])

   const getDadosCarrinho = () => {
      setCarrinho(listarProdutos())
   }

   return (
      <FlatList
         data={carrinho}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item, index }) => {
            return (
               <View style={styles.containerFlatlist}>
                  <Text>{item.id_produto}</Text>
                  <Text>{item.sku}</Text>
                  <Text>{item.nome_produto}</Text>
                  <Text>{item.descricao_produto}</Text>
                  <Text>{item.preco_produto}</Text>
                  <TouchableOpacity
                     onPress={
                        () => console.log(`Deletar o produto de id ${item.id_produto}`)
                     }
                  >
                     <Icon name='trash' color='#000' type='font-awesome' size={36} />
                  </TouchableOpacity>
               </View>
            )
         }}
      />
   )
}

const styles = StyleSheet.create({
   containerFlatlist: {
      backgroundColor: '#997AE5',
      padding: 16,
      marginTop: 20,
      marginBottom: 20
   }
})

export default Carrinho;