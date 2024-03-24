import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import GameStartScreen from './src/Screens/GameStartScreen';
import GameScreen from "./src/Screens/GameScreen"
import GameOver from "./src/Screens/GameOverScreen"
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';

export default function App(numberOfGuess) {

  const [userNumber, setUserNumber] = useState(null)
  const [gameİsOver, setGameİsOver] = useState(true)
  const [guessCounts, setGuessCounts] = useState(0)

  const sendedNumberHandler = (choosenNumber) => {
    setUserNumber(choosenNumber)
    setGameİsOver(false)
  }

  const gameOverHandler = (numberOfGuess) => {
    setGameİsOver(true)
    setGuessCounts(numberOfGuess)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
  }



  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />
  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber}  onGameOver={gameOverHandler} />)
  }

  if (gameİsOver && userNumber) {
    screen = (<GameOver onStartNewGame={startNewGameHandler}  roundsNumber={guessCounts} userNumber={userNumber}></GameOver>)
  }

  return (
    <LinearGradient colors={['rgba(0,0,0,0.9)', 'transparent']} style={styles.Container}>
      {screen}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  Container: {
    flex: 1,
  }
});
