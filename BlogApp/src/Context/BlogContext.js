import React, { useReducer } from "react"
import blogReducers from "../Reducers/BlogReducers"

export const BlogContext = React.createContext();
const BlogContextProvider = (props) => {

   const initalState = [
      { id: Math.floor(Math.random()) * 999999, title: 'React Native',content:"test" },
   ]

   const [blog, dispatch] = useReducer(blogReducers, initalState)

   const addBlogPost = (title,content,callback) => {
      dispatch({
         type: 'add_blog', 
         payload:{
            title,
            content
         }
      })

      if(callback){
         callback()
      }
   }

   const EditBlogPost = (id,title,content,callback) => {
      dispatch({
         type:'Edit_BlogPost',
         payload:{
            id,
            title,
            content
         }
      })
      if(callback){
         callback()
      }
   }

   const deletePost = (id) => {
      dispatch({
         type: 'deletePost',
         payload: id
      })
   }

   return (
      <BlogContext.Provider value={{
         data: blog,
         addBlogPost,
         EditBlogPost,
         deletePost
      }}>
         {props.children}
      </BlogContext.Provider>
   )
}
export default BlogContextProvider

