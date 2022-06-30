import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { CategoriasContext } from '../../context/CategoriaContext';
import { LoadingContext } from '../../context/LoadingContext';
import { CardCategoria } from '../CardCategoria/CardCategoria';

const ScrollCategorias = () => {
   const { setIsLoading } = useContext(LoadingContext)
   const { categorias, setCategorias, setCategoriasInitial } = useContext(CategoriasContext)
   const { usuario } = useContext(AutenticacaoContext)
   console.log('Usuario: ' + JSON.stringify(usuario));

   // const [categorias, setCategorias] = useState<CategoriaType[]>([])

   useEffect(() => {
      setIsLoading(true)
      getDadosCategorias()
   }, [])

   const getDadosCategorias = async () => {
      AxiosInstance.get(
         `/categoria`,
         { headers: { 'Authorization': `Bearer ${usuario.token}` } }
      ).then(result => {
         console.log('Dados das categorias: ' + JSON.stringify(result.data));
         setCategorias(result.data)
         setCategoriasInitial(result.data)
         setIsLoading(false)
      }).catch((error) => {
         console.log('Erro ao carregar a lista de categorias - ' + JSON.stringify(error));
      })
   }

   return (
      <FlatList
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.idCategoria.toString()}
         data={categorias}
         renderItem={({ item }) => <CardCategoria categoria={item} />}
         initialNumToRender={3}
         style={styles.scrollCategorias}
      />
   )
}

const styles = StyleSheet.create({
   scrollCategorias: {
      flexGrow: 0,
   }
})

export default ScrollCategorias;