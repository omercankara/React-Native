import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.content}>
      <Text>Home Screen</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('CoursesScreen')}
      />
      <Button style={styles.buttonStyle}
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('CoursesInformation')}
      />
      <Button style={styles.buttonStyle}
        title="Sayaç"
        onPress={() => navigation.navigate('CounterScreen')}
      />

      <Button style={styles.buttonStyle}
        title="Renk Degiştir"
        onPress={() => navigation.navigate('ChangeColor')}
      />

      <Button style={styles.buttonStyle}
        title="Şifre Ekranı"
        onPress={() => navigation.navigate('PasswordScreen')}
      />



    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  }

})