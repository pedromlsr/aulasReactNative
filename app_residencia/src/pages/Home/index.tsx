import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import { Text, Icon, Card, Input, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
   // const [search, setSearch] = useState('')

   return (
      <ScrollView style={styles.container}>
         <ScrollView style={styles.scrollCategorias} horizontal={true}>
            <TouchableOpacity
               onPress={() => console.log('Categoria 1 foi clicada')}
               style={styles.botaoCategoria}
            >
               <View style={styles.viewItensCategoria}>
                  <Text style={styles.textoNomeCategoria}>{'Categoria 1'}</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => console.log('Categoria 2 foi clicada')}
               style={styles.botaoCategoria}
            >
               <View style={styles.viewItensCategoria}>
                  <Text style={styles.textoNomeCategoria}>{'Categoria 2'}</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => console.log('Categoria 3 foi clicada')}
               style={styles.botaoCategoria}
            >
               <View style={styles.viewItensCategoria}>
                  <Text style={styles.textoNomeCategoria}>{'Categoria 3'}</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => console.log('Categoria 4 foi clicada')}
               style={styles.botaoCategoria}
            >
               <View style={styles.viewItensCategoria}>
                  <Text style={styles.textoNomeCategoria}>{'Categoria 4'}</Text>
               </View>
            </TouchableOpacity>
         </ScrollView>
         <Text>{'Recentes'}</Text>
         <ScrollView horizontal={true}>
            <TouchableOpacity>
               <Card>
                  <Card.Image source={require('../../assets/spiritIsland.png')} />
                  <Card.Divider />
                  <Card.Title>
                     Título
                  </Card.Title>
                  <Text>Descrição</Text>
               </Card>
            </TouchableOpacity>
            <TouchableOpacity>
               <Card>
                  <Card.Image source={require('../../assets/spiritIsland.png')} />
                  <Card.Divider />
                  <Card.Title>
                     Título
                  </Card.Title>
                  <Text>Descrição</Text>
               </Card>
            </TouchableOpacity>
            <TouchableOpacity>
               <Card>
                  <Card.Image source={require('../../assets/spiritIsland.png')} />
                  <Card.Divider />
                  <Card.Title>
                     Título
                  </Card.Title>
                  <Text>Descrição</Text>
               </Card>
            </TouchableOpacity>
            <TouchableOpacity>
               <Card>
                  <Card.Image source={require('../../assets/spiritIsland.png')} />
                  <Card.Divider />
                  <Card.Title>
                     Título
                  </Card.Title>
                  <Text>Descrição</Text>
               </Card>
            </TouchableOpacity>
         </ScrollView>
      </ScrollView>

      // <SafeAreaView style={styles.container}>
      //    <StatusBar backgroundColor='#7054B6' />
      //    <View style={styles.menuTop}>
      //       <Icon name='navicon' color='#000' type='font-awesome' size={24} />
      //       <Text style={styles.pageTitle}>Delivery</Text>
      //    </View>
      //    <View style={styles.content}>
      //       <Input
      //          placeholder='Ex: Produto...'
      //          onChangeText={setSearch}
      //          value={search}
      //          leftIcon={<Icon name='search' color='#000' type='font-awesome' size={24} />}
      //          placeholderTextColor={'#000'}
      //          inputStyle={styles.inputPesquisa}
      //       />
      //       <ScrollView style={styles.categorias} horizontal showsHorizontalScrollIndicator={false}>
      //          <Text style={styles.cardCategoria}>Categoria 1</Text>
      //          <Text style={styles.cardCategoria}>Categoria 2</Text>
      //          <Text style={styles.cardCategoria}>Categoria 3</Text>
      //          <Text style={styles.cardCategoria}>Categoria 4</Text>
      //          <Text style={styles.cardCategoria}>Categoria 5</Text>
      //       </ScrollView>
      //       <View style={styles.recentes}>
      //          <Text style={styles.sectionTitle}>Recentes</Text>
      //          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      //             <Card>
      //                <Text>Recente 1</Text>
      //             </Card>
      //             <Card>
      //                <Text>Recente 2</Text>
      //             </Card>
      //             <Card>
      //                <Text>Recente 3</Text>
      //             </Card>
      //             <Card>
      //                <Text>Recente 4</Text>
      //             </Card>
      //             <Card>
      //                <Text>Recente 5</Text>
      //             </Card>
      //          </ScrollView>
      //       </View>
      //       <View style={styles.destaques}>
      //          <Text style={styles.sectionTitle}>Destaques</Text>
      //          <ScrollView>
      //             <Card>
      //                <Text>Destaque 1</Text>
      //             </Card>
      //          </ScrollView>
      //       </View>
      //    </View>
      //    <View style={styles.menuBottom}>
      //       <Icon name='home' color='#000' type='font-awesome' size={24} />
      //       <Icon name='search' color='#000' type='font-awesome' size={24} />
      //       <Icon name='heart' color='#000' type='font-awesome' size={24} />
      //       <Icon name='shopping-cart' color='#000' type='font-awesome' size={24} />
      //    </View>
      // </SafeAreaView >
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#997AE5',
      padding: 16
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
   }


   // container: {
   //    flex: 1,
   //    backgroundColor: '#997AE5',
   //    justifyContent: 'center',
   //    alignItems: 'stretch',
   //    height: 'auto'
   // },

   // menuTop: {
   //    flex: 1,
   //    backgroundColor: '#7054B6',
   //    flexDirection: 'row',
   //    alignItems: 'center',
   //    paddingLeft: 10
   // },

   // content: {
   //    flex: 10
   // },

   // menuBottom: {
   //    flex: 1,
   //    backgroundColor: '#7054B6',
   //    flexDirection: 'row',
   //    justifyContent: 'space-around',
   //    alignItems: 'center'
   // },

   // inputPesquisa: {
   //    backgroundColor: '#fff',
   //    borderRadius: 10,
   //    marginTop: 10,
   //    marginLeft: 10
   // },

   // pageTitle: {
   //    fontWeight: 'bold',
   //    fontSize: 24,
   //    marginLeft: 20
   // },

   // sectionTitle: {
   //    fontWeight: 'bold',
   //    fontSize: 18,
   //    marginLeft: 15
   // },

   // categorias: {
   //    flex: 1
   // },

   // cardCategoria: {
   //    width: 120,
   //    height: 90,
   //    marginHorizontal: 10,
   //    backgroundColor: '#333',
   //    color: '#fff',
   //    borderRadius: 20,
   //    textAlign: 'center',
   //    textAlignVertical: 'center',
   //    fontWeight: 'bold'
   // },

   // recentes: {
   //    flex: 2,
   //    paddingVertical: 10
   // },

   // destaques: {
   //    flex: 3,
   // }
})

export default Home;