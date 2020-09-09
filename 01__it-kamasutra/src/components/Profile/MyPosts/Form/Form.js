import React from 'react';
import clases from './Form.module.css'


const Form = (props) => {

    let createPostElement = React.createRef()
    // let createPost = props.createPost

    console.log( props.createPost)

    const createPostForm = () => {
        // debugger
        let text = createPostElement.current.value
        props.createPost(text)
        // createPostElement.current.value = ''
    }

    return (
        <div className={clases.creat_post}>
            <textarea
                name="textPost" 
                id="postText"
                ref={createPostElement}
                placeholder="I will walk in..."
                value="fcX"/>
            <button onClick={createPostForm} >Creat post</button>
        </div>
    )
}

export default Form;