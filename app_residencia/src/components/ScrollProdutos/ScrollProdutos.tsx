import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ProdutoType } from '../../models/ProdutoType';
import { CardProduto } from '../CardProduto/CardProduto';

const ScrollProdutos = (props) => {
   const { setIsLoading } = useContext(LoadingContext)
   const { usuario } = useContext(AutenticacaoContext)
   console.log('Usuario: ' + JSON.stringify(usuario));

   const [produtos, setProdutos] = useState<ProdutoType[]>([])

   useEffect(() => {
      setIsLoading(true)
      getDadosProdutos()
   }, [])

   const getDadosProdutos = async () => {
      AxiosInstance.get(
         `/produto`,
         { headers: { 'Authorization': `Bearer ${usuario.token}` } }
      ).then(result => {
         console.log('Dados dos produtos: ' + JSON.stringify(result.data));
         setProdutos(result.data)
         setIsLoading(false)
      }).catch((error) => {
         console.log('Erro ao carregar a lista de produtos - ' + JSON.stringify(error));
      })
   }

   return (
      <FlatList
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.idProduto.toString()}
         data={produtos}
         renderItem={({ item }) => <CardProduto produto={item} navigation={props.navigation} />}
         initialNumToRender={2}
         style={styles.scrollProdutos}
      />

      //    {
      //       produtos.map((k, i) => (
      //          <TouchableOpacity key={i}>
      //             <CardProduto produto={k} />
      //          </TouchableOpacity>
      //       ))
      //    }
   )
}

const styles = StyleSheet.create({
   scrollProdutos: {
      flexGrow: 0,
   }
})

export default ScrollProdutos;