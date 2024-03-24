import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from "../Components/Title"
import ComputerNumber from '../Components/ComputerNumber'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from "../Components/CustomButton"


let minNumber = 1
let maxNumber = 100

export default function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState()


  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }

    const initialGuess = generateNumber(1, 100, userNumber)
    setCurrentGuess(initialGuess)

  }, [userNumber, currentGuess, onGameOver])





  const generateNumber = (min, max, different) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === different) {
      return generateNumber(min, max, different)
    } else {
      return randomNumber
    }
  }

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'Greater' && currentGuess > userNumber)) {
      Alert.alert('FAİLED !', 'FAİLED GUESS PLEASE TRY AGAİN', [{ text: 'Okaay Sr', style: 'cancel' }])
      return; //kodun çalışmasını durdur
    }

    if (direction == 'lower') {
      maxNumber = currentGuess
    } else {
      minNumber = currentGuess + 1
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess)
    setCurrentGuess(newRandomNumber)

  }


  return (
    <View style={styles.Container}>
      <Header>System Guess</Header>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında Mı Üstünde Mi ?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}><AntDesign color="white" name="minus" size={24}></AntDesign></CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, 'Greater')}><AntDesign name="plus" color="white" size={24}></AntDesign></CustomButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 50
  },
  card: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 30,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: 'bold',
    marginBottom: 15
  }

})
