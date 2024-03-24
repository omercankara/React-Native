import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({children}) {
  return (
    <Text style={styles.Title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    Title:{
        borderWidth:2,
        borderColor:'yellow',
        textAlign:'center',
        padding:15,
        marginBottom:20,
        borderRadius:20,
        color:"white",
        fontSize:30
    }
})