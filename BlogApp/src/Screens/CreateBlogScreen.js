import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../Components/BlogPostForm'
import { BlogContext } from '../Context/BlogContext'

export default function CreateBlogScreen({ navigation }) {
  const { addBlogPost } = useContext(BlogContext)
  return (
    <BlogPostForm isEditable={false} onSubmit={(title, content) => {
      addBlogPost(title,content, () => {
        navigation.navigate("HomeScreens")
      })
    }} />
  )
}

const styles = StyleSheet.create({})