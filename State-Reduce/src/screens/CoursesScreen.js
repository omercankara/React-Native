import { StyleSheet, Button, Text, View, FlatList } from 'react-native'
import React from 'react'



export default function Courses() {
  const courses = [
    {
      id: 1,
      name: 'Angulr'
    },
    {
      id: 2,
      name: "Vue"
    },
    {
      id: 3,
      name: "React"
    },
    {
      id: 4,
      name: 'Bootstrap'
    }
  ]
  return (
    <FlatList
      /* horizontal //yatay hizalar */
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content} >{item.name}</Text>
      }} />
  )
}




const styles = StyleSheet.create({
  content: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    fontSize: 30,
    padding: 20,
    color: "white"
  }
})