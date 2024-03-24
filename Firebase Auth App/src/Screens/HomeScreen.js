import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from "../firebase/firebase"
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {
  const navigation = useNavigation()
  const handleOut = () => {
      auth.signOut().then(() => {
        navigation.navigate('login')
      })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleOut} style={[styles.Button]}>
        <Text style={styles.OutlineButtonText} >LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginBottom:20,
  },
  Button: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10

  },
  ButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  OutlineButtonText: {
   color:"white",
   fontSize:25,
   fontWeight:'bold'
  },

  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})