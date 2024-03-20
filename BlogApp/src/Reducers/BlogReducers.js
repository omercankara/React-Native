const blogReducer = (state, action) => {
   switch (action.type) {
      case 'add_blog':
         return [
            ...state,
            {
               id: Math.floor(Math.random() * 9999),
               title: action.payload.title,
               content: action.payload.content
            }
         ]

      case 'deletePost':
         return state.filter((blogPost) => blogPost.id !== action.payload)

         
      case 'Edit_BlogPost':
         return state.map((blogPost) => {
            return blogPost.id === action.payload.id ? action.payload : blogPost
         })

      default:
         return state
   }
}


export default blogReducer