import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton'
import Title from '../Components/Title'


export default function GameStartScreen({ onPress, onSendNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  const resetHandler = () => {
    setEnteredNumber('')
  }

  const confirmHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert('Geçersiz Sayı', 'Sayı 1 ile 99 arasında olmalıdır', [
        { text: 'Tamam', style: 'destructive', onPress: resetHandler }
      ]);
      return
    }
    onSendNumber(choosenNumber)
  };


  const numberHandler = (number) => {
    setEnteredNumber(number)
  }


  return (
    <View style={styles.Container}>
      <Title>Computer Guess</Title>
      <View style={styles.card}>

        <TextInput
          onChangeText={numberHandler}
          value={enteredNumber}
          maxLength={2}
          keyboardType='number-pad'
          style={styles.input}>

        </TextInput>


        <View style={styles.ButtonsContainer}>
          <View style={styles.ButtonContainer}><CustomButton onPress={resetHandler}  >Clear</CustomButton></View>
          <View style={styles.ButtonContainer}><CustomButton onPress={confirmHandler}>Apply</CustomButton></View>
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
    padding: 20
  },
  card: {
    backgroundColor: 'orange',
    alignItems: "center",
    justifyContent: "center",
    padding: 23,
    marginTop: 20,
    borderRadius: 10,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: 'bold'
  },

  ButtonsContainer: {
    flexDirection: 'row'
  },
  ButtonContainer: {
    flex: 1
  }
})