import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';

const Login = ({ navigation }) => {
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')

   const handleLogin = ({ email, senha }) => {
      console.log(`Email: ${email} - Senha: ${senha}`)
      navigation.navigate('Home')
   }

   return (
      <View style={styles.container}>
         <Text style={styles.textoEntrada}>{'Bem-vindo'}</Text>
         <Input
            placeholder='E-mail'
            onChangeText={setEmail}
            value={email}
            leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
            // inputStyle={ }
            placeholderTextColor={'#000'}
         />

         <Input
            placeholder='Senha'
            onChangeText={setSenha}
            value={senha}
            leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
            // inputStyle={ }
            placeholderTextColor={'#000'}
         />
         <Button
            title='Entrar'
            onPress={() => handleLogin({ email, senha })}
            buttonStyle={styles.buttonLogin}
            titleStyle={styles.buttonTextLogin}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#7054B6',
      padding: 16,
      alignItems: 'stretch',
      justifyContent: 'center'
   },

   textoEntrada: {
      fontWeight: 'bold',
      fontSize: 24
   },

   buttonLogin: {
      backgroundColor: '#fff',
      borderRadius: 20,
   },

   buttonTextLogin: {
      color: '#000'
   }
})

export default Login;