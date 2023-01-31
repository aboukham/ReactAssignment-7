import './Post.css'

function Post(props){
    const setSelected = () => {
        props.setSelected(props.id)
    }
    return (
        <div className="content" onClick={setSelected} style={{ backgroundColor:"pink", margin: 30, width: 200}}>
            <h3>Id: {props.id}</h3>
            <h3>Title: {props.title}</h3>
            <h3>Author: {props.author}</h3>
        </div>
    );
}

export default Post