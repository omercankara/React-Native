import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'

export default function ShowScreen({ route }) {
  const { data } = useContext(BlogContext)
  const id = route.params.id
  const blogPost = data.find((blogPost) => blogPost.id == id)
  return (
    <View style={styles.Container}>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.text}>{blogPost.title}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Content</Text>
        <Text style={styles.text}>{blogPost.content}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    alignItems:"center",
    
    backgroundColor:"darkorange",
    height:"100%"
  },

  itemContainer: {
    backgroundColor: "darkred",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: "center",
    width: '90%'
  },
  text: {
    fontSize: 30,
    color: "pink",
    fontWeight: 'bold'
  },
  label: {
    color: "white",
    fontSize: 30,
    fontWeight: 'bold'
  }

})

