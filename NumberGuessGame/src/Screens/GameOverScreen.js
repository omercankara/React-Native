import { StyleSheet, Text, View } from 'react-native'
import Title from "../Components/Title"
import React from 'react'
import CustomButton from '../Components/CustomButton'

export default function GameOverScreen({onStartNewGame}) {
  return (
    <View style={styles.Container}>
      <Title>Success ! Game is completed</Title>
     <CustomButton onPress={onStartNewGame}>New Game</CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  result:{
    fontSize:20,
    textAlign:"center",
    color:"white",
    fontWeight:'bold',
    marginBottom:20
  },
  countAndNumber:{
    color:"red"
  }
})