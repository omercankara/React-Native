import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({data}) {

  return data.map((item)  => (
    <View key={item}  style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ))

}

const styles = StyleSheet.create({
  listItem:{
    backgroundColor:'orange',
    marginVertical:5,
    marginHorizontal:12,
    borderRadius:5,
    paddingVertical:5
    
  },
  itemText:{
   textAlign:'center',
   color:'white',
   fontSize:15,
   fontWeight:'bold'
  }
})