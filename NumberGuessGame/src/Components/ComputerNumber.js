import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerNumber({children}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        borderWidth:3,
        borderColor:'yellow',
        padding:11,
        alignItems:"center",
        borderRadius:20
    },
    numberText:{
        fontSize:36,
        color:'white',
        fontWeight:'bold'
    }
})