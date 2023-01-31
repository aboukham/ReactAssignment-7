
import "./Posts.css"
import Post from "../../Components/Post/Post"
import * as React from "react"

function Posts(props){
    return(
        props.posts.map(post =>{
            return <Post id={post.id} key={post.id}
            title={post.title} author={post.author} setSelected={props.setSelected}
            
            style={{display: "flex"}}/>
            
        })
        

    )
}

export default Posts