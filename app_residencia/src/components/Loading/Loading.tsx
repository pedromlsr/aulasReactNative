import { StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loading = () => {
   return (
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
         <LottieView source={require('../../assets/loading.json')} autoPlay loop />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      opacity: 0.8,
      zIndex: 1
   }
})

export default Loading;