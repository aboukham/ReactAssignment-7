import Posts from "./Posts/Posts";
import React, {useRef, useState} from "react";
import PostDetails from "../Components/PostDetails/PostDetails";
    
export default function Dashboard() {
    const [selectedState, setSelectedState] = useState(111);
    const titleRef = useRef(null);
    const [postsState, setPostsState] = useState(
        [
            { id: 1, title: "Angular", author: "abdelaziz" },
            { id: 2, title: "React", author: "aboukhame" },
            { id: 3, title: "Nodejs", author: "John" }
        ]
    );
    
    const setSelected = (id) => {        
        setSelectedState(id);
    }
    
        const updateFirstPostTitle = () =>
        {
           let posts = [...postsState];
            posts[0].title = titleRef.current.value;
            setPostsState(posts);
        }
    
        return( <React.Fragment>
            <div>
                <div className="Post" >
                    <Posts 
                        posts={postsState}
                        setSelected={setSelected}
                    />
    
                </div>
                <br/>
                <div>
                    <input type="text" ref={titleRef} style={{ padding: '10px', marginBottom: '10px' }}></input>
                    <br/>
                    <button onClick={updateFirstPostTitle} style={{backgroundColor:"lightblue"}}>Change Title</button>
                </div>
                <PostDetails  selectedPost= { postsState.find(e => e.id === selectedState)} />
                <div>
                </div>
            </div>
    
        </React.Fragment>
        );
    }