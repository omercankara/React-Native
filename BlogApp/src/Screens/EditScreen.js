import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogContext'
import BlogPostForm from '../Components/BlogPostForm'


export default function EditScreen({ route,navigation }) {
  const { data,EditBlogPost } = useContext(BlogContext)
  const id = route.params.id
  const blogPost = data.find((blogPost) => blogPost.id == id)
  return (
    <BlogPostForm onSubmit={(title, content) => {
      EditBlogPost(id, title, content, () => navigation.navigate('HomeScreens'))
    }}
      isEditable={true}
      editValue={{ title: blogPost.title, content: blogPost.content }}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "red",
    height: "100%"
  }
})