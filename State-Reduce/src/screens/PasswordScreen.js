import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function PasswordScreen() {
  const [password, setPassword] = useState('DFSDF')
  return (
    <View style={styles.main}>
      <Text style={styles.labelStyle}>SET PASSWORD PLEASE</Text>
  
      <TextInput value={password} onChange={(newValue) => setPassword(newValue)} autoCorrect={true} style={styles.input} />
      {password.length < 6 ? (
        <Text>Parola en az 6 karakter içermeli</Text>
      ):null}
    </View>

  )
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 25,
    color: 'red'
  },
  main: {
    margin: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 50
  }
})