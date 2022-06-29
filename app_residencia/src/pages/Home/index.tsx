import React, { useState, useContext } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Text, Icon, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from '../../components/Loading/Loading';
import ScrollCategorias from '../../components/ScrollCategorias/ScrollCategorias';
import ScrollProdutos from '../../components/ScrollProdutos/ScrollProdutos';
import { CategoriasContext } from '../../context/CategoriaContext';
import { LoadingContext } from '../../context/LoadingContext';
import { SearchContext } from '../../context/SearchContext';

const Home = ({ navigation }) => {
   // console.log('Token: ' + token);
   // console.log('Params: ' + JSON.stringfy(route));

   const { isLoading } = useContext(LoadingContext)
   const { search, setSarch } = useContext(SearchContext)
   const { categorias, setCategorias } = useContext(CategoriasContext)

   const handleFilter = () => {

   }

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar backgroundColor='#333' />
         <Input
            placeholder='Ex: Categoria...'
            placeholderTextColor={'#333'}
            value={search}
            onChangeText={(text) => setSearch(text)}
            leftIcon={<Icon name='search' color='#000' type='font-awesome' size={24} />}
            rightIcon={
               <TouchableOpacity onPress={handleFilter}>
                  <Icon name='filter-list' color='#000' type='font-awesome5' size={24} />
               </TouchableOpacity>
            }
            inputContainerStyle={styles.inputPesquisa}
         />
         <ScrollCategorias />
         <Text style={styles.sectionTitle}>{'Recentes'}</Text>
         <ScrollProdutos />
         {isLoading ? <Loading /> : null}
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#997AE5',
      padding: 16
   },

   inputPesquisa: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 10
   },

   scrollCategorias: {
      flexGrow: 0,
   },

   viewItensCategoria: {
      width: 120,
      height: 120,
      backgroundColor: '#333',
      justifyContent: 'center'
   },

   botaoCategoria: {
      alignItems: 'center',
      paddingRight: 10
   },

   textoNomeCategoria: {
      color: '#fff',
      textAlign: 'center'
   },

   sectionTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 15,
      marginTop: 20
   }
})

export default Home;