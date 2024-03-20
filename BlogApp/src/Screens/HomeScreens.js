import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, } from 'react-native'
import React, { useContext } from 'react'
import {BlogContext} from '../Context/BlogContext'
import { Feather } from "@expo/vector-icons"


export default function HomeScreens({ navigation }) {
  const { data, addBlogPost, deletePost } = useContext(BlogContext)


  return (
    <View style={styles.homeScreen}>

      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowScreen', { id: item.id })}
            >
              <View style={styles.Container}>
                <Text style={styles.text}>{item.title}</Text>
                <TouchableOpacity>
                  <Feather onPress={() => deletePost(item.id)} style={styles.trash} name="trash" size={24} color="black"></Feather>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    marginTop: 10,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 0,
   
  },
  text: {
    fontSize: 30,
    color: 'white'
  },
  trash: {
    color: 'white',
    fontSize: 40
  },

  homeScreen:{
    backgroundColor:"lightblue",
    height:"100%"
  }

})