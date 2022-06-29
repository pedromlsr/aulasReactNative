import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert, Keyboard } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import Loading from '../../components/Loading/Loading';
import { LoadingContext } from '../../context/LoadingContext';

const Login = ({ navigation }) => {
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const { isLoading, setIsLoading } = useContext(LoadingContext)
   const { login } = useContext(AutenticacaoContext)

   const handleLogin = async (email: string, senha: string) => {
      Keyboard.dismiss()
      setIsLoading(true)
      console.log(`Email: ${email} - Senha: ${senha}`)

      const respostaLogin = await login(email, senha)

      if (!respostaLogin) {
         setIsLoading(false)
         Alert.alert(
            'Erro:',
            '',
            [
               { text: 'OK' },
               { text: 'Não foi possível realizar o login.' },
            ]
         )
      } else {
         setIsLoading(false)
         navigation.navigate('HomeScreen')
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.textoEntrada}>{'Bem-vindo!'}</Text>
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
            secureTextEntry={true}
         />
         <Button
            title='Entrar'
            onPress={() => handleLogin(email, senha)}
            buttonStyle={styles.buttonLogin}
            titleStyle={styles.buttonTextLogin}
         />
         {isLoading ? <Loading /> : null}
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
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 10
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