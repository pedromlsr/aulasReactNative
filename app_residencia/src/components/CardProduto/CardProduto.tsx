import React from "react"
import { Card, Text } from "react-native-elements"

export const CardProduto = (props) => {

   return (
      <Card>
         <Card.Image source={require('../../assets/spiritIsland.png')} />
         <Card.Divider />
         <Card.Title>
            {props.produto.nomeProduto}
         </Card.Title>
         <Text>{props.produto.nomeFornecedor}</Text>
      </Card>
   )
}